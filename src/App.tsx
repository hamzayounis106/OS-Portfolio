import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import MainPage from './Pages/MainPage';
import Dock from './Components/Dock/Dock';
import Contact from './Windows/Contact';
import Finder from './Windows/Finder';
import Browser from './Windows/Browser';
import TechStack from './Windows/TechStack';

type WindowType =
  | 'finder'
  | 'email'
  | 'settings'
  | 'user'
  | 'cv'
  | 'folder'
  | 'techstack';

interface WindowState {
  id: string;
  type: WindowType;
  zIndex: number;
}

function App() {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [nextZIndex, setNextZIndex] = useState(40);

  const handleWindowOpen = (windowType: WindowType) => {
    // Check if window is already open
    const existingWindow = windows.find((w) => w.type === windowType);
    console.log('Existing Windows:', windows);
    if (existingWindow) {
      // Bring to front
      handleWindowFocus(existingWindow.id);
    } else {
      // Open new window
      const newWindow: WindowState = {
        id: `${windowType}-${Date.now()}`,
        type: windowType,
        zIndex: nextZIndex,
      };
      setWindows([...windows, newWindow]);
      setNextZIndex(nextZIndex + 10);
    }
  };

  const handleWindowClose = (windowId: string) => {
    setWindows(windows.filter((w) => w.id !== windowId));
  };

  const handleWindowFocus = (windowId: string) => {
    setWindows((prevWindows) =>
      prevWindows.map((w) =>
        w.id === windowId ? { ...w, zIndex: nextZIndex } : w
      )
    );
    setNextZIndex(nextZIndex + 10);
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
      <Dock onWindowOpen={handleWindowOpen} />

      {/* Render all open windows */}
      {windows.map((window) => {
        switch (window.type) {
          case 'finder':
            return (
              <Finder
                key={window.id}
                onClose={() => handleWindowClose(window.id)}
                onFocus={() => handleWindowFocus(window.id)}
                zIndex={window.zIndex}
              />
            );
          case 'email':
            return (
              <Contact
                key={window.id}
                onClose={() => handleWindowClose(window.id)}
                onFocus={() => handleWindowFocus(window.id)}
                zIndex={window.zIndex}
              />
            );
          case 'cv':
            return (
              <Browser
                key={window.id}
                onClose={() => handleWindowClose(window.id)}
                onFocus={() => handleWindowFocus(window.id)}
                zIndex={window.zIndex}
              />
            );
          case 'techstack':
            return (
              <TechStack
                key={window.id}
                onClose={() => handleWindowClose(window.id)}
                onFocus={() => handleWindowFocus(window.id)}
                zIndex={window.zIndex}
              />
            );
          // Add more window types here as you create them
          default:
            return null;
        }
      })}
    </>
  );
}

export default App;
