"use client";

import { Card, Tabs } from "@heroui/react";
import { useState } from "react";
import { useEffect } from "react";

import { ArrowRightIcon } from "@/components";

interface Props {
  sidebar: {
    id: string;
    name: string;
  }[];
  onChange?: (key: string) => void;
}

export const Sidebar = ({ sidebar, onChange }: Props) => {
  const [selectedKey, setSelectedKey] = useState(sidebar[0]?.id ?? "");

  useEffect(() => {
    if (sidebar.length > 0) {
      onChange?.(sidebar[0].id);
    }
  }, []);

  const handleTabChange = (key: string) => {
    setSelectedKey(key);
    onChange?.(key);
  };

  return (
    <Card className="flex border-2 w-full min-h-0 overflow-y-auto">
      <Card.Content>
        <Tabs
          className="w-full max-w-lg"
          orientation="vertical"
          selectedKey={selectedKey}
          variant="secondary"
          onSelectionChange={(key) => handleTabChange(key as any)}
        >
          <Tabs.ListContainer className="w-full">
            <Tabs.List
              aria-label="Vertical tabs"
              className="
              w-full
              uppercase
              *:data-[selected=true]:bg-green-200
              dark:*:data-[selected=true]:bg-green-900
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
