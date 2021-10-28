import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:nburbach@huskers.unl.edu">nburbach@huskers.unl.edu</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialIconsContainer>
          <SocialIcons href='https://github.com/nburbach3' target="_blank">
            <AiFillGithub size='3rem' />
          </SocialIcons>
         <SocialIcons href='https://linkedin.com/in/nick-burbach/' target="_blank">
            <AiFillLinkedin size='3rem' />
         </SocialIcons>
          <SocialIcons href='https://www.instagram.com/nick_burbach/' target="_blank">
           <AiFillInstagram size='3rem' />
         </SocialIcons>
        </SocialIconsContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
