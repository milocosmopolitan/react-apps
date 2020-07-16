import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import Box from '@material-ui/core/Box';
import Header from './components/header';
import Footer from './components/footer';
import { Link } from "react-scroll";
import { IntroSectionContent } from './components/intro';
import { AboutSectionContent } from './components/about';
import { ServiceSectionContent } from './components/services';
import { TestimonialsSectionContent } from './components/testimonials';
import { ContactSectionContent } from './components/contact';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }

  .section {
    background: #E7E7E7;
    &.alt-color {
      background: #D3D3D3;
    }
  }

  .ui-section {
    background: red;
  }
  .nav-link {
    margin-left: 10px;
  }
`;

const Main = styled.main``;

export const App = () => {

  return (
    <>
      <GlobalStyle />
      <Header>
        <Link to="about"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}>
          About
        </Link>
        <Link to="services"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}>
          Services
        </Link>
        <Link to="contact"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}>
          Contact
        </Link>

      </Header>
      <Main>
        <Box id="intro"
          className="section"
          component="section"
          position="relative" width="100%" minHeight="100vh"
          display="flex" justifyContent="center" alignItems="center">
          <IntroSectionContent/>
        </Box>

        <Box id="about"
          className="section alt-color"
          component="section"
          position="relative" width="100%" minHeight="100vh"
          display="flex" justifyContent="center" alignItems="center">
          <AboutSectionContent/>
        </Box>

        <Box id="services"
          className="section"
          component="section"
          position="relative" width="100%" minHeight="100vh">
          <ServiceSectionContent/>
        </Box>

        <Box id="testimonial"
          className="section alt-color"
          component="section"
          position="relative" width="100%" minHeight="100vh">
          <TestimonialsSectionContent/>
        </Box>

        <Box id="contact"
          className="section"
          component="section"
          position="relative" width="100%" minHeight="100vh">
          <ContactSectionContent/>
        </Box>
      </Main>
      <Footer></Footer>
    </>
  );
};

export default App;
