import * as React from 'react';
import {
  Button,
  type ButtonProps,
  CloseButton,
  Dialog,
  Portal,
} from '@chakra-ui/react';

export interface ConfirmDialogProps extends Omit<Dialog.RootProps, 'children'> {
  title: React.ReactNode;
  description?: React.ReactNode;
  confirmText?: React.ReactNode;
  cancelText?: React.ReactNode;
  onConfirm: () => void | Promise<void>;
  onCancel?: () => void;
  isLoading?: boolean;
  colorPalette?: ButtonProps['colorPalette'];
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement | null>;
  hideCloseButton?: boolean;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
}
export const ConfirmDialog = React.forwardRef<
  HTMLDivElement,
  ConfirmDialogProps
>(function ConfirmDialog(props, ref) {
  const {
    title,
    description,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
    isLoading = false,
    colorPalette = 'red',
    portalled = true,
    portalRef,
    hideCloseButton = false,
    confirmButtonProps,
    cancelButtonProps,
    ...rest
  } = props;

  const handleClose = () => {
    onCancel?.();
  };

  return (
    <Dialog.Root
      placement="center"
      closeOnInteractOutside
      closeOnEscape
      {...rest}
    >
      <Portal disabled={!portalled} container={portalRef}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content ref={ref} maxW="max-content" mx="4">
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              {description && (
                <Dialog.Description>{description}</Dialog.Description>
              )}
            </Dialog.Body>

            <Dialog.Footer gap="3">
              <Dialog.ActionTrigger asChild>
                <Button
                  variant="outline"
                  onClick={handleClose}
                  disabled={isLoading}
                  {...cancelButtonProps}
                >
                  {cancelText}
                </Button>
              </Dialog.ActionTrigger>

              <Button
                colorPalette={colorPalette}
                onClick={onConfirm}
                loading={isLoading}
                {...confirmButtonProps}
              >
                {confirmText}
              </Button>
            </Dialog.Footer>

            {!hideCloseButton && (
              <Dialog.CloseTrigger asChild>
                <CloseButton
                  size="sm"
                  onClick={handleClose}
                  disabled={isLoading}
                />
              </Dialog.CloseTrigger>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
});
