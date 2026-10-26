import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(
      to top,
      rgb(134, 4, 15) 0%,
      rgb(134, 4, 15) 35%,
      rgba(134, 4, 15, 0.8) 55%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${(props) => props.bgimage});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 300px;
  height: 400px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 20px;

  > div > h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
  }

  > div > p {
    font-size: 1.1rem;
  }
`;

export const Tag = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: bisque;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: auto;

  p {
    font-size: 0.8rem;
  }
`;
