import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
`;

export const Session = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px;

  button {
    background-color: #fff;
    color: #000;
    font-size: 1.2rem;
    padding: 5px 10px;
    border-radius: 7px;
    width: fit-content;
    font-weight: 500;
  }
`;

export const Header = styled.div`
  display: flex;
  place-content: space-between;
  border-bottom: solid 1px lightgrey;
  padding: 20px 100px;

  img {
    width: 15rem;
    filter: brightness(0) invert(1);
  }
`;

export const Navbar = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  color: #fff;
  font-weight: 500;

  button {
    padding: 7px 10px;
    border: solid 1px lightgrey;
    border-radius: 7px;
    font-weight: 500;
  }
`;

export const BannerSession = styled.div`
  background-image: linear-gradient(
      rgba(134, 4, 15, 0.7),
      rgba(134, 4, 15, 0.7)
    ),
    url('/src/assets/images/hero-image.png');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Title = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 500px;

  h1 {
    font-size: 5rem;
    line-height: 1.1;
  }

  p {
    font-size: 1.2rem;
  }

  button {
    background-color: #fff;
    color: #000;
    font-size: 1.2rem;
    padding: 5px 10px;
    border-radius: 7px;
    width: fit-content;
    font-weight: 500;
  }
`;

export const CoursesSession = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 100px;
  display: flex;
  flex: 1;

  > h1 {
    padding: 50px 0;
    font-size: 2.7rem;
    font-weight: bold;
  }

  > div {
    padding: 0 80px 20px 0;
    button {
      background-color: #fff;
      color: #000;
      font-size: 1.2rem;
      padding: 7px 10px;
      border: solid 1px lightgrey;
      border-radius: 7px;
      font-weight: 500;
    }
  }
`;

export const InfoSession = styled.div`
  padding: 80px 100px;
  display: flex;
`;

export const Column = styled.div`
  & {
    flex: 1;

    > h1 {
      font-size: 2.5rem;
      font-weight: 700;
    }

    p {
      font-size: 1.2rem;
    }
  }

  & + & {
    display: flex;
    flex-direction: column;
    flex: 2;
  }
`;

export const StatsSession = styled.div`
  padding: 0 100px;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    border-bottom: solid 1px lightgray;
    justify-content: space-between;

    h1 {
      font-size: 3.5rem;
      font-weight: 700;
    }

    p {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`;

export const DetailsSession = styled.div`
  padding: 50px 100px;
  display: flex;
  gap: 40px;
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    img {
      width: 60px;
    }
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: gray;
  }
`;

export const TestimonialsSession = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  background-color: #890000;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    color: #fff;
    margin-bottom: 80px;
    > p {
      font-size: 1rem;
    }

    > h1 {
      font-size: 2.2rem;
      font-weight: 700;
    }
  }
`;

export const Testimonials = styled.div`
  display: flex;
`;
