import { useEffect, useState } from 'react';

export const useMediaQuery = (breakpoint: number) => {
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleViewportResize = () => {
      setIsBelowBreakpoint(window.innerWidth <= breakpoint);
    }

    window.addEventListener('resize', handleViewportResize);

    return () => {
      window.removeEventListener('resize', handleViewportResize);
    }
  }, [breakpoint]);

  return isBelowBreakpoint;
}