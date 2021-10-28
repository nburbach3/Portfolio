import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiChrome, DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="#">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
          <DiChrome size='3rem' /> <Span>Nick Burbach</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#experience'>
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#technologies'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#accomplishments'>
          <NavLink>Accomplishments</NavLink>
        </Link>
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

export default Header;
