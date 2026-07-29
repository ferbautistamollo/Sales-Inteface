"use client";

import {
  Button,
  Input,
  Label,
  Card,
  Surface,
  toast,
  Separator,
} from "@heroui/react";
import { useState } from "react";

import { ReportIcon } from "@/components";
import { apiClient } from "@/services";

export default function Persons() {
  const dateNow = new Date().toISOString().split("T")[0];

  const [dateFrom, setDateFrom] = useState(dateNow);
  const [dateTo, setDateTo] = useState(dateNow);
  const [, setLoading] = useState(false);

  const downloadPdf = async (report: string) => {
    try {
      setLoading(true);
      const response = await apiClient.GET(
        `sales/reports/${report}?dateFrom=${dateFrom}&dateTo=${dateTo}`,
      );

      if (!response.ok) {
        toast.danger("No se pudo generar el PDF");

        return;
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const iframe = document.createElement("iframe");

      iframe.style.position = "fixed";
      iframe.style.width = "1px";
      iframe.style.height = "1px";
      iframe.style.opacity = "0";
      iframe.style.pointerEvents = "none";
      iframe.src = url;
      iframe.onload = () => {
        const win = iframe.contentWindow;

        if (!win) return;
        win.focus();
        setTimeout(() => {
          win.print();
        }, 500);
      };
      document.body.appendChild(iframe);
    } catch {
      toast.danger("No se pudo generar el PDF");

      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex-1 min-w-62.5 max-w-75 2xl:max-w-100 h-full">
        <Card className="relative flex flex-col border-2 h-full w-full min-h-0 gap-2">
          <Surface className="flex w-full items-center justify-center rounded-xl bg-surface">
            <Label className="w-1/4">Desde</Label>
            <Input
              className="w-3/4"
              defaultValue={dateFrom}
              type="date"
              variant="secondary"
              onChange={(e) => setDateFrom(e.target.value)}
            />
          </Surface>
          <Surface className="flex w-full items-center justify-center rounded-xl bg-surface">
            <Label className="w-1/4">Hasta</Label>
            <Input
              className="w-3/4"
              defaultValue={dateTo}
              type="date"
              variant="secondary"
              onChange={(e) => setDateTo(e.target.value)}
            />
          </Surface>
        </Card>
      </div>
      <Card className="card-no-outline flex-1 border-2 p-3 min-w-162.5 h-full">
        <div className="flex h-full gap-2">
          <div className="flex w-1/4 flex-col gap-1 overflow-y-auto overflow-x-hidden">
            <Button
              variant="tertiary"
              onPress={() => {
                downloadPdf("allSales");
              }}
            >
              <ReportIcon />
              Reporte de ventas
            </Button>
          </div>
        </div>
        <Separator orientation="vertical" />
        <div className="flex w-3/4 flex-col h-full">
          <div className="flex flex-col h-4/5 rounded-lg">
            <Button
              variant="tertiary"
              onPress={() => {
                downloadPdf("allSales");
              }}
            >
              <ReportIcon />
              Reporte de ventas
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
