"use client";
// import { usePathname } from "next/navigation";
import { Breadcrumbs } from "@heroui/react";

import { subtitle } from "./primitives";

export const BreadcrumbsState = () => {
  // const pathname = usePathname();
  // const segments = pathname.split("/").filter(Boolean);

  // const getLabelFromSegment = (segment: string): string => {
  //   if (/^template$/.test(segment)) return "Ejemplo";
  //   if (/^[0-9a-fA-F-]{36}$/.test(segment)) return "Persona";

  //   return segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  // };

  // const breadcrumbs = segments.map((segment, index) => {
  //   const href = "/" + segments.slice(0, index + 1).join("/");
  //   const label = getLabelFromSegment(segment);

  //   return { href, label };
  // });

  return (
    <Breadcrumbs className={subtitle() + ""}>
      {/* {breadcrumbs.map((crumb, index) => {
        const isCurrent = index === breadcrumbs.length - 1;

        return (
          <Breadcrumbs.Item key={crumb.href} href={crumb.href}>
            {crumb.label}
          </Breadcrumbs.Item>
        );
      })} */}
    </Breadcrumbs>
  );
};
