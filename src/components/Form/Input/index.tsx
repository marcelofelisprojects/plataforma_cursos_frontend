import React, { InputHTMLAttributes, useRef } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { IconType } from 'react-icons';
import { Tooltip, useBoolean } from '@chakra-ui/react';

import { ClosedEyeIcon, Container, EyeIcon, InputComponent } from './styles';

type FieldState = {
  invalid: boolean;
  isDirty: boolean;
  isTouched: boolean;
  error?: FieldError;
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  Icon?: IconType | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  register: UseFormRegister<any>;
  errors?: FieldError;
  isPassword?: boolean;
  state: FieldState;
  color?: string;
  defaultValue?: string | number;
}

// Receives a name identifier and the registration function
const Input: React.FC<InputProps> = ({
  name,
  disabled,
  Icon,
  register,
  isPassword,
  type,
  color,
  defaultValue,

  ...rest
}) => {
  const theme = useTheme();
  const [isPasswordVisible, isPasswordVisibleF] = useBoolean(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { ref, ...registerRest } = register(name);

  return (
    <Container disabled={disabled} color={color}>
      {Icon && (
        <Icon
          size={30}
          color={color || theme.colors.primary}
          style={{ padding: 5, marginRight: 5 }}
        />
      )}

      <InputComponent
        {...rest}
        {...registerRest}
        disabled={disabled}
        defaultValue={defaultValue}
        ref={(curr: any) => {
          ref(curr);
          inputRef.current = curr;
        }}
        type={isPasswordVisible && type === 'password' ? 'text' : type}
      />

      {!disabled && isPassword && (
        <Tooltip label={isPasswordVisible ? 'Show password' : 'Hide password'}>
          <button onClick={isPasswordVisibleF.toggle} type="button">
            {isPasswordVisible ? (
              <ClosedEyeIcon color={color || theme.colors.primary} />
            ) : (
              <EyeIcon color={color || theme.colors.primary} />
            )}
          </button>
        </Tooltip>
      )}
    </Container>
  );
};

export default Input;
