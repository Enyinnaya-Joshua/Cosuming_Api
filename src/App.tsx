import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Card />
      </Wrapper>
    </Container>
  );
};

export default App;

const Wrapper = styled.div`
  height: auto;
  width: auto;
  margin-top: 100px;
  padding: 0px 120px;
`;

const Container = styled.div`
  height: auto;
  width: auto;
  background-color: silver;

  padding-bottom: 100px;
`;
