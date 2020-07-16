import React from 'react';
import Box from '@material-ui/core/Box';
import { HorizontalScroll } from '@react-workspace/react-ui/layout';
import styled from "styled-components";

const ServiceCard = styled.div`
  position: relative;
  height: 80vh;
  width: 70vw;
  background-color: rgba(50,100,60,0.4);
  padding: 0 0 0 150px;
  margin-right: 150px;
  flex-shrink: 0;
  color: white;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
`;

const ServiceCards = React.memo<any>(() =>
  Array(5)
    .fill(0)
    .map((_e, i) => (
      <ServiceCard key={`service-card-${i}`}>
        Card {i+1}
      </ServiceCard>
    ))
);

export const ServiceSectionContent = (props: any) => {
  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <h2>Services</h2>
        <p>This sections displays services provided by the business</p>
      </Box>
      <HorizontalScroll>
        <Box
          display="flex" flexDirection="row" flexWrap="nowrap"
          padding="0 0 0 150px"
          justifyContent="flex-start" alignItems="center"
          position="relative" height="100%">
          <ServiceCards />
        </Box>
      </HorizontalScroll>
    </>
  )
}
