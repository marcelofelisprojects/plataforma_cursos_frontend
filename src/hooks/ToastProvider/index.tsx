import React, { createContext, useCallback, useContext } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ToastMessage from '@components/ToastMessage';
import themeDefaults from '@style/themeDefaults';

export interface IToastMessageParams {
  type?: 'info' | 'success' | 'warning' | 'error';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(data: IToastMessageParams): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

interface IToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider: React.FC<IToastProviderProps> = ({ children }) => {
  const addToast = useCallback(
    ({ type, title, description }: IToastMessageParams) => {
      toast(<ToastMessage title={title} description={description} />, {
        type: type ?? 'info',
        position: 'bottom-right',
        style: {
          background:
            type === 'info' || type === 'success'
              ? themeDefaults.colors.primary
              : themeDefaults.colors.danger,
          color: '#fff',
        },
        closeButton: false,
        progressStyle: { background: '#fff' },
        icon: false,
      });
    },
    []
  );

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
