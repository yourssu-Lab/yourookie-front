import { createLazyFileRoute } from '@tanstack/react-router'
import {BoxButton} from "@yourssu/design-system-react";

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
          <BoxButton
              size="medium"
              variant="filled"
              rounding={4}
          >
              응애
          </BoxButton>
      </div>
  )
}