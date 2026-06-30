"use client";

import {
  Autocomplete,
  Button,
  EmptyState,
  Input,
  Label,
  ListBox,
  SearchField,
  Surface,
  useFilter,
} from "@heroui/react";
import Image from "next/image";

import { Voucher } from "@/utils/interfaces";

interface Props {
  paymentType: string;
  isGenerateQr?: boolean;
  imagenQr?: string;
  generateQr?: () => void;
  cancelPaymentQr?: () => void;
  financialEntities?: {
    id: string;
    name: string;
  }[];
  voucher: Voucher;
  setVoucher: (voucher: Voucher) => void;
}

export const PaymentType = ({
  paymentType,
  isGenerateQr = false,
  imagenQr,
  generateQr,
  cancelPaymentQr,
  financialEntities = [],
  voucher,
  setVoucher,
}: Props) => {
  const { contains } = useFilter({ sensitivity: "base" });

  return (
    <>
      {paymentType !== "QR" ? (
        <div className="flex flex-col gap-4">
          <Surface className="flex w-full items-center justify-center rounded-3xl bg-surface">
            <Label className="w-1/4">Nombre del depositante</Label>
            <Input
              aria-label="Nombre del depositante"
              className="w-3/4"
              value={voucher.customer}
              variant="secondary"
              onChange={(e) =>
                setVoucher({ ...voucher, customer: e.target.value })
              }
            />
          </Surface>

          <Surface className="flex w-full items-center justify-center rounded-xl bg-surface">
            <Label className="w-1/4">Carnet de identidad del depositante</Label>
            <Input
              className="w-3/4"
              inputMode="numeric"
              type="text"
              value={voucher.identityCardCustomer}
              variant="secondary"
              onChange={(e) =>
                setVoucher({ ...voucher, identityCardCustomer: e.target.value })
              }
            />
          </Surface>

          <Surface className="flex w-full items-center justify-center rounded-xl bg-surface">
            <Label className="w-1/4">Fecha del depósito</Label>
            <Input
              className="w-3/4"
              defaultValue={new Date().toISOString().split("T")[0]}
              disabled={paymentType === "cash" ? true : false}
              type="date"
              variant="secondary"
              onChange={(e) =>
                setVoucher({ ...voucher, depositDate: e.target.value })
              }
            />
          </Surface>

          <Surface className="flex w-full items-center justify-center rounded-xl bg-surface">
            <Label className="w-1/4">Ubicación del depósito</Label>
            <Autocomplete
              aria-label="Ubicación del depósito"
              className="w-3/4 flex"
              isDisabled={paymentType === "cash" ? true : false}
              placeholder="Entidad financiera"
              selectionMode="single"
              value={String(voucher.paymentLocationId)}
              onChange={(value) =>
                setVoucher({ ...voucher, paymentLocationId: String(value) })
              }
            >
              <Autocomplete.Trigger>
                <Autocomplete.Value />
                <Autocomplete.ClearButton />
                <Autocomplete.Indicator />
              </Autocomplete.Trigger>
              <Autocomplete.Popover>
                <Autocomplete.Filter filter={contains}>
                  <SearchField
                    aria-label="Buscar entidad bancaria"
                    name="search"
                    variant="secondary"
                  >
                    <SearchField.Group aria-label="Search">
                      <SearchField.SearchIcon aria-label="Search icon" />
                      <SearchField.Input placeholder="Search states..." />
                      <SearchField.ClearButton />
                    </SearchField.Group>
                  </SearchField>
                  <ListBox
                    renderEmptyState={() => (
                      <EmptyState>No results found</EmptyState>
                    )}
                  >
                    {financialEntities.map((item) => (
                      <ListBox.Item
                        key={String(item.id)}
                        id={String(item.id)}
                        textValue={item.name}
                      >
                        {item.name}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Autocomplete.Filter>
              </Autocomplete.Popover>
            </Autocomplete>
          </Surface>
        </div>
      ) : (
        <>
          {isGenerateQr ? (
            <>
              <Button
                className="w-full"
                variant="danger-soft"
                onPress={cancelPaymentQr}
              >
                CANCELAR PAGO POR QR
              </Button>
              <div className="flex items-center justify-center">
                <Image
                  alt="QR"
                  height={400}
                  src={`data:image/png;base64,${imagenQr}`}
                  width={400}
                />
              </div>
            </>
          ) : (
            <Button className="w-full" variant="secondary" onPress={generateQr}>
              GENERAR QR
            </Button>
          )}
        </>
      )}
    </>
  );
};
