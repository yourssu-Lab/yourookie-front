import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createRouter} from '@tanstack/react-router'
import './index.css';  // CSS 파일 import

// Import the generated route tree
import {routeTree} from './routeTree.gen'

import Modal from "react-modal";
import Provider from "./Provider.tsx";

// Create a new router instance
const router = createRouter({routeTree})

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
            <Provider>
                <RouterProvider router={router}/>
            </Provider>
        </StrictMode>,
    )
}