import { useEffect, useState } from 'react';

export default function useBreakpoint(breakpoint: number): boolean {
  const [onBreakpoint, setOnBreakpoint] = useState(false);

  useEffect(() => {
    setOnBreakpoint(window.innerWidth >= breakpoint);
  }, []);

  return !!onBreakpoint;
}
