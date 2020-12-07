import styled from 'styled-components';

export const ProjectContainer = styled.section`
   {
    width: 100%;
    background: #3bd783;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #main {
      background: none !important;
    }
    .swiper-pagination-bullets {
      margin-top: 20px;
    }
    @media (max-width: 866px) {
      height: 620px;

      .swiper-button-next,
      .swiper-button-prev {
        top: 40%;
      }
      .swiper-pagination-bullets {
        display: none;
      }
    }
  }
`;


export const ProjectInfo = styled.div`
   {
    margin-top: 10px;
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    display: flex;
    justify-content: center
    align-items: center;
  }
`;

export const TitleContainer = styled.div`
    {
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    }
  h1 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 30px;
    letter-spacing: 0.07rem;
    font-family: 'EksellDisplayWeb-Stencil', serif !important;
    text-transform: uppercase;
    font-weight: 150;
    padding-top: 25px;
  }

  h1::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.8);
    margin: 0.9rem 0;
  }

  @media (max-width: 866px) {
    h1 {
      font-size: 2.6rem;
      padding-top: 15px;
      text-align: center;
    }
    h1:after {
      display: none;
    }
`;
