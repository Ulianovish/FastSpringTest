import styled from '@emotion/styled';

export const NavSidebar = styled.div<{ showSideBar: boolean }>`
  height: 100%;
  width: 6%;
  background-color: #fff;
  padding: 10px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 1104px) {
    width: 100%;
    left: -100%;
    transition: all 0.3s ease-in-out;
    ${(props) =>
      props.showSideBar &&
      `left: 0px; 
        transition: all 0.3s ease-in-out;`}
  }
`;

export const Close = styled.div`
  display: none;
  position: absolute;
  top: 30px;
  right: 20px;
  & svg {
    font-size: 22px;
  }
  @media (max-width: 1104px) {
    display: block;
    color: gray;
  }
`;

export const Icon = styled.div<{ active: boolean }>`
  padding: 12px 12px;
  margin: 20px 0;
  border-radius: 50%;
  background: #fff;
  color: rgb(161, 161, 161);
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:nth-of-type(1) {
    margin-top: 15px;
  }
  &:hover {
    background: var(--primary);
    color: #fff;
    box-shadow: 0px 0px 10px var(--primary);
    transition: all 0.3s ease-in-out;
  }
  ${(props) =>
    props.active &&
    `
        background: var(--primary);
        color: #fff;
        box-shadow: 0px 0px 10px var(--primary);
    `}
`;
