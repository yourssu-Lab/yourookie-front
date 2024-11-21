import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import {YDSWrapper} from "@yourssu/design-system-react";
import Modal from "react-modal";
import Provider from "./Provider.tsx";

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

Modal.setAppElement('#root');

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <YDSWrapper>
                <Provider>
                    <RouterProvider router={router} />
                </Provider>
            </YDSWrapper>
        </StrictMode>,
    )
}