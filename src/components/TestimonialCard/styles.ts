import styled from 'styled-components';

export const Container = styled.div`
  background-color: #c3222c;
  padding: 20px;
  height: 400px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;

  > div:nth-child(1) {
    p {
      font-size: 1.2rem;
    }
  }

  > div:nth-child(2) {
    h2 {
      font-size: 1rem;
      font-weight: 700;
    }

    p {
      font-size: 0.9rem;
      font-weight: 100;
      color: lightpink;
    }
  }
`;
