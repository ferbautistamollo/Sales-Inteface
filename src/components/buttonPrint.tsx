import { Button, Spinner, Tooltip } from "@heroui/react";

import { PrintIcon } from "@/components";

export interface Props {
  onPress?: () => void;
  isPending?: boolean;
  isDisabled?: boolean;
  isIconOnly?: boolean;
}

export const ButtonPrint = ({
  onPress = () => {},
  isPending = false,
  isDisabled = false,
  isIconOnly = false,
}: Props) => {
  return (
    <Tooltip delay={0}>
      <Button
        className="text-fuchsia-800"
        isDisabled={isDisabled}
        isPending={isPending}
        size="sm"
        variant="secondary"
        onPress={onPress}
      >
        {isIconOnly ? null : "IMPRIMIR"}
        {isPending ? <Spinner color="current" size="sm" /> : <PrintIcon />}
      </Button>
      <Tooltip.Content showArrow placement="right">
        <Tooltip.Arrow />
        <p>Imprimir</p>
      </Tooltip.Content>
    </Tooltip>
  );
};
