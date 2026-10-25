import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;

export const SideMenu = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  border-right: solid 1px lightgray;
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  background: #151313;
  padding: 7px;
  border-bottom: solid 1px lightgray;

  img {
    width: 1.5rem;
    filter: brightness(0) invert(1);
    cursor: pointer;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #0c0c0d;
  padding: 10px;
  gap: 10px;

  p {
    font-size: 1vw;
    color: gray;
  }

  h1 {
    font-size: 1.5vw;
    color: #fff;
  }

  border-bottom: solid 1px lightgray;
`;

export const Search = styled.div`
  padding: 10px;
  input {
    border: solid 1px lightgray;
    border-radius: 99vw;
    padding: 4px 10px;
    font-size: 0.7rem;
  }
`;

export const Modules = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Module = styled.div`
  display: flex;
  font-size: 1vw;
  gap: 10px;
  border-bottom: solid 1px lightgray;
  padding: 10px;
  cursor: pointer;

  img {
    width: 1.5vw;
    height: auto;
  }

  h1 {
    font-weight: 700;
  }

  &.opened {
    flex-direction: column;

    > div {
      display: flex;
      gap: 5px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex: 6;
  flex-direction: column;
  padding: 20px 50px;
  gap: 30px;
`;

export const Banner = styled.div`
  width: 100%;
  display: flex;

  img {
    border-radius: 10px;
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: top;
  }
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 1.7vw;
    font-weight: 700;
  }

  p {
    font-size: 1.5vw;
  }
`;
