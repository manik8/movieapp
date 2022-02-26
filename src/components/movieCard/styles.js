import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  padding: 20px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding-top: 20px;
`;

export const Text = styled.div`
  padding-top: 12px;
  color: rgba(87, 87, 87, 1);
`;

export const Cast = styled.div`
  padding-top: 20px;
`;

export const CastContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 30% 70%;
`;

export const CastImage = styled.img`
  width: 100px;
  border-radius: 50%;
  height: auto;
`;

export const CastName = styled.div`
  padding-left: 30px;
`;
