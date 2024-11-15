import {createLazyFileRoute} from '@tanstack/react-router'
import {ListItem} from "@yourssu/design-system-react";
import {useState} from "react";
import {StyledContainer, StyledListItemContainer, StyledSection} from "./-index.style.ts";

export const Route = createLazyFileRoute('/find-organization/')({
    component: RouteComponent,
})

function RouteComponent() {
    const [organizations, setOrganizations] = useState([
        {
            id: 1,
            name: '유어슈',
        },
        {
            id: 2,
            name: 'sccc',
        },
        {
            id: 3,
            name: '써밋',
        }
    ]);

    return <StyledContainer>
        <StyledListItemContainer>
            {
                organizations.map((organization) => (
                    <StyledSection key={organization.id}>
                        {organization.name}
                    </StyledSection>
                ))
            }
        </StyledListItemContainer>
    </StyledContainer>
}
