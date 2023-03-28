import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

interface iData {
  id?: number;
  title?: string;
  desc?: string;
  bro?: string | undefined;
}

const Card = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [post, setPost] = useState([]);

  const mann = (x: string) => {
    if (x.length > 10) {
      let shot = x.slice(0, 13);
      return shot;
    } else {
      return x;
    }
  };

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setPost(data);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });

    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => {
        console.log("getting from server", res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Wrapper>
        {post?.map((props: any) => (
          <Container>
            <Title>{props.title}</Title>
            <Desc>{props.body}</Desc>
          </Container>
        ))}
      </Wrapper>
    </>
  );
};

export default Card;

const Wrapper = styled.div`
  height: auto;
  width: auto;
`;

const Desc = styled.p`
  text-align: justify;
`;

const Title = styled.h1`
  height: 50px;
  width: auto;
  text-align: start;
`;

const Container = styled.div`
  height: 400px;
  width: 350px;
  background-color: whiter;
  border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  padding: 0px 32px;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    margin-bottom: 10px;
  }
`;
