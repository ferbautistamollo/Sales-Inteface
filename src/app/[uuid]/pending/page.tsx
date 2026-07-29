"use client";

import { Button, Card, toast } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

import { useSales } from "@/context";
import { getQrPending, getQrImage } from "@/api";
import { EmptyContent, SpinnerLoading, ViewerQr } from "@/components";

export default function Page() {
  const { person } = useSales();
  const [qrPending, setQrPending] = useState<any[]>([]);
  const [, setLoading] = useState(false);
  const [loadingQr, setLoadingQr] = useState(false);
  const [, setActiveQrId] = useState<number | null>(null);
  const [base64, setBase64] = useState<string | null>(null);

  const getQrPendingData = async (key: string) => {
    try {
      setLoading(true);
      const { error, data } = await getQrPending(key);

      setQrPending(data);
      if (error) return;

      return;
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (loadingQr) return <SpinnerLoading isLoading />;
    if (base64)
      return (
        <>
          <ViewerQr base64={base64} />
        </>
      );

    return <EmptyContent text="SELECCIONA UN QR PARA VISUALIZAR" />;
  };

  const viewTransition = async (qrId: number) => {
    try {
      setLoadingQr(true);
      setActiveQrId(qrId);

      const { error, message, data } = await getQrImage(String(qrId));

      if (error) {
        toast.danger(message);

        return;
      }

      setBase64(data.qrImage);
    } catch {
      toast.danger("Error al obtener el qr");

      return;
    } finally {
      setLoadingQr(false);
    }
  };

  useEffect(() => {
    getQrPendingData(person.id);
  }, []);

  return (
    <div className="relative flex flex-col h-full w-full min-h-0">
      <div className="flex gap-1 flex-1 min-h-0">
        <div className="flex flex-col gap-y-1 overflow-y-auto w-[52%]">
          {qrPending.length === 0 ? (
            <EmptyContent />
          ) : (
            qrPending.map((qr) => (
              <Card
                key={qr.id}
                className="w-full items-stretch md:flex-row border-2"
              >
                <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
                  <Image
                    alt="qr"
                    height={100}
                    loading="lazy"
                    src="/qrPayment.svg"
                    width={200}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <Card.Header className="gap-1">
                    <Card.Title className="pr-8">
                      Estado: {qr.qrStatus}{" "}
                    </Card.Title>
                    <Card.Description />
                  </Card.Header>
                  <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground" />
                      <span className="text-xs text-muted">
                        Expira en {qr.expirationDateQr}
                      </span>
                    </div>
                    <div className="flex w-full flex-col gap-2 sm:flex-row sm:w-auto">
                      <Button
                        className="w-full sm:w-auto"
                        variant="secondary"
                        onPress={() => viewTransition(qr.qrId)}
                      >
                        Ver QR
                      </Button>
                    </div>
                  </Card.Footer>
                </div>
              </Card>
            ))
          )}
        </div>
        <div className="relative h-full border-l pl-2 w-[48%]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
