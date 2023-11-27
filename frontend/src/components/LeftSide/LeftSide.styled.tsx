import styled from '@emotion/styled';

export const LeftSideContainer = styled.div`
  width: 30%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0px 20px;
  @media (max-width: 1104px) {
    width: 0px;
    display: none;
  }
`;

export const SideCartArea = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;
  & button {
    width: 320px;
    border-radius: 3px !important;
    margin-top: 10px;
    box-shadow: 0px 0px 4px var(--primary);
  }
`;

export const DivText = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & p {
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
      margin-left: 10px;
    }
  }
`;

export const LeftHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & div:nth-of-type(1) {
    margin-right: 20px;
    & div {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background: var(--primary);
      color: #fff;
      font-size: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const CartArea = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const IconLeft = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--text-gary);
  transition: all 0.3s ease-in-out;
  position: relative;
  & span {
    padding: 3px 10px;
    border-radius: 50%;
    position: absolute;
    background: var(--primary);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    right: 0;
    top: -3px;
    box-shadow: 0px 0px 3px var(--primary);
  }
  & :hover {
    background: var(--primary);
    color: #fff;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 10px var(--primary);
  }
  & svg {
    font-size: 26px;
    font-weight: bold;
  }
`;

export const AllItemsSideCart = styled.div`
  & h2 {
    font-size: 15px;
  }
  & h3 {
    font-size: 15px;
  }
  & img {
    height: 50px;
    width: 50px;
  }
`;
