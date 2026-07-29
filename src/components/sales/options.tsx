"use client";
import { toast, Button } from "@heroui/react";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

import { getSalesRecords } from "@/api";
import { DrawerRecords } from "@/components";
import { useSales } from "@/context";

export const Options = () => {
  const [dataRecords, setDataRecords] = useState<any[]>([]);
  const { person } = useSales();
  const router = useRouter();
  const { uuid } = useParams();

  const handlePress = async () => {
    const { error, message, data } = await getSalesRecords(String(person.id));

    if (error) {
      toast.danger(message);

      return;
    }
    setDataRecords(data);
  };

  return (
    <div className="flex justify-end items-center gap-1">
      <div className="flex gap-1">
        <Button
          className="border-2"
          variant="outline"
          onClick={() => router.push(`/${uuid}/sales`)}
        >
          Ver registros
        </Button>
        <Button
          className="border-2"
          variant="outline"
          onClick={() => router.push(`/${uuid}/pending`)}
        >
          Ver pendientes
        </Button>
        <DrawerRecords data={dataRecords} getData={handlePress} />
      </div>
    </div>
  );
};
