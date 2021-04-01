import styled from 'styled-components';

export const Nav = styled.div`
   {
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 2.5rem;
    display: flex;
    padding-top: 15px;
    &:hover {
      h4 {
        color: #3a689e;
        cursor: default;
      }
    }
  }
  h4 {
    font-size: 3.8rem;
    color: var(--primary-color);
    font-family: 'EksellDisplayWeb-Stencil', serif;
    text-transform: uppercase;
    font-weight: 150;
  }
  h4.L {
    padding-top: 25px;
  }
  button {
    cursor: pointer;
  }

  @media(max-width: 900px) {
    h4.L {
      padding-top: 15px;
    }
  }

  @media (max-width: 866px) {
    img {
      height: 50px;
      width: 50px;
    }
  }
`;

export const LanguageButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 1055px;
  flex: 1;

  hr {
    height: 18px;
    margin: 5px 5px;
  }

  button {
    border: none;
    margin: 3px 3px;
    color: rgba(255, 255, 255, 0.9);
    background: none;
    font-size: 16px;
    letter-spacing: 0.01rem;
    color: white;
    text-transform: uppercase;
    line-height: 36px;
    box-sizing: border-box;
    &:hover {
      color: #3a689e;
    }
  }
`;

export const Container = styled.div`
   {
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    height: 555px;
  }
  @media (max-width: 886px) {
     {
      width: 100%;
      max-width: 866px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: auto;
    }
  }
`;

export const HeaderPhoto = styled.div`
  width: 100%;
  height: 100%;
  
  img {
  width: 100%;
  height: 100%;
  margin-top: 25px !important;
  }
`;

export const HeaderText = styled.div`
   {
    z-index: 1;
    margin-top: 115px;
    width: 100%;
    margin-left: -220px;
  }
  h1 {
    padding: 0;
    color: var(--primary-color);
    font-size: 3.6rem;
    letter-spacing: 0.4rem;
    font-family: 'EksellDisplayWeb-Stencil', serif;
    text-transform: uppercase;
    font-weight: 150;
    width: 100%;
    &:hover {
      color: #3a689e;
      cursor: default;
    }

  }

  h1::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 0.4rem 0;
  }

  h2 {
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    color: white;
    text-transform: uppercase;
    line-height: 24px;
    margin: 0;
    box-sizing: border-box;
    font-weight: 200;
  }

  p {
    color: white;
    margin-top: 20px;
    font-size: 1.3rem;
    font-weight: lighter;
    font-family: 'Roboto';
    max-width: 555px;
    line-height: 30px;
    text-align: left;
  }
  @media (max-width: 886px) {
     {
      z-index: 1;
      padding-top: 20px;
      width: 100%;
      margin-bottom: 40px;
      margin-left: 5px;
      margin-right: 5px;
      margin-top: 10px;
    }
    h1 {
      text-align: center;
      letter-spacing: 0.4rem;
      margin-bottom: 10px;
    }
    h1:after {
      display: none;
    }
    h2 {
      font-size: 1.4rem;
      text-align: center;
    }
    p {
      font-size: 1.8rem;
      margin: 0 auto;
      text-align: left;
    }
  }
`;

export const SocialMedia = styled.div`
   {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    max-width: 570px;
  }

    svg {
      display: flex;
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      font-size: 50px;
      margin: 1.7rem;
      margin-top: 20px;
    }
    svg {
      transition: all ease 0.4s;
    }
    svg:hover {
      transform: translateY(-4px);
      color: var(--primary-color);
    }
  }
  a {
    outline: none;
  }
  @media (max-width: 866px) {
    display: none;
  }
  
`;
