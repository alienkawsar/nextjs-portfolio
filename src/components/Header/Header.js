import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <>
    <Head>
      <meta charset='UTF-8'></meta>
      <meta
        name='description'
        content='Kawsar Alam is a MERN Stack Developer in Bangladesh with experience of creating amazing webapps.'
      />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      ></meta>
      <meta
        name='keyword'
        content='full-stack web developer in bangladesh, mern stack web developer in bangladesh, reactjs developer in bangladesh, nodejs developer in bangladesh, nextjs developer in bangladesh, mern developer in bangladesh, e-commerce engineer in bangladesh, web developer in bangladesh, web designer in bangladesh, bootstrap developer in bangladesh, material ui designer, tailwind css designer in bangladesh, seo optimization, frontend developer in bangladesh, backend developer in bangladesh, mongodb expert in bangladesh, mern expert in bangladesh, best web developer in bangladesh, top web developer in bangladesh, experienced web developer in bangladesh, web developer, mern stack developer, full-stack web developer, front-end developer, nodejs developer, back-end developer, react developer, express developer, programmer'
      />
      <title>Kawsar Alam - MERN Stack Developer</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Container>
      <Div1>
        <Link href='/'>
          <a>
            <img src='/logoWhite.png' width={80} height={60} alt='logo' />
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href='#projects'>
            <NavLink>Services</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#tech'>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#about'>
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href='https://github.com/kawsar441'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://facebook.com/kawsar210'>
          <AiFillFacebook size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://linkedin.com/in/kawsar0210'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
      </Div3>
    </Container>
  </>
);

export default Header;
