import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/organizations/$organizationId/open/"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /organizations/$organizationId/open/!";
}
