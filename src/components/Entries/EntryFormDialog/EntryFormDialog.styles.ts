export const entryFieldStyles = {
  borderRadius: 'xl',
  bg: 'rgba(255,255,255,0.72)',
  borderColor: 'blackAlpha.200',
  backdropFilter: 'blur(10px)',
  _hover: {
    bg: 'rgba(255,255,255,0.82)',
  },
  _focusVisible: {
    borderColor: 'blue.400',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.22)',
  },
  _dark: {
    bg: 'rgba(255,255,255,0.08)',
    borderColor: 'whiteAlpha.200',
    _hover: {
      bg: 'rgba(255,255,255,0.12)',
    },
    _focusVisible: {
      borderColor: 'blue.300',
      boxShadow: '0 0 0 3px rgba(96, 165, 250, 0.22)',
    },
  },
};

export const entrySelectContentStyles = {
  borderRadius: 'xl',
  bg: 'rgba(255,255,255,0.9)',
  border: '1px solid',
  borderColor: 'blackAlpha.100',
  backdropFilter: 'blur(18px)',
  boxShadow: 'lg',
  _dark: {
    bg: 'rgba(24,24,27,0.92)',
    borderColor: 'whiteAlpha.200',
  },
};

export const entryDialogBackdropStyles = {
  bg: 'rgba(2, 6, 23, 0.78)',
  backdropFilter: 'blur(10px)',
};

export const entryDialogContentStyles = {
  maxW: 'lg',
  w: 'full',
};
