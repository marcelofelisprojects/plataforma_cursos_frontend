import styled from 'styled-components';

interface IContainerProps {
  background: string;
  color: string;
}

export const Container = styled.div<IContainerProps>`
  background-color: ${({ background }) => background};
  padding: 20px;
  height: 400px;
  color: ${({ color }) => color};
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
    }
  }
`;
