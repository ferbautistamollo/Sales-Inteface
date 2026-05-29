"use client";

import { Card, Tabs } from "@heroui/react";

import { useSidebar } from "@/context";
import { ArrowRightIcon } from "@/components";

interface Props {
  sidebar: {
    name: string;
    id: string;
  }[];
}

export const Sidebar = ({ sidebar }: Props) => {
  const { selectedKey, setSelectedKey } = useSidebar();

  const handleTabChange = (key: string) => {
    setSelectedKey(key);
  };

  return (
    <Card className="flex border-2 w-full min-h-0 overflow-y-auto">
      <Card.Content>
        <Tabs
          className="w-full max-w-lg"
          orientation="vertical"
          selectedKey={selectedKey}
          variant="secondary"
          onSelectionChange={handleTabChange as any}
        >
          <Tabs.ListContainer className="w-full">
            <Tabs.List
              aria-label="Vertical tabs"
              className="
              w-full
              uppercase
              *:data-[selected=true]:bg-green-200
              *:data-[selected=true]:font-bold
            "
            >
              {sidebar.map((tab) => (
                <Tabs.Tab
                  key={tab.id}
                  className="flex items-center justify-between h-10 text-xl"
                  id={tab.id}
                >
                  {tab.name}
                  <ArrowRightIcon />
                  <Tabs.Indicator className="bg-green-700" />
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs.ListContainer>
        </Tabs>
      </Card.Content>
    </Card>
  );
};
