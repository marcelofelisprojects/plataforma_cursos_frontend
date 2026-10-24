import React from 'react';
import { Navigate } from 'react-router-dom';

type EnsureLoggedInRouteProps = {
  redirectTo: string;
};

/**
 * @description Garante que a rota não estará acessível para um usuário logado
 * @param redirectTo Rota que o usuário será redirecionado caso esteja logado
 */
const EnsureLoggedInRoute: React.FC<EnsureLoggedInRouteProps> = ({
  redirectTo,
}) => <Navigate to={redirectTo} />;
export default EnsureLoggedInRoute;
