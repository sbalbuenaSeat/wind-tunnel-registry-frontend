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
  contentProps?: React.ComponentProps<typeof Dialog.Content>;
  bodyProps?: React.ComponentProps<typeof Dialog.Body>;
  footerProps?: React.ComponentProps<typeof Dialog.Footer>;
  headerProps?: React.ComponentProps<typeof Dialog.Header>;
  backdropProps?: React.ComponentProps<typeof Dialog.Backdrop>;
  positionerProps?: React.ComponentProps<typeof Dialog.Positioner>;
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
    contentProps,
    bodyProps,
    footerProps,
    headerProps,
    backdropProps,
    positionerProps,
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
        <Dialog.Backdrop
          bg="rgba(15, 23, 42, 0.72)"
          backdropFilter="blur(8px)"
          {...backdropProps}
        />

        <Dialog.Positioner px="4" {...positionerProps}>
          <Dialog.Content
            ref={ref}
            mx="4"
            maxW="md"
            w="full"
            borderRadius="2xl"
            bg="rgba(255, 255, 255, 0.88)"
            border="1px solid"
            borderColor="whiteAlpha.700"
            backdropFilter="blur(18px) saturate(140%)"
            boxShadow="0 20px 60px rgba(0, 0, 0, 0.18)"
            _dark={{
              bg: 'rgba(24, 24, 27, 0.9)',
              borderColor: 'whiteAlpha.200',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.42)',
            }}
            {...contentProps}
          >
            <Dialog.Header
              px="5"
              py="3"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap="3"
              borderBottom="1px solid"
              borderColor="blackAlpha.100"
              _dark={{ borderColor: 'whiteAlpha.100' }}
              {...headerProps}
            >
              <Dialog.Title fontSize="lg" fontWeight="700">
                {title}
              </Dialog.Title>

              {!hideCloseButton && (
                <Dialog.CloseTrigger asChild>
                  <CloseButton
                    size="sm"
                    onClick={handleClose}
                    disabled={isLoading}
                    _hover={{ bg: 'blackAlpha.100' }}
                    _active={{ bg: 'blackAlpha.200' }}
                    _dark={{
                      _hover: { bg: 'whiteAlpha.100' },
                      _active: { bg: 'whiteAlpha.200' },
                    }}
                  />
                </Dialog.CloseTrigger>
              )}
            </Dialog.Header>

            <Dialog.Body px="5" py="4" {...bodyProps}>
              {description && (
                <Dialog.Description color="fg.muted">
                  {description}
                </Dialog.Description>
              )}
            </Dialog.Body>

            <Dialog.Footer
              px="5"
              pb="5"
              pt="3"
              gap="3"
              borderColor="blackAlpha.100"
              _dark={{ borderColor: 'whiteAlpha.100' }}
              {...footerProps}
            >
              <Dialog.ActionTrigger asChild>
                <Button
                  variant="outline"
                  onClick={handleClose}
                  disabled={isLoading}
                  borderColor="blackAlpha.200"
                  _hover={{
                    bg: 'blackAlpha.50',
                    borderColor: 'blackAlpha.300',
                  }}
                  _dark={{
                    borderColor: 'whiteAlpha.200',
                    _hover: {
                      bg: 'whiteAlpha.100',
                      borderColor: 'whiteAlpha.300',
                    },
                  }}
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
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
});
