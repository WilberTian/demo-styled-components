import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({
    // we can define static props
    type: 'password',

    // or we can define dynamic ones
    margin: (props) => {
        return props.size || '1em';
    },
    padding: (props) => {
        return props.size || '1em';
    }
})`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

    /* here we use the dynamically computed props */
    margin: ${(props) => {
        return props.margin;
    }};
    padding: ${(props) => {
        return props.padding;
    }};
`;

const AttachingAdditionalProps = () => {
    return (
        <div>
            <Input placeholder="A small text input" size="1em" />
            <br />
            <Input placeholder="A bigger text input" size="2em" />
        </div>
    );
};

export default AttachingAdditionalProps;
