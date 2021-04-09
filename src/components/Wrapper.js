import React, { useState, createContext } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Portugues from '../languages/pt-BR.json';
import English from '../languages/en-US.json';

export const Context = createContext();

const Wrapper = props => {
  const router = useRouter();
  const { locale } = router;

  const translation = locale === 'pt-BR' ? Portugues : English;

  function selectLanguage(e) {
    const newLocale = e.target.value;

    router.push("/", "/", { locale: newLocale });
  };
  return (
    <Context.Provider value={{ locale, selectLanguage, translation }}>
      {props.children}
    </Context.Provider>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Wrapper;
