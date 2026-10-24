import React from 'react';

import {
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialog as AlertDialogChakra,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

interface AlertDialogWarningProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  onAction: () => Promise<any> | void;
  color: string;
}

const Confirmation: React.FC<AlertDialogWarningProps> = ({
  title,
  description,
  isOpen,
  onClose,
  onAction,
  color,
}) => {
  const cancelRef = React.useRef(null);

  return (
    <AlertDialogChakra
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader fontSize={13}>{title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody fontSize={12}>{description}</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose} fontSize={12}>
            Cancelar
          </Button>
          <Button
            color="#fff"
            backgroundColor={color}
            ml={3}
            onClick={onAction}
            fontSize={12}
            _hover={{ opacity: 0.7 }}
          >
            Confirmar
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogChakra>
  );
};

export default Confirmation;
