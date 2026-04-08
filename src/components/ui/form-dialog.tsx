import * as React from 'react';
import {
  Button,
  type ButtonProps,
  CloseButton,
  Dialog,
  Portal,
} from '@chakra-ui/react';

export interface FormDialogProps extends Omit<Dialog.RootProps, 'children'> {
  title: React.ReactNode;
  children: React.ReactNode;
  submitText?: React.ReactNode;
  cancelText?: React.ReactNode;
  onCancel?: () => void;
  isLoading?: boolean;
  isSubmitDisabled?: boolean;
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement | null>;
  hideCloseButton?: boolean;
  submitButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  contentProps?: React.ComponentProps<typeof Dialog.Content>;
  bodyProps?: React.ComponentProps<typeof Dialog.Body>;
  footerProps?: React.ComponentProps<typeof Dialog.Footer>;
  submitFormId?: string;
}

export const FormDialog = React.forwardRef<HTMLDivElement, FormDialogProps>(
  function FormDialog(props, ref) {
    const {
      title,
      children,
      submitText = 'Save',
      cancelText = 'Cancel',
      onCancel,
      isLoading = false,
      isSubmitDisabled = false,
      portalled = true,
      portalRef,
      hideCloseButton = false,
      submitButtonProps,
      cancelButtonProps,
      contentProps,
      bodyProps,
      footerProps,
      submitFormId,
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
            <Dialog.Content ref={ref} mx="4" {...contentProps}>
              <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
              </Dialog.Header>

              <Dialog.Body {...bodyProps}>{children}</Dialog.Body>

              <Dialog.Footer gap="3" {...footerProps}>
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
                  type={submitFormId ? 'submit' : 'button'}
                  form={submitFormId}
                  loading={isLoading}
                  disabled={isSubmitDisabled || isLoading}
                  {...submitButtonProps}
                >
                  {submitText}
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
  },
);
