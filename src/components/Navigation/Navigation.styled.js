import styled from 'styled-components';

export const Tab = styled.span`
    margin: 0 10px 0;
    cursor: pointer;
    border-bottom: 2px solid;
    border-bottom-color: ${(p) => p.type ? 'black' : 'transparent'}
`;

export const Nav = styled.div`
    display: flex;
`;