"use client";

import { createContext, useContext, ReactNode } from "react";

import {
  Person,
  FinancialEntity,
  PensionEntity,
  CityBirth,
} from "@/utils/interfaces";

interface SalesContextProps {
  person: Person;
  affiliateId: string;
  financialEntity: FinancialEntity;
  pensionEntity: PensionEntity;
  cityBirth: CityBirth;
}

interface SalesProviderProps extends SalesContextProps {
  children: ReactNode;
}

const SalesContext = createContext<SalesContextProps | undefined>(undefined);

SalesContext.displayName = "SalesContext";

export function SalesProvider({
  person,
  financialEntity,
  pensionEntity,
  cityBirth,
  affiliateId,
  children,
}: SalesProviderProps) {
  return (
    <SalesContext.Provider
      value={{
        person,
        financialEntity,
        pensionEntity,
        cityBirth,
        affiliateId,
      }}
    >
      {children}
    </SalesContext.Provider>
  );
}

export const useSales = () => {
  const context = useContext(SalesContext);

  if (!context) {
    throw new Error("useSales debe usarse dentro de un SalesProvider");
  }

  return context;
};
