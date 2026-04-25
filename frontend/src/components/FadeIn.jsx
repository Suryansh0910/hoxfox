import React, { useEffect, useRef, useState } from 'react';

export const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const translateClass = direction === 'up' ? 'translate-y-12' : 
                         direction === 'down' ? '-translate-y-12' : 
                         direction === 'left' ? 'translate-x-12' : '-translate-x-12';

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${className} ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${translateClass}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
