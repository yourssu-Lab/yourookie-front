import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactElement} from "react";
import GlobalStyles from "./styles/GlobalStyles.ts";

interface ProviderProps {
    children: ReactElement;
}

const Provider = ({children}: ProviderProps) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            {children}
        </QueryClientProvider>
    )
}

export default Provider;