import React from 'react';
import { HeroScreen } from './screens/HeroScreen';

const App = () => {
  return (
    <>
      <div className="noise" />
      <HeroScreen onNext={() => console.log('Connect Spotify Clicked')} />
    </>
  );
};

export default App;
