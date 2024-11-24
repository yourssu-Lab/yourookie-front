import { createRootRoute, Outlet } from "@tanstack/react-router";
import styled from "styled-components";
import Footer from "./-components/Footer/Footer";
import Header from "./-components/Header/Header";

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
    </StyledRoot>
  ),
});
