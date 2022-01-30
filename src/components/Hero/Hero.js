import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Stack } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to
        <br />
        Kawsar Alam a <Stack>MERN Stack Developer</Stack>
      </SectionTitle>
      <SectionText>
          Hi there, I am Kawsar Alam. I am an MERN Stack Developer with one year
          of experience creating unique and amazing Web Apps. I am a determined
          ambitious who can take any challenge with relish and able to work
          efficiently in any kind of project. I take a responsible attitude
          towards my work. I am eager to learn and enthusiastic to succeed. I
          have got a dedicated approach to providing customer service and
          continually improving my performance.
      </SectionText>
      <Button href='https://drive.google.com/file/d/1trPGdqSfT5O29vnzWj-Wt5upr4jFPMrG/view?usp=sharing'>
        Download CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
