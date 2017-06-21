import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    color: #108ee9;
`;

const Tag = styled.span`
    display: inline-block;
    background-color: #108ee9;
    color: #fff;
    height: 12px;
    line-height: 12px;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 8px;
    margin: 8px;
`;

const StyledComponent = () => {
    return (
        <div>
            <Header>This is header</Header>
            <Tag>JavaScript</Tag>
            <Tag>CSS</Tag>
        </div>
    );
};

export default StyledComponent;
