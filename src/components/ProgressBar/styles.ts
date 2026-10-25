import styled from 'styled-components';

export const Container = styled.div`
  background: #0c0c0d;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;

  > div {
    background: #464242;
    width: 100%;
    height: 1vw;
    border-radius: 20px;

    > div {
      height: 100%;
      width: 40%;
      background-color: #fff;

      border-radius: 99vw 0 0 99vw;
    }
  }

  p {
    color: #fff;
    font-size: 1vw;
  }
`;
