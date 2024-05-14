import  { FC } from 'react';
import { useAuth } from '../features/auth';
import { Header } from './Header';
import {useRouterState } from '@tanstack/react-router';
import { LinkText} from '../shared/ui/Typography';
import { AUTH_PATH } from '../routes/__root';



export const HeaderMenu: FC = function HeaderMenu() {
    const {isAuthenticated} = useAuth()
    const routes = useRouterState()

  return <Header>
    {!isAuthenticated && AUTH_PATH.includes(routes.location.pathname) ? (
        <div className="flex justify-center gap-12">
            <LinkText text='Авторизация' to='/login'/>
            <LinkText text='Регистрация' to='/register'/>
        </div>
    ) : (<></>)}
  </Header>
};