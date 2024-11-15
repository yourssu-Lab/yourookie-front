import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import styled from "styled-components";
import Header from "./-components/Header/Header.tsx";
import Footer from "./-components/Footer/Footer.tsx";

const StyledRoot = styled.div`
    min-height: 100vh;
`

export const Route = createRootRoute({
    component: () => (
        <StyledRoot>
            <Header />
            <Outlet />
            <Footer />
            <TanStackRouterDevtools />
        </StyledRoot>
    ),
})