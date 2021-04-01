import React, { useContext } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Context } from '../components/Wrapper';
import SwiperCore, { Navigation, Pagination} from 'swiper';
import "../../node_modules/swiper/swiper-bundle.css";
import { FaGithub, FaGlobe } from 'react-icons/fa';

import data from'../services/projectsdata.json';

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

  const context = useContext(Context);

  const translatedText = context.translation;
  
  const locale = context.locale;

  return (
    <>
      <Swiper
        preventClicks="false"
        preventClicksPropagation="false"
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
                      {translatedText.swipperDemobadge}
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
                      {translatedText.swipperCodebadge}
                      </p>
                    </ProjectLink>
                  </a>
                </ProjectLinks>
                <Description>
                  {locale === 'en' ? (
                    <div>
                      <p>{project.aboutEnglish}</p>
                    </div>) : (
                    <div>
                      <p>{project.aboutPortuguese}</p>
                    </div>
                  )}
                </Description>
                <Technologies>
                  <h3>
                    {translatedText.swipperTechs}
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