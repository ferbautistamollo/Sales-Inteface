import { ReactNode } from "react";
import { Card, Separator } from "@heroui/react";

import { getPerson, getGroups } from "@/api";
import { AlertServer, UserInfo, Sidebar } from "@/components";
import { SalesProvider, SidebarProvider } from "@/context";

interface ProfileLayoutProps {
  children: ReactNode;
  params: Promise<{ uuid: string }>;
}

export default async function Layout({ children, params }: ProfileLayoutProps) {
  const { uuid } = await params;
  const {
    error: personError,
    message: personMessage,
    data: personData,
  } = await getPerson(uuid);

  if (personError)
    return <AlertServer color="warning" description={personMessage} />;

  const { error, message, data: sidebar } = await getGroups();
  const fullName = String(
    [
      personData.firstName,
      personData.secondName,
      personData.lastName,
      personData.mothersLastName,
    ]
      .filter(Boolean)
      .join(" "),
  );

  return (
    <div className="ml-2 mr-2 my-2">
      <SalesProvider
        affiliateId={String(personData.nup)}
        cityBirth={personData.cityBirth}
        financialEntity={personData.financialEntity}
        pensionEntity={personData.pensionEntity}
        person={personData}
      >
        <SidebarProvider selectedKey={sidebar[0]?.id}>
          <section className="flex justify-center md:flex-row flex-wrap gap-1 h-[calc(100vh-90px)]">
            <div className="flex-1 min-w-62.5 max-w-75 2xl:max-w-100 h-full">
              <div className="relative flex flex-col h-full w-full min-h-0">
                <UserInfo
                  isPolice={personData.features.isPolice}
                  user={{
                    fullName: fullName,
                    identityCard: personData.identityCard,
                    nup: personData.nup,
                    state: true,
                  }}
                />
                <Separator className="my-1" />
                <div className="flex gap-1 flex-1 min-h-0">
                  {error ? (
                    <AlertServer color="warning" description={message} />
                  ) : (
                    <Sidebar sidebar={sidebar} />
                  )}
                </div>
              </div>
            </div>
            <Card className="card-no-outline flex-1 border-2 p-3 min-w-162.5 h-full">
              {children}
            </Card>
          </section>
        </SidebarProvider>
      </SalesProvider>
    </div>
  );
}
