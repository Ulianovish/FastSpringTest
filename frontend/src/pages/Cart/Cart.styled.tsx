import styled from '@emotion/styled';

export const CartScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background: rgb(241, 241, 241);
  & img {
    height: 500px;
  }
  & p {
    color: var(--text-gary);
    margin: 10px 0;
  }
  & button {
    width: 110px;
    padding: 8px 10px;
  }
`;

export const Billing = styled.div`
  padding: 30px;
  background: #fff;
  width: 400px;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
  border-radius: 6px;
  margin-top: 20px;
  margin-left: 40px;
  & h4 {
    color: var(--text-gary);
    width: 100%;
    border-bottom: 1px dotted var(--text-gary);
    padding-bottom: 20px;
  }
  & span {
    color: var(--primary);
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ItemCart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & p {
    color: rgb(87, 86, 86) !important;
    font-size: 17px;
  }
`;

export const Total = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(100, 100, 100);
  margin-top: 20px;
  border-top: 1px dotted var(--text-gary);
`;

export const CheckoutArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & button {
    width: 400px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px !important;
    margin-left: 40px;
    margin-top: 10px;
    box-shadow: 0px 0px 4px var(--primary);
  }
`;

export const AllItemsCart = styled.div`
  & img {
    height: 100px;
    width: 100px;
  }
`;
