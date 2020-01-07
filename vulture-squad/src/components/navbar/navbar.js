import React from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  a {
    margin: 1%;
  }
`;

const Navbar = props => {
  return (
    <StyledNav>
      <a href="#">Login</a>
      <a href="#">Sign Up</a>
    </StyledNav>
  );
};

export default Navbar;
