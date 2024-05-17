import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    color: #fff;
    text-align: center;
    font-family: Licorice;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative;
    margin-top: 1em;
  }

  img {
    width: 60px;
    position: absolute;
    top: -0.5em;
    right: -1.6em;
  }
`;

export const ContentMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-top: 1em;

    span {
      color: #fff;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

export const ContentSaveData = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 2em;

  p {
    color: #fff;
    text-align: center;
    font-family: Licorice;
    font-size: 42px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
