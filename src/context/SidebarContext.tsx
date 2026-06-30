"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextProps {
  selectedKey: string;
  setSelectedKey: (key: string) => void;
}

interface SidebarProviderProps {
  selectedKey: string;
  children: ReactNode;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

SidebarContext.displayName = "SidebarContext";

export function SidebarProvider({
  selectedKey: initialKey,
  children,
}: SidebarProviderProps) {
  const [selectedKey, setSelectedKey] = useState(initialKey);

  return (
    <SidebarContext.Provider
      value={{
        selectedKey,
        setSelectedKey,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar debe usarse dentro de un SidebarProvider");
  }

  return context;
};
