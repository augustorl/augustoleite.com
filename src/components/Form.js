import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
// import { FormattedMessage, useIntl } from 'react-intl';

import * as Yup from 'yup';
import { Container, ContactForm, ErroredMessage } from '../styles/components/Form';

// Recaptcha HTML 6LcEkMIUAAAAAB8PA3S9CAle8rF58B1EuT1s2HBO

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string().required('Required'),
});

export default () => {
//   const intl = useIntl();
  /* Server State Handling */
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  const handleOnSubmit = (values, actions) => {
    axios({
      method: 'POST',
      url: 'https://formspree.io/mzbbvrpq',
      data: values,
    }).catch(error => {
      actions.setSubmitting(false);
      handleServerResponse(false, error.response.data.error);
    });
  };

  return (
    <div>
      <Container>
        <ContactForm>
          <h1>
            {/* <FormattedMessage id="contact.title" defaultMessage="Contato" /> */}
            Contato
          </h1>
          <Formik
            initialValues={{ email: '', message: '' }}
            onSubmit={handleOnSubmit}
            validationSchema={formSchema}
          >
            {({ isSubmitting }) => (
              <Form id="fs-frm" noValidate>
                <ul>
                  <li>
                    <label htmlFor="name">
                      <Field
                        name="name"
                        id="name"
                        placeholder="name"
                        // placeholder={intl.formatMessage({
                        //   id: 'name.placeholder',
                        // })}
                      />
                    </label>
                    <label htmlFor="email">
                      <Field
                        id="email"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                      />
                      <ErroredMessage
                        name="email"
                        className="errorMsg"
                        component="p"
                      />
                    </label>
                  </li>
                  <li>
                    <label htmlFor="message">
                      <Field
                        id="message"
                        name="message"
                        component="textarea"
                        placeholder="mensagem"
                        // placeholder={intl.formatMessage({
                        //   id: 'message.placeholder',
                        // })}
                      />
                      <ErroredMessage
                        name="message"
                        className="errorMsg"
                        component="p"
                      />
                    </label>

                    <button
                      className="g-recaptcha"
                      data-sitekey="6LcEkMIUAAAAAB8PA3S9CAle8rF58B1EuT1s2HBO"
                      data-callback="onSubmit"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {/* <FormattedMessage
                        id="button.content"
                        defaultMessage="Enviar"
                      /> */}
                      Enviar
                    </button>
                  </li>
                </ul>
                {serverState && (
                  <p className={!serverState.ok ? 'errorMsg' : ''}>
                    {serverState.msg}
                  </p>
                )}
              </Form>
            )}
          </Formik>
        </ContactForm>
      </Container>
    </div>
  );
};