import { useEffect, useState } from 'react';

type WindowSize = {
  width?: number;
  height?: number;
};

const DESKTOP_WIDTH = 1200;
const TABLET_WIDTH = 768;

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      if (!window) return;

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return {
    width: windowSize.width,
    height: windowSize.height,
    isTablet: windowSize.width ? windowSize.width >= TABLET_WIDTH : false,
    isDesktop: windowSize.width ? windowSize.width >= DESKTOP_WIDTH : false,
  };
};
