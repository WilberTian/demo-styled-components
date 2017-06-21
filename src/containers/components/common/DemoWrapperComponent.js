import React from 'react';
import styled from 'styled-components';

const DemoWrapperHeader = styled.div`
    position: absolute;
    height: 20px;
    line-height: 20px;
    padding: 4px 8px;
    top: -14px;
    left: -20px;
    background-color: #f63;
    color: #fff;
    border-radius: 4px;
`;

const DemoWrapperComponent = (props) => {
    return (
        <div className={props.className}>
            <DemoWrapperHeader>{props.header}</DemoWrapperHeader>
            {props.children}
        </div>
    );
};

export default styled(DemoWrapperComponent)`
    position: relative;
    border: 1px solid #999;
    border-radius: 8px;
    margin: 40px;
    padding: 40px;
`;
