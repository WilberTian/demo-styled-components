import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;

const PassedProps = () => {
    return (
        <div>
            <Input placeholder="placeholder..." type="text" />
            <Input value="text value" type="text" />
        </div>
    );
};

export default PassedProps;
