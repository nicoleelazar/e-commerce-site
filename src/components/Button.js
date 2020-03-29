import styled from "styled-components";


export const ButtonCart = styled.button `
text-transform: capitalize;
font-size: 20px;
background: none;
border: 0.5px solid var(--c-blue-light);
color: var(--c-blue-light);
padding: 5px;
transition: all 0.3s ease;

&:hover {
    background: var(--c-blue-light);
    color: var(--c-blue-dark);

}

`
