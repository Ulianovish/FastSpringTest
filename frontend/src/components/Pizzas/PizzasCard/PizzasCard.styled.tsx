import styled from '@emotion/styled';

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
  & img {
    width: 150px;
    height: 150px;
  }
  & div:nth-of-type(2) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    & h3 {
      color: var(--text-gary);
      font-size: 16px;
      text-transform: initial;
    }
    & p {
      font-size: 15px;
      & span {
        font-size: 12px;
        color: var(--primary);
      }
    }
  }
`;

export const AddButton = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 2px 2px 10px #f48f0156;
  cursor: pointer;
`;
