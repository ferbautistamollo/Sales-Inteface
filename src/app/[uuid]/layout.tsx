import { ReactNode } from "react";

import { getForCreatingSale } from "@/api";
import { AlertServer, BreadcrumbsState } from "@/components";
import { Options } from "@/components/sales/options";
import { SalesProvider } from "@/context";

interface ProfileLayoutProps {
  children: ReactNode;
  params: Promise<{ uuid: string }>;
}

export default async function Layout({ children, params }: ProfileLayoutProps) {
  const { uuid } = await params;
  const { error, message, data } = await getForCreatingSale(uuid);

  if (error) return <AlertServer color="warning" description={message} />;

  const person = data?.person;
  const parameters = data?.parameters;
  const groups = data?.groups;
  const paymentTypes = data?.paymentTypes;
  const financialEntities = data?.financialEntities;

  return (
    <div className="ml-2 mr-2 my-2">
      <SalesProvider
        financialEntities={financialEntities}
        groups={groups}
        parameters={parameters}
        paymentTypes={paymentTypes}
        person={person}
      >
        <div className="flex justify-between items-center pb-2 w-full">
          <div>
            <BreadcrumbsState />
          </div>
          <Options />
        </div>
        <section className="flex justify-center md:flex-row flex-wrap gap-1 h-[calc(100vh-135px)]">
          {children}
        </section>
      </SalesProvider>
    </div>
  );
}
