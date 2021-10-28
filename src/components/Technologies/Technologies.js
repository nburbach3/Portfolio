import React from 'react';
import { DiJava, DiReact, DiFirebase } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="technologies">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked on many different areas of software, from Front-End to Back-End to database work. Front-End is my specialty.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Experience with JavaScript using JQuery, React, and Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="4rem" />
        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>
          <ListParagraph>
            Experience with Java, C#, and Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListContainer>
          <ListTitle>
            Databases
          </ListTitle>
          <ListParagraph>
            Experience with SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
