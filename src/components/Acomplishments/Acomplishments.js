import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { AccomplishmentData } from '../../constants/constants';

const Acomplishments = () => (
  <Section id="accomplishments">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {AccomplishmentData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
