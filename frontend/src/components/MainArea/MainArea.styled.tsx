import styled from '@emotion/styled';

export const DivMainArea = styled.div`
  width: 63%;
  height: 100%;
  background: rgb(241, 241, 241);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px 40px;
  margin-left: 6rem;
  @media (max-width: 1104px) {
    width: 100%;
    margin-left: 0px;
  }
  @media (max-width: 630px) {
    padding: 10px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 250px;
  /* background: var(--secondary); */
  background: var(--secondary);
  border-radius: 20px;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  position: relative;
  & p {
    color: rgb(128, 127, 127);
    font-weight: 600;
    margin: 10px 0px;
    & span {
      color: var(--primary);
    }
  }
  & button {
    padding: 8px 20px;
    margin-top: 10px;
  }
  @media (max-width: 630px) {
    flex-direction: column;
    height: auto;
    padding: 20px 15px;
  }
`;

export const BannerImage = styled.div`
  & img {
    height: 220px;
    width: 230px;
    @media (max-width: 630px) {
      z-index: 10;
    }
  }
`;

export const DivText = styled.div`
  margin-left: 4rem;
`;

export const CircleFull = styled.img`
  height: 100px;
  width: 100px;
  position: absolute;
  top: 30px;
  right: 20px;
`;
export const CircleSmall = styled.img`
  height: 50px;
  width: 50px;
  bottom: 30px;
  right: 60px;
  position: absolute;
`;
export const CircleSmaller = styled.img`
  height: 20px;
  width: 20px;
  bottom: 70px;
  right: 120px;
  position: absolute;
`;
export const CircleHalf = styled.img`
  height: 50px;
  width: 50px;
  top: 0px;
  right: 120px;
  position: absolute;
`;
export const PizzaArea = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 3rem;
`;
