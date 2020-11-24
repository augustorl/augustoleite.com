import React, { useContext } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import Image from 'next/image';
// import { FormattedMessage } from 'react-intl';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { Context } from '../Wrapper';
import {
  Nav,
  Container,
  HeaderPhoto,
  HeaderText,
  SocialMedia,
  LanguageButton,
} from '../styles/components/Header';

export default function Header() {
//   const context = useContext(Context);

  return (
    <header>
      <Nav>
        <Image src="/assets/logo.png"alt="Logo Augusto Leite" height="50" width="50" />
        <LanguageButton>
          {/* <button type="button" onClick={context.selectLanguage} value="pt-BR">
            PT
          </button>
          <hr />
          <button type="button" onClick={context.selectLanguage} value="en-US">
            EN
          </button> */}
        </LanguageButton>
      </Nav>
      <Container>
        <HeaderPhoto>
          <Image
            alt="Foto Augusto Leite"
            height="545"
            width="529"
            src="/assets/photo-header.png"
          />
        </HeaderPhoto>
        <HeaderText>
          <h2>
            {/* <FormattedMessage
              id="header.title"
              defaultMessage="Desenvolvedor Front-end"
            /> */}
            Desenvolvedor Front-end
          </h2>
          <h1>Augusto Leite</h1>
          <p>
            {/* <FormattedMessage
              id="header.description"
              defaultMessage="Descrição"
            /> */}
            Sempre tive interesse em tecnologia tendo contato com computador desde criança. Sou um apaixonado por desenvolvimento e nos projetos em que participo prezo por códigos limpos e designs minimalistas que tornam a experiência do cliente e do usuário mais satisfatória.
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
              href="https://www.linkedin.com/in/augusto-leite-a3729412b/"
              name="linkedin"
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://augustoleite.com/curriculum_vitae.pdf"
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
