import styled, { css } from 'styled-components';
import { PiEyeThin, PiEyeSlashThin } from 'react-icons/pi';
import themeDefaults from '@style/themeDefaults';

interface ContainerInterface {
  disabled?: boolean;
  isFocused?: boolean;
  color?: string;
}

export const InputComponent = styled.input`
  background: transparent !important;
  border: 1px solid blue;
`;

export const Separator = styled.div`
  height: 40px;
  width: 1px;
  background: ${({ theme }) => theme.colors.loginInputColor};
  margin-right: 10px;
  margin-left: 5px;
`;

export const Container = styled.div<ContainerInterface>`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  background-color: ${themeDefaults.colors.white};
  border: ${({ theme, color }) => color || theme.colors.lightBorder} solid 1px;
  border-radius: 7px;
  padding: 0.4rem;

  cursor: text;

  & > button {
    svg {
      color: ${({ theme }) => theme.colors.loginInputColor};
    }
  }

  ${({ theme, disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      color: ${theme.colors.inactive};
      border: ${theme.colors.inactive} solid 1px;
    `}

  input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
  }

  input {
    font-size: 0.7rem;
    flex: 1;
    width: 80%;
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme, color }) =>
        color || theme.colors.loginPlaceholderColor};
      font-size: 0.8rem;
    }

    color: ${({ theme, color }) => color || theme.colors.black};

    ${({ theme, disabled }) =>
      disabled &&
      css`
        cursor: not-allowed;
        color: ${theme.colors.inactive};

        &::placeholder {
          color: ${theme.colors.loginPlaceholderColor};
        }
      `}
  }

  @media (max-width: 600px) {
    input {
      font-size: 0.8rem;
    }
  }
`;

export const EyeIcon = styled(PiEyeThin).attrs(() => ({
  size: 22,
}))``;

export const ClosedEyeIcon = styled(PiEyeSlashThin).attrs(() => ({
  size: 22,
}))``;
