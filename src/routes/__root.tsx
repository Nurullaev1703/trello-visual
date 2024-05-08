import { createRootRouteWithContext, Outlet, redirect } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { RootRouteContext } from "../types/tanstack";
import { HeaderMenu } from "../components/HeaderMenu";


export const Route = createRootRouteWithContext<RootRouteContext>()({
    component: () => {
        return(
        <>
        <div className="flex flex-col h-screen">
            <HeaderMenu/>
            <div className="p-2">
                <Outlet />
            </div>
            <TanStackRouterDevtools/>
        </div>
        </>
        )
    },
    beforeLoad: (options) =>{
        const authPath = ["/login","/register"]
        if(
            !authPath.includes(options.location.pathname) &&
            !options.context.isAuthenticated
        ){
            throw redirect({to:"/login"})
        }
    }
});