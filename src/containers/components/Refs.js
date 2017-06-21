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

const Form = () => {
    return (
        <Input
          placeholder="Hover here..."
          innerRef={(x) => {
              this.input = x;
          }}
          onMouseEnter={() => {
              return this.input.focus();
          }}
        />
    );
};

const Refs = () => {
    return (
        <Form />
    );
};

export default Refs;
