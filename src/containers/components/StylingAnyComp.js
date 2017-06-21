import React from 'react';
import styled from 'styled-components';

const Link = ({ className, children }) => {
    return (
        <a className={className}>
            {children}
        </a>
    );
};

const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
`;

const StylingAnyComp = () => {
    return (
        <div>
            <Link>Unstyled, boring Link</Link>
            <br />
            <StyledLink>Styled, exciting Link</StyledLink>
        </div>
    );
};

export default StylingAnyComp;
