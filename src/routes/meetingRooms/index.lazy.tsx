import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/meetingRooms/')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /meetingRooms/!'
}
