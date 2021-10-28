import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiChrome } from 'react-icons/di';

import { Container, Div1, Div2, Div3, SocialIcons, NavLink, Span } from './HeaderStyles';


const Header = () => {

  return (
    <Container>
      <Div1>
        <a href="#" style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
          <DiChrome size='3rem' /> <Span>Nick Burbach</Span>
        </a>
      </Div1>
      <Div2>
        <li>
          <a href='#projects'>
            <NavLink>
              Projects
            </NavLink>
          </a>
        </li>
        <li>
          <a href='#experience'>
            <NavLink>
              Experience
            </NavLink>
          </a>
        </li>
        <li>
          <a href='#technologies'>
            <NavLink>
              Technologies
            </NavLink>
          </a>
        </li>
        <li>
          <a href='#accomplishments'>
            <NavLink>
              Accomplishments
            </NavLink>
          </a>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href='https://github.com/nburbach3' target="_blank">
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://linkedin.com/in/nick-burbach/' target="_blank">
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/nick_burbach/' target="_blank">
          <AiFillInstagram size='3rem' />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;