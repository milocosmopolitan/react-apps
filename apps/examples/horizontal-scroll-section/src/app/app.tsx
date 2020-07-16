import React from 'react';

import styled, { createGlobalStyle } from "styled-components";
import HorizontalScroll from "./horizontal-scroll";

// import { ReactComponent as Logo } from './logo.svg';
// import star from './star.svg';

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
    background: red;
    &.alt-color {
      background: blue;
    }
  }

  .ui-section {
    background: red;
  }
`;

const Main = styled.main``;

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const BumperSection = styled.section`
  text-align: center;
  padding: 128px 16px;
  background-color: #efefef;
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding: 0 0 0 150px;
  align-items: center;
  background-color: red;
`;

const SampleCard = styled.div`
  position: relative;
  height: 300px;
  width: 500px;
  background-color: #111f30;
  margin-right: 75px;
  flex-shrink: 0;
`;

const FullscreenContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: rgba(50,100,60,0.4);
  padding: 0 0 0 150px;
  margin: 0px;
  flex-shrink: 0;
  color: white;
`;

const SampleCards = React.memo<any>(() =>
  Array(5)
    .fill(0)
    .map((_e, i) => <SampleCard key={`sampleCard-${i}`} />)
);

const FullscreenCards = React.memo<any>(() =>
  Array(5)
    .fill(0)
    .map((_e, i) => (
      <FullscreenContainer key={`fullscreenCard-${i}`}>
        Card {i+1}
      </FullscreenContainer>
    ))
);



export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.styled-components file.
   */
  return (
    <>
      <GlobalStyle />
      <Main>
        <BumperSection>
          <h2>Scroll down to reach the horizontal scroll section</h2>
        </BumperSection>

        <HorizontalSection>
          <HorizontalScroll>
            <CardsContainer>
              <SampleCards />
            </CardsContainer>
          </HorizontalScroll>
        </HorizontalSection>

        <HorizontalSection className="section">
          <HorizontalScroll>
            <CardsContainer>
              <FullscreenCards />
            </CardsContainer>
          </HorizontalScroll>
        </HorizontalSection>

        <BumperSection>
          <h2>You have left the horizontal horizontal scroll section</h2>
        </BumperSection>
      </Main>
    </>
  );
};

export default App;
