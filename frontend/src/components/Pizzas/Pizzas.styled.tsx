import styled from '@emotion/styled';

export const PizzasContainer = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 2rem;
  @media (max-width: 475px) {
    align-items: center;
    justify-content: center;
  }
`;

export const PizzaCard = styled.div`
  width: 200px;
  padding: 15px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 30px;
  margin-top: 20px;
  position: relative;
  @media (max-width: 920px) {
    margin: 20px;
    & :nth-of-type(1) {
      margin-left: 20px;
    }
  }
`;
