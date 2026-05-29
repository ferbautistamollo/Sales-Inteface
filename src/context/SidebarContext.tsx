"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextProps {
  selectedKey?: string;
  setSelectedKey: (key: string) => void;
}

interface SidebarProviderProps {
  selectedKey?: string;
  children: ReactNode;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

SidebarContext.displayName = "SidebarContext";

export function SidebarProvider({
  selectedKey = "",
  children,
}: SidebarProviderProps) {
  const [selectedKeyState, setSelectedKeyState] = useState(selectedKey);

  return (
    <SidebarContext.Provider
      value={{
        selectedKey: selectedKeyState,
        setSelectedKey: setSelectedKeyState,
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
