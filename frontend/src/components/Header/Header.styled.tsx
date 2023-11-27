import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & div {
    & div {
      display: none;
      @media (max-width: 1104px) {
        display: block;
        margin-right: 10px;
        & svg {
          font-size: 22px;
          font-weight: 600;
        }
      }
    }
    @media (max-width: 1104px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
  }
  & img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 475px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
  }
`;
