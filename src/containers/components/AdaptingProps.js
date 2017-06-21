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

const AdaptingProps = () => {
    return (
        <div>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    );
};

export default AdaptingProps;
