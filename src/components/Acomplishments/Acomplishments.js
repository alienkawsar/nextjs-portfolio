import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Working Projects'},
  { number: 500, text: 'Linkedin Connections', },
  { number: 1600, text: 'Facebook Followers', },
  { number: 1000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle style={{textAlign:'center'}}>Perosnal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index)=>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
