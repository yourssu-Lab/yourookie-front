import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import styled from "styled-components";
import Footer from "./-components/Footer/Footer.tsx";
import Header from "./-components/Header/Header.tsx";

const StyledRoot = styled.div`
  min-height: 100vh;
  background-color: #f9f9f9;
`;

export const Route = createRootRoute({
  component: () => (
    <StyledRoot>
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </StyledRoot>
  ),
});
