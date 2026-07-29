"use client";

import Image from "next/image";

interface Props {
  base64: string;
}

export const ViewerQr = ({ base64 }: Props) => {
  if (!base64) return null;

  return (
    <div className="relative h-full w-full">
      <Image
        fill
        alt="Código QR"
        className="object-contain"
        src={`data:image/png;base64,${base64}`}
      />
    </div>
  );
};
