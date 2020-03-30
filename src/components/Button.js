import styled from "styled-components";


export const ButtonMain = styled.button `
text-transform: capitalize;
font-size: 20px;
background: none;
border: 0.5px solid var(--c-blue-light);
/* props can be passed to styled-components like below */
border-color: ${props => props.cartColor ? "var(--c-feature)" : "var(--c-blue-light)"};
/* color: var(--c-blue-light); */
color: ${props => props.cartColor ? "var(--c-feature)" : "var(--c-blue-light)"};

padding: 5px;
margin-right: 6px;
border-radius: 5px;
transition: all 0.3s ease;

&:hover {
    background: ${props => props.cartColor ? "var(--c-feature)" : "var(--c-blue-light)"};
    color: ${props => props.cartColor ? "var(--c-white)" : "var(--c-blue-dark)"};

}

`
