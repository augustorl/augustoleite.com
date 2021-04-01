import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-grow: none;
  color: rgba(0, 0, 0, 0.8);
  @media (max-width: 866px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Mockup = styled.div`
  max-width: 600px;
  margin-left: 50px;
  img {
    max-width: 545px;
    filter: drop-shadow(.6rem .6rem .6rem #3a689e)
  }
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 866px) {
    max-width: 450px;
    margin: 0;
    img {
      width: 345px;

      height: auto;
    }
  }
`;

export const Details = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  margin-right: 70px;
  @media (max-width: 866px) {
    margin: 20px 15px 10px 15px;
    h2 {
      font-size: 24px;
      font-weight: 150;
    }
    p:last-child {
      font-size: 16px;
      word-wrap: none;
      line-height: 1.5;
      margin-left: 15px;
    }
  }
  h2 {
    font-family: 'EksellDisplayWeb-Stencil', serif;
    font-size: 30px;
    letter-spacing: 0.06rem;
    margin-bottom: 5px;
  }
  h2::after {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.8);
    margin: 0.3rem 0;
    @media (max-width: 866px) {
      display: none;
    }
  }

  p {
    font-size: 16px;
    word-wrap: none;
    line-height: 1.5;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  max-width: 260px;
  align-items: center;
  a {
    text-decoration: none;
  }
  @media (max-width: 866px) {
    max-width: 100px;
    p {
      font-size: 10px !important;
    }
  }
  svg {
    height: 18px;
    width: 18px;
  }
`;
export const ProjectLink = styled.div`
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: none;
  margin: 0px 20px 15px 0px;
  color: rgba(0, 0, 0, 0.8);
  border-radius: 20px 20px 20px;
  margin-top: 8px;
  padding: 6px;
  width: 145px;
  font-family: 'Roboto';
  font-weight: bolder;
  letter-spacing: 0.07rem;
  transition: all 0.5s ease-out;
  &:hover {
    background-color: #3a689e;
    cursor: pointer;
  }
  p {
    font-size: 12px;
  }

  @media (max-width: 866px) {
    margin: 10px 5px 5px 5px;
    width: 120px;
    border: none;
    border-radius: none;
    transition: none;
  }
`;

export const Description = styled.div`
  max-width: 500px;
  margin-top: 10px;
  display: flex;
`;

export const Technologies = styled.div`
  margin-top: 15px;
  display: block;
  @media (max-width: 866px) {
    margin-left: 15px;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }

  h3 {
    height: 15px;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
  }
`;

export const TechImgs = styled.div`
  display: flex;
  
  
  img,
  svg {
    width: 40px;
    height: 40px;
    margin: 10px 40px;
    transition: all ease-out 0.4s;

    &:hover {
      transform: translateY(-4px);
    }
  }
  @media (max-width: 866px) {
    margin: 0;
    img,
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;