"use client";
export const dynamic = "force-dynamic";

import { Card } from "@heroui/react";

import { useSales } from "@/context";
import { UserInfo } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { person } = useSales();

  return (
    <>
      <div className="flex-1 min-w-62.5 max-w-75 2xl:max-w-100 h-full">
        <div className="relative flex flex-col h-full w-full min-h-0 gap-2">
          <UserInfo
            isPolice={person.isPolice}
            user={{
              fullName: person.fullName,
              identityCard: person.identityCard,
              nup: person.nup,
              state: true,
            }}
          />
        </div>
      </div>
      <Card className="card-no-outline flex-1 border-2 p-3 min-w-162.5 h-full overflow-y-auto">
        {children}
      </Card>
    </>
  );
}
