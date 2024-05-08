import  { FC } from 'react';
import { useAuth } from '../features/auth';
import { Header } from './Header';
import { Link } from '@tanstack/react-router';
import { LinkText, Typography } from '../shared/ui/Typography';
import { COLORS_TEXT } from '../shared/ui/colors';



export const HeaderMenu: FC = function HeaderMenu() {
    const {isAuthenticated} = useAuth()
  return <Header>
    {!isAuthenticated ? (
        <div className="flex justify-center gap-12">
            <LinkText text='Авторизация' to='/login'/>
            <LinkText text='Регистрация' to='/register'/>
        </div>
    ) : (<></>)}
  </Header>
};