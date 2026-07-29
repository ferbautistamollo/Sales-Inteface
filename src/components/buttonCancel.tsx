import { Button, Spinner, Tooltip } from "@heroui/react";

import { CancelIcon } from "@/components";

export interface Props {
  onPress?: () => void;
  isPending?: boolean;
  isDisabled?: boolean;
  isIconOnly?: boolean;
}

export const ButtonCancel = ({
  onPress = () => {},
  isPending = false,
  isDisabled = false,
  isIconOnly = false,
}: Props) => {
  return (
    <Tooltip delay={0}>
      <Button
        isDisabled={isDisabled}
        isPending={isPending}
        size="sm"
        variant="danger-soft"
        onPress={onPress}
      >
        {isIconOnly ? null : "CANCELAR"}
        {isPending ? <Spinner color="current" size="sm" /> : <CancelIcon />}
      </Button>
      <Tooltip.Content showArrow placement="right">
        <Tooltip.Arrow />
        <p>Cancelar</p>
      </Tooltip.Content>
    </Tooltip>
  );
};
