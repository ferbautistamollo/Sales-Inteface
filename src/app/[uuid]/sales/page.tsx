"use client";

import { Button, Card, CloseButton } from "@heroui/react";

import { useSales } from "@/context";
import { useState } from "react";
import { getPersonSales } from "@/api";
import { Products } from "@/utils/interfaces";


export default function Page() {
  const { person } = useSales();
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(false);
  // const sidebar = [{ id: "1", name: "Productos" }];


  const getSales = async (Key: string) => {
    try {
      setLoading(true);

      const { error, data } = await getPersonSales(Key);

      if (error) return;
      setAllProducts(data);
    } finally {
      setLoading(false);
    }
  };

  return (
      <Card className="w-full items-stretch md:flex-row border-2">
        <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
          <img
            alt="Cherries"
            className="pointer-events-none absolute inset-0 h-full w-full scale-75 object-cover select-none"
            loading="lazy"
            src="/sales.svg"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1">
            <Card.Title className="pr-8">Become an ACME Creator!</Card.Title>
            <Card.Description>
              Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet
              faucibus etiam.
            </Card.Description>
            <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
          </Card.Header>
          <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">Only 10 spots</span>
              <span className="text-xs text-muted">Submission ends Oct 10.</span>
            </div>
            <Button className="w-full sm:w-auto">Apply Now</Button>
          </Card.Footer>
        </div>
      </Card>
  );
}
