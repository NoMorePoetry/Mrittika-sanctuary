
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Onboarding } from './components/Onboarding';
import { Dashboard } from './components/Dashboard';
import { DailyReflection } from './components/DailyReflection';
import { MoodAnalyzer } from './components/MoodAnalyzer';
import { Relationships } from './components/Relationships';
import { Sidebar } from './components/Sidebar';
import { ArchetypeProfile } from './components/ArchetypeProfile';
import { History } from './components/History';
import { CosmicLab } from './components/CosmicLab';
import { Sanctuary } from './components/Sanctuary';
import { MobileNav } from './components/MobileNav';
import { GlobalAudio } from './components/GlobalAudio';
import { SplashScreen } from './components/SplashScreen';
import { SettingsModal } from './components/SettingsModal';
import { UserContext, UserState, defaultUserState, INITIAL_CRYSTALS } from './context';

const Layout: React.FC<{ children: React.ReactNode; theme: 'dark' | 'light' }> = ({ children, theme }) => {
  const location = useLocation();
  const isOnboarding = location.pathname === '/onboarding';
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className={`flex min-h-screen w-full relative overflow-hidden transition-colors duration-700 ${theme === 'dark' ? 'bg-[#1c1917] text-stone-100' : 'bg-[#f5f5f4] text-stone-800'}`}>
      <div className="earth-texture absolute inset-0 z-0 opacity-10 pointer-events-none"></div>
      
      {theme === 'dark' ? (
        <>
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-orange-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-rose-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] bg-stone-800/30 rounded-full blur-[100px] pointer-events-none z-0"></div>
        </>
      ) : (
        <>
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-orange-200/40 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-rose-200/40 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] bg-stone-200/50 rounded-full blur-[100px] pointer-events-none z-0"></div>
        </>
      )}
      
      {!isOnboarding && <Sidebar />}
      
      <main 
        ref={mainRef}
        className={`relative z-10 flex-1 transition-all duration-300 ${!isOnboarding ? 'md:ml-64' : ''} h-screen overflow-y-auto scroll-smooth`}
      >
        <div className={`mx-auto p-4 md:p-8 ${!isOnboarding ? 'pb-32 md:pb-12' : ''} max-w-4xl`}>
          {children}
        </div>
      </main>

      {!isOnboarding && <MobileNav />}
    </div>
  );
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [user, setUser] = useState<UserState>(() => {
    const saved = localStorage.getItem('mrittika_user');
    if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.isPremium) parsed.isPremium = true;
        if (!parsed.inventory) parsed.inventory = INITIAL_CRYSTALS;
        if (!parsed.theme) parsed.theme = 'dark';
        return parsed;
    }
    return defaultUserState;
  });

  useEffect(() => {
    localStorage.setItem('mrittika_user', JSON.stringify(user));
  }, [user]);

  const updateUser = (updates: Partial<UserState>) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const unlockCrystal = (id: string) => {
    setUser(prev => {
      const exists = prev.inventory.find(c => c.id === id);
      if (exists && exists.unlocked) return prev;

      const newInventory = prev.inventory.map(c => 
        c.id === id ? { ...c, unlocked: true } : c
      );
      return { ...prev, inventory: newInventory };
    });
  };

  const toggleSettings = () => setShowSettings(!showSettings);

  return (
    <UserContext.Provider value={{ user, updateUser, unlockCrystal, toggleSettings }}>
      <GlobalAudio />
      <SettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />

      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <HashRouter>
          <Layout theme={user.theme}>
            <Routes>
              <Route path="/" element={user.archetype ? <Navigate to="/dashboard" /> : <Navigate to="/onboarding" />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/lab" element={<CosmicLab />} />
              <Route path="/daily" element={<DailyReflection />} />
              <Route path="/mood" element={<MoodAnalyzer />} />
              <Route path="/relationships" element={<Relationships />} />
              <Route path="/profile" element={<ArchetypeProfile />} />
              <Route path="/history" element={<History />} />
              <Route path="/sanctuary" element={<Sanctuary />} />
            </Routes>
          </Layout>
        </HashRouter>
      )}
    </UserContext.Provider>
  );
}
