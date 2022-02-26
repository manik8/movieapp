import styled from 'styled-components';

export const Container = styled.div`
  background: #45A66D;
  height: 100px;
  padding: 70px 115px;
  display: grid;
  grid-template-columns: 50% 50%;

  @media screen and (max-width: 720px) {
    padding: 30px;
  }
`;

export const LeftContainer = styled.div`
  width: 550px;
  color: white;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const RightContainer = styled.div``;

export const Text = styled.div`
  color: white;
`;
