import clsx from "clsx";

interface Props {
  title: string;
  price: string | number;
  currencySymbol?: string;
  disabled?: boolean;
  isSelected?: boolean;
  onPress?: () => void;
}

export const ButtonCard = ({
  title,
  price,
  currencySymbol,
  disabled = false,
  isSelected = false,
  onPress,
}: Props) => {
  return (
    <button
      className={clsx(
        `
        relative
        flex
        min-h-30
        w-full
        flex-col
        rounded-xl
        border-2
        p-4
        text-left
        transition-all
        duration-200
        `,
        isSelected
          ? "border-green-500 bg-green-100 dark:bg-green-900 shadow-md"
          : "border-default-200",
        !disabled && "hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]",
        disabled && "cursor-not-allowed opacity-80",
      )}
      disabled={disabled}
      type="button"
      onClick={onPress}
    >
      <h3 className="text-2xl">{title}</h3>

      <div className="mt-auto flex justify-end">
        <p className="text-3xl font-bold">
          {currencySymbol && (
            <span className="text-2xl font-normal capitalize">
              {currencySymbol}.&nbsp;
            </span>
          )}
          {price}
        </p>
      </div>
    </button>
  );
};
