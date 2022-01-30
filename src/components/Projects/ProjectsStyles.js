import styled from 'styled-components';

export const Img = styled.img `
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.3rem;
    padding: 0.5rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    gap: 1.3rem;
    padding: 1rem;
  }
`;
export const BlogCard = styled.div `
background: rgba( 0, 0, 0, 0.5 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  padding: 1rem;
  &:hover{
    transform: scale(0.95);
    transition: 0.5s ease;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;


export const HeaderThree = styled.h3 `
  font-weight: 500;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5em;
  }
`;

export const Hr = styled.hr `
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div `
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p `
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul `
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
  @media ${(props)=> props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 1em;
  }
`;

export const ExternalLinks = styled.a `
--green: #1BFD9C;
 font-size: 15px;
 padding: 0.7em 2.7em;
 letter-spacing: 0.06em;
 position: relative;
 font-family: inherit;
 border-radius: 0.6em;
 overflow: hidden;
 transition: all 0.3s;
 line-height: 1.4em;
 border: 2px solid var(--green);
 background: linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%,transparent 60% , rgba(27, 253, 156, 0.1) 100%);
 color: var(--green);
 box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1);
&:hover{
  color: #82ffc9;
 box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2);

}
&:before{
  content: "";
 position: absolute;
 left: -4em;
 width: 4em;
 height: 100%;
 top: 0;
 transition: transform .4s ease-in-out;
 background: linear-gradient(to right, transparent 1%, rgba(27, 253, 156, 0.1) 40%,rgba(27, 253, 156, 0.1) 60% , transparent 100%);
}
&:hover:before{
  transform: translateX(15em);
}
`;

export const TagList = styled.ul `
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li `
color: #d8bfbf;
font-size: 1.5rem;
`