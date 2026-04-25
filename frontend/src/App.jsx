import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { HoxNav } from './components/HoxNav';
import { HeroScreen } from './screens/HeroScreen';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import CallbackPage from './pages/CallbackPage';
import Dashboard from './pages/Dashboard';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const LandingPage = () => (
  <div className="w-full min-h-screen overflow-x-hidden relative bg-bg text-text">
    <div className="noise fixed inset-0 z-50 pointer-events-none" />
    <HoxNav mounted={true} onNext={() => { window.location.href = 'http://localhost:5001/auth/login'; }} />

    {/* Scrolling Content Layers */}
    <div className="relative w-full flex flex-col">
      <HeroScreen onNext={() => { window.location.href = 'http://localhost:5001/auth/login'; }} />

      {/* Mixed Background Wrapper for 2nd and 3rd components */}
      <div className="relative w-full flex flex-col overflow-hidden">

        {/* Shared Grid Background */}
        <div className="absolute inset-0 pointer-events-none"
             style={{
               backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
               backgroundSize: '64px 64px'
             }}
        />

        {/* Shared Ambient Glows */}
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(120,60,255,0.12)_0%,transparent_60%)] pointer-events-none opacity-80" />
        <div className="absolute top-[40%] right-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(160,255,100,0.1)_0%,transparent_60%)] pointer-events-none opacity-80" />
        <div className="absolute bottom-0 left-[20%] w-[1200px] h-[800px] bg-[radial-gradient(ellipse,rgba(60,180,255,0.08)_0%,transparent_60%)] pointer-events-none" />

        {/* Fading effect blending Hero into the grid */}
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-[oklch(0.08_0.025_275)] via-[oklch(0.08_0.025_275)/0.8] to-transparent pointer-events-none z-[10]" />

        <HowItWorks />
        <Features />
        <Footer />
      </div>
    </div>
  </div>
);

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LandingPage />} />
    <Route path="/callback" element={<CallbackPage />} />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
  </Routes>
);

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </BrowserRouter>
);

export default App;
