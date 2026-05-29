"use client";
import { useEffect } from "react";

import { useSidebar } from "@/context";

export default function Page() {
  useEffect(() => {}, []);

  const { selectedKey } = useSidebar();

  return <>selectedKey: {selectedKey}</>;
}
