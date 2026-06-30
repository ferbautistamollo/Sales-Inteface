import { ArrowUpLargeIcon } from "@/components";

export default function Page() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute left-2/5 -translate-x-112.5">
        <div className="max-w-md">
          <h2 className="text-5xl font-bold">Busque un afiliado</h2>

          <p className="mt-2 text-lg text-default-500">
            Utilice el buscador superior para encontrar un afiliado mediante su
            Número Único del Policía (NUP) o Carnet de Identidad (CI) y
            registrar una venta.
          </p>
        </div>
      </div>
      <div className="absolute left-3/7">
        <ArrowUpLargeIcon className="animate-pulse opacity-20" size={600} />
      </div>
    </div>
  );
}
