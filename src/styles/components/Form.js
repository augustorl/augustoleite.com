import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const ErroredMessage = styled(ErrorMessage)`
  margin-left: 12px;
  color: #3bd783;
  font-family: 'Roboto, sans-serif';
  font-size: 12px;
  font-weight: lighter;
`;
export const Container = styled.div`
   {
    width: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.9);
  }
  button {
    background-color: #3bd783;
    color: rgba(0, 0, 0, 0.9);
    border-radius: 25px 25px 25px;
    margin-top: 15px;
    padding: 10px 10px 10px 10px;
    width: 90px;
    font-family: 'Roboto';
    font-size: 15px;
    font-weight: bolder;
    letter-spacing: 0.07rem;
    outline: none;
    border: 0;
    float: right;
    transition: all 0.5s ease-out;
    &:hover {
      background-color: #22804e;
    }
  }
`;

export const ContactForm = styled.div`
   {
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.90);
  }

  h1 {
    color: rgba(255, 255, 255, 0.9);
    font-size: 36px;
    letter-spacing: 0.09rem;
    font-family: 'EksellDisplayWeb-Stencil', serif;
    text-transform: uppercase;
    font-weight: 150;
    padding-top: 25px;
  }
  h1::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background-color: #3bd783;
    margin: 0.9rem 0;
  }
  ul {
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
  }
  ul li {
    padding: 1rem;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(255, 255, 255, 0.85);
    opacity: 1; /* Firefox */
    font-family: 'Roboto';
    font-size: 15px;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, 0.85);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgba(255, 255, 255, 0.85);
  }

  input {
    display: flex;
    height: 40px;
    width: 300px;
    border: 1px solid;
    border-radius: 25px 25px 25px;
    margin-bottom: 20px;
    border-color: rgba(255, 255, 255, 0.85);
    background-color: rgba(0, 0, 0, 0.90);
    color: rgba(255, 255, 255, 0.85);
    outline: none;
    padding-left: 20px;

    &:focus{
      border-color: #3db783;
    }
  }
  textarea {
    display: flex;
    height: 20rem;
    width: 40rem;
    border: 1px solid;
    border-radius: 15px 15px 15px;
    margin-bottom: 10px;
    border-color: rgba(255, 255, 255, 0.85);
    background-color: rgba(0, 0, 0, 0.90);
    color: rgba(255, 255, 255, 0.85);
    outline: none;
    padding-left: 20px;
    padding-top: 1rem;
    resize: none;
    font-size: 15px;
    font-family: 'Roboto';

      &:focus{
      border-color: #3db783;
    }
  }
  @media (max-width: 400px) {
    textarea {
      width: 30rem;
    }
  }
  @media (max-width: 360px) {
    textarea {
      width: 28rem;
    }
  }
  @media (max-width: 866px) {
    h1 {
      font-size: 3rem;
    }
    h1:after {
      display: none;
    }

    ul {
      flex-direction: column;
    }
    input {
      width: 100%;
      margin-bottom: 10px;
    textarea {
      width: 100%;
    }
  }
`;