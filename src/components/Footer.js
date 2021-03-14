import { Container, SocialMobile } from '../styles/components/Footer';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';

export default function Footer() {
  return (
    <Container>
      <div>
        <SocialMobile>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/augustorl"
            name="github"
            alt="github"
            aria-label="github"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/augustorl/"
            name="linkedin"
            alt="linkedin"
            aria-label="linkedin"
          >
            <FaLinkedinIn />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://augustoleite.com/curriculum_vitae.pdf"
            name="curriculum"
            alt="curriculum"
            aria-label="curriculum"
          >
            <IoIosPaper />
          </a>
        </SocialMobile>
      </div>
      <footer>
        <p>augustoleite.com © 2021 Copyright.</p>
      </footer>
    </Container>
  );
}
