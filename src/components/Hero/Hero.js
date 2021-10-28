import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { HeroSection, ButtonLink } from './HeroStyles';

const Hero = (props) => (
  <Section nopadding>
    <HeroSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Nick Burbach and I am a Software Engineer at Garmin who specializes in web development. I have had experience working in different areas of software, but I definitely enjoy Front-End website engineering the most!
      </SectionText>
      <Button>
        <a href='#projects'>
          <ButtonLink>
            Learn More
          </ButtonLink>
        </a>
      </Button>
    </HeroSection>
  </Section>
);

export default Hero;