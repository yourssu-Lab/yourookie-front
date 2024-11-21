import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactElement} from "react";

interface ProviderProps {
    children: ReactElement;
}

const Provider = ({children}: ProviderProps) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default Provider;