import React from "react";
import styled from "styled-components";

const header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>Home</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>Watchlist</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>Original</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>Movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>Series</span>
        </a>
        
      </NavMenu>
    <UserImg src="/images/Bluewing_Spongebob_infographic_illustration_anatomy_sketch_Cool_01b7f264-15d7-4b20-83e4-fb8073d29b14.jpeg " />

    </Nav>
  );
};

export default header;

const Nav = styled.div`
  height: 80px;
  background-color: #090b13;
  color: #fff;
  display:flex;
  // justify-content: center;
  align-items: center;
  padding:0 36px;

  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
  
`;
const NavMenu = styled.div`
display: flex;
flex: 1;
margin-left: 30px;
align-items: center;


a{
  display: flex;
  align-items: center;
  padding-left:24px;
  cursor: pointer;

img{
  height:20px;
  margin-right:5px;
  }

  span{
    font-size:13px;
    latter-spacing: 1.42px;
    position: relative;
    

    &:after {
      content: "";
      height:2px;
      background: #fff;
      position: absolute;
      left: 0;
      right: 0;
      bottom:-6px;
      opacity: 0;
      
      transform-origin: left center;
      transition: all 250ms 0s ease-in-out;
      transform: scaleX(0);
    }
    
  }

  &:hover{
    span:after{
      transform: scaleX(1);
      
      opacity: 1;
    }
  }

}

`;

const UserImg = styled.img`
  width:40px;
  height:43px;
  border-radius:50%;
  cursor:pointer;
`
