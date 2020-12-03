import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "../../node_modules/swiper/swiper-bundle.css";
// import { FormattedMessage } from 'react-intl';
import { FaGithub, FaGlobe } from 'react-icons/fa';
// import { Context } from '../../Wrapper';
import {
  Container,
  Mockup,
  Details,
  ProjectLink,
  ProjectLinks,
  Description,
  Technologies,
  TechImgs,
} from '../styles/components/ProjectSlider';

SwiperCore.use([Navigation, Pagination]);

function Swipper() {
  const data = [
    {
      id: 1,
      projectname: 'GoBarber',
      imgURL: "/assets/project-bg.png",
      techs: [
        { tech: "/assets/Typescript_logo.svg" },
        { tech: "/assets/React_logo.svg" },
        { tech: "/assets/Nodejs_logo.svg" },
      ],
      demoURL: 'https://augustorl-gobarber.netlify.app/',
      codeURL: 'https://github.com/augustorl/gobarber',
      aboutEnglish:
        'GoBarber is a full application with a web version, mobile application, and its own API. The goal is to help beauty service professionals to make appointments with their respective clients.',
      aboutPortuguese:
        'GoBarber é uma aplicação com versão web, aplicativo mobile e API própria. O objetivo é auxiliar os profissionais de serviços de beleza a marcarem horário com seus respectivos clientes.',
    },
    {
      id: 2,
      projectname: 'Old Pokedex',
      imgURL: "/assets/pokemon-bg.png",
      demoURL: 'https://oldpokedex.netlify.app/',
      codeURL: 'https://github.com/augustorl/oldpokedex',
      techs: [        { tech: "/assets/Typescript_logo.svg" },
      { tech: "/assets/React_logo.svg" },],
      aboutEnglish:
        'A web version of a Pokédex inspired by Pokemon GameBoy games from the 90s built with React and Typescript.',
      aboutPortuguese:
        'A versão web de uma Pokédex construída com React e Typescript remetendo ao visual dos jogos de GameBoy dos anos 90.',
    },
    {
      id: 3,
      projectname: 'Happy',
      imgURL: "/assets/happy-bg.png",
      demoURL: 'https://augustorl-happy.netlify.app',
      codeURL: 'https://github.com/augustorl/happy',
      techs: [
        { tech: "/assets/Typescript_logo.svg" },
        { tech: "/assets/React_logo.svg" },
        { tech: "/assets/Nodejs_logo.svg" },
      ],
      aboutEnglish:
        'Happy is a full application with a web version, mobile, and its own API, the main goal is to help anyone who wants to visit orphanages to brighten up the childrens days to find these homes.',
      aboutPortuguese:
        'Happy é uma aplicação com versão web, aplicativo mobile e API própria, o objetivo é auxiliar quem quer visitar orfanatos para alegrar o dia das crianças a encontrar esses lares.',
    },
    {
      id: 4,
      projectname: 'Imagiflix',
      imgURL: "/assets/imagiflix-bg.png",
      demoURL: 'https://augustorl-imagiflix.netlify.app/',
      codeURL: 'https://github.com/augustorl/imagiflix',
      techs: [        { tech: "/assets/HTML5_logo.svg" },
      { tech: "/assets/CSS3-logo.svg" },,],
      aboutEnglish:
        'Built using the TMDb API, Imagiflix is ​​a fictional website built based on the Netflix layout.',
      aboutPortuguese:
        'Construído utilizando a API TMDb, Imagiflix é um website fictício construído com base no layout da Netflix.',
    },
  ];

//   const context = useContext(Context);

  return (
    <>
      <Swiper
        preventClicks="false"
        preventClicksPropagation="false"
        effect="cube"
        id="main"
        navigation
        pagination
        slidesPerView={1}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {data.map(project => (
          <SwiperSlide key={project.id}>
            <Container>
              <Mockup>
                <Image
                  alt="Foto do Projeto"
                  height={380}
                  width={545}
                  src={project.imgURL}
                />
              </Mockup>
              <Details>
                <h2>{project.projectname}</h2>
                <ProjectLinks>
                  <a
                    href={project.demoURL}
                    alt="project demo"
                    aria-label="project demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProjectLink>
                      <FaGlobe />
                      <p>
                        {/* {' '}
                        <FormattedMessage
                          id="swipper.demobadge"
                          defaultMessage="Ver Demo"
                        /> */}
                        Ver Demo
                      </p>
                    </ProjectLink>
                  </a>
                  <a
                    href={project.codeURL}
                    alt="project code"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="project code"
                  >
                    <ProjectLink>
                      <FaGithub style={{ width: '21px', height: '21px' }} />
                      <p>
                        {/* {' '}
                        <FormattedMessage
                          id="swipper.codebadge"
                          defaultMessage="Ver Código"
                        /> */}
                        Ver Código
                      </p>
                    </ProjectLink>
                  </a>
                </ProjectLinks>
                <Description>
                  {/* {context.locale === 'en-US' ? (
                    <div>
                      <p>{project.aboutEnglish}</p>
                    </div>
                  ) : ( */}
                    <div>
                      <p>{project.aboutPortuguese}</p>
                    </div>
                  {/* )} */}
                </Description>
                <Technologies>
                  <h3>
                    {/* {' '}
                    <FormattedMessage
                      id="swipper.techs"
                      defaultMessage="Tecnologias"
                    /> */}
                    Tecnologias
                    :
                  </h3>
                  <TechImgs>
                    {project.techs.map(techs => (
                      <Image
                        key={techs.tech}
                        src={techs.tech}
                        alt="Programming Language"
                        width={60}
                        height={60}
                      />
                    ))}
                  </TechImgs>
                </Technologies>
              </Details>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Swipper;