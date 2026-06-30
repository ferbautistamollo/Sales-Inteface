"use client";

import { createContext, useContext, ReactNode } from "react";

import {
  Person,
  Parameters,
  PaymentType,
  FinancialEntities,
  Groups,
} from "@/utils/interfaces";

interface SalesContextProps {
  person: Person;
  parameters: Parameters;
  paymentTypes: PaymentType[];
  financialEntities: FinancialEntities[];
  groups: Groups[];
}

interface SalesProviderProps extends SalesContextProps {
  children: ReactNode;
}

const SalesContext = createContext<SalesContextProps | undefined>(undefined);

SalesContext.displayName = "SalesContext";

export function SalesProvider({
  person,
  parameters,
  paymentTypes,
  financialEntities,
  groups,
  children,
}: SalesProviderProps) {
  return (
    <SalesContext.Provider
      value={{
        person,
        parameters,
        paymentTypes,
        financialEntities,
        groups,
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
