import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  Button,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+8801771113548'>+8801771113548</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:k.alam13548@gmail.com'>
            k.alam13548@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            <code>
              if (midnight === 1am && coffee === isReady) let's code &#129299;;
            </code>
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/kawsar441'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://facebook.com/kawsar210'>
            <AiFillFacebook size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com/in/kawsar0210'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <Link href='/'>
        <Button>
          <FaRegArrowAltCircleUp fill='white' size='2.5rem' />
        </Button>
      </Link>
    </FooterWrapper>
  );
};

export default Footer;
