import { RouterProvider, createRouter } from '@tanstack/react-router';
import  { FC, useEffect } from 'react';
import { routeTree } from '../routeTree.gen';
import { setNotesDefaultValue } from '../pages/notes/store/NoteStore';
import { useUnit } from 'effector-react';
import { ModalProvider } from '../shared/context/ModalProvider';
import { AuthProvider, useAuth } from '../features/auth';

export const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    context: {
        isAuthenticated: false
    }
})
const InnerApp:FC = function InnerApp(){
    const {isAuthenticated} = useAuth()
    return <RouterProvider router={router} context={{isAuthenticated}}/>
}
export const Init: FC = function Init() {

    return (
    <ModalProvider>
        <AuthProvider>
            <InnerApp/>
        </AuthProvider>
    </ModalProvider>
    )
    
};