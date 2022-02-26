import styled from 'styled-components';

export const Container = styled.div`
  padding: 70px 115px;

  @media screen and (max-width: 720px) {
    padding: 30px 30px;
    overflow-x: hidden;
  }
`;

export const SubContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 720px) {
    grid-template-columns: unset;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const Button = styled.div`
  margin: 70px auto;
  width: 240px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(229, 229, 229, 1);
  cursor: pointer;
`;
