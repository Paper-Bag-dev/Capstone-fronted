import { useState } from "react";

interface SidebarStore {
  isMinimized: boolean;
  toggle: () => void;
}

export const useSidebar = (): SidebarStore => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggle = () => {
    setIsMinimized((prevState) => !prevState);
  };

  return {
    isMinimized,
    toggle,
  };
};
