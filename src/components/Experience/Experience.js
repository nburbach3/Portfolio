import React from 'react';

import { List, ListItem, ListItemText, ListItemTitle, ListItemDate } from './ExperienceStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { ExperienceData } from '../../constants/constants';

const Experience = () => {
  return (
    <Section id="experience">
      <SectionDivider />
      <br />
      <br />
      <SectionTitle>Experience</SectionTitle>
      <List>
        <>
          {ExperienceData.map((item) => (
            <ListItem>
              <ListItemTitle>
                {item.year}
                <ListItemDate>
                  {item.date}
                </ListItemDate>
              </ListItemTitle>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </>
      </List>
    </Section>
  );
};

export default Experience;