import { useState, useEffect } from "react";
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint({
        sm: window.innerWidth < 640,
        md: window.innerWidth >= 640 && window.innerWidth < 768,
        lg: window.innerWidth >= 768 && window.innerWidth < 1024,
        xl: window.innerWidth >= 1280,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};
