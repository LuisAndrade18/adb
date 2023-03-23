import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'

function app() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Main />
      <Footer/>
    </>
  )
}

export default app;
