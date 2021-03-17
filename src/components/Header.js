import React, { useContext } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import Image from 'next/image';
import { Context } from '../components/Wrapper';


import {
  Nav,
  Container,
  HeaderPhoto,
  HeaderText,
  SocialMedia,
  LanguageButton,
} from '../styles/components/Header';

export default function Header() {
  const context = useContext(Context);

  const translatedText = context.translation;

  return (
    <header>
      <Nav>
          <h4>A</h4>
          <h4 className="L">L</h4>
        <LanguageButton>
          <button type="button" onClick={context.selectLanguage} value="pt">
            PT
          </button>
          <hr />
          <button type="button" onClick={context.selectLanguage} value="en">
            EN
          </button>
        </LanguageButton>
      </Nav>
      <Container>
        <HeaderPhoto>
          <Image
            alt="Foto Augusto Leite"
            height={545}
            width={530}
            src="/assets/photo-header1.png"
          />
        </HeaderPhoto>
        <HeaderText>
          <h2>
            {translatedText.headerTitle}
          </h2>
          <h1>Augusto Leite</h1>
          <p>
            {translatedText.headerDescription}
          </p>
          <SocialMedia>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/augustorl"
              name="github"
              aria-label="github"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/augustorl/"
              name="linkedin"
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={translatedText.curriculumLink}
              name="curriculum"
              aria-label="curriculum"
            >
              <IoIosPaper />
            </a>
          </SocialMedia>
        </HeaderText>
      </Container>
    </header>
  );
}
