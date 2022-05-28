import React from 'react'
import styled from 'styled-components';
import Profile from './Profile'
import { login } from "../Redux/Login/action";
import { useSelector } from "react-redux";

const Container = styled.div`
  margin: 0;
  padding: 100px;
  display: grid;
  grid-template-column: repeat(11, 1fr);
  height: 100vh;
  gap: 30px
`;
const GridItem1 = styled.div`
grid-column: 1/3 ;
`;
const GridItem2 = styled.div`
  grid-column: 3/5;
`;
const GridItem3 = styled.div`
  grid-column: 6/9;
`;
const GridItem4 = styled.div`
  grid-column: 9/12;
`;

const Home = () => {
  // const getstate=((state )=> state.login)
  const {token, username} = useSelector((state) => state.login);

return (
    <Container>
      <GridItem1>
        <Profile token={token} username= {username} />
      </GridItem1>
      <GridItem2>TODO</GridItem2>
      <GridItem3>IMPROGRESS</GridItem3>
      <GridItem4>DONE</GridItem4>
    </Container>
);
}

export default Home;