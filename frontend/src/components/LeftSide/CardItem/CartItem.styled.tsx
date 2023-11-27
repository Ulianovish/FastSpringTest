import styled from '@emotion/styled';

export const CartCard = styled.div<{ isCheckout: boolean }>`
  height: ${(props) => (props.isCheckout ? '160px' : '100px')};
  padding: ${(props) => (props.isCheckout ? '20px 20px' : '10px')};
  border-radius: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 20px 0;
  background: #fff;
  box-shadow: ${(props) =>
    props.isCheckout ? '0 4px 12px 0 rgb(0 0 0 / 5%)' : '0 4px 12px 0 rgba(0, 0, 0, 0.151)'};
`;

export const CartImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #f48f0159;
  border-radius: 20px;
  padding: 10px;
  margin-right: 20px;
  & img {
    height: 50;
    width: 50;
    border-radius: 20px;
  }
`;

export const Price = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  & span {
    font-size: 13px;
    color: var(--primary);
  }
`;

export const Handle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const HandleQty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemQty = styled.div`
  margin: 0 5px;
  width: 30px;
  text-align: center;
  padding: 0 5px;
  border: 1px solid var(--text-gary);
`;

export const Delete = styled.div`
  padding: 5px;
  border-radius: 3px;
  color: var(--danger);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  background: rgba(255, 0, 0, 0.39);
  font-size: 18px;
`;

export const HandleButton = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  border-radius: 3px;
  color: #fff;
  box-shadow: 0px 0px 4px var(--primary);
  cursor: pointer;
`;
