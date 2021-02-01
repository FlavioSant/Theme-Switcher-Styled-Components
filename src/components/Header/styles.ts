import styled from 'styled-components';

export const Container = styled.div`
  height: 6rem;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
`;
