import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  padding: 0 150px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #45A66D;
  color: white;
  font-weight: 700;

  @media screen and (max-width: 720px) {
    padding: 0 30px;
  }
`;
