import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    /* Adapt the colours based on primary prop */
    background: ${(props) => {
        return props.primary ? 'palevioletred' : 'white';
    }};
    color: ${(props) => {
        return props.primary ? 'white' : 'palevioletred';
    }};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const LargeButton = Button.extend`
    width: 120px;
    height: 40px;
`;

const SmallButton = Button.extend`
    width: 60px;
    height: 20px;
    font-size: .5em;
`;


const ExtendingStyles = () => {
    return (
        <div>
            <LargeButton>Normal</LargeButton>
            <LargeButton primary>Primary</LargeButton>
            <SmallButton>Normal</SmallButton>
            <SmallButton primary>Primary</SmallButton>
        </div>
    );
};

export default ExtendingStyles;
