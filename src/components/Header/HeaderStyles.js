import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    justify-content: space-between;
  }
`;

export const Span = styled.span`
	font-size: 3rem;
`

export const Div1 = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  display: flex;
  flex-direction: row;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    /* grid-area: 2 / 2 / 3 / 5; */
    display: none;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    /* align-items: center; */
    /* grid-area: 1 / 4 / 2 / 6; */
    display: none;
  }
`;

export const Div4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
  @media ${(props) => props.theme.breakpoints.sm2} {
    display: none;
  }
`;

export const Ul = styled.ul`
  z-index: 10;
  position: fixed;
  top: 0;
  right: -2;
  padding: 12px;
  width: 100vw;
  height: 100vh;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    justify-content: start;
    align-items: center;
    right: 0;
  }
  @media ${(props) => props.theme.breakpoints.sm2} {
    display: none;
  }
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  border-radius: 20px;
  color: white;
  background: rgb(39, 51, 89, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.3);
`

export const Li = styled.li`
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  width: 100%;
  margin: 4px 0;
  font-size: 32px;
`

export const SocialContainer = styled.div`
  margin-top: 2rem;
	display: flex;
  align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  padding: 1rem;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const NavLink2 = styled.a`
  font-size: 5rem;
  line-height: 128px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  padding: 1rem;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`