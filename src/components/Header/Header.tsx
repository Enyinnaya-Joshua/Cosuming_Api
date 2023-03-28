import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Logo>Logo</Logo>
      <Auth>
        <AuthButton className="signup">Sign Up</AuthButton>
        <AuthButton className="signin">Sign In</AuthButton>
      </Auth>
    </Container>
  );
};

export default Header;

const AuthButton = styled.button`
  height: 50px;
  width: 150px;
  background-color: white;
  outline: none;
  border: none;
  margin-right: 10px;
  background-color: blue;

  
`;

const Auth = styled.div`
  height: auto;
  width: auto;

  .signin {
    background-color: white;
    border: 1px solid blue;
  }
`;

const Logo = styled.div`
  text-align: start;
  font-size: 20px;
  font-weight: bold;
`;

const Container = styled.div`
  height: 70px;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 120px;
`;
