import React from 'react';
import { useHistory } from "react-router-dom";
import { Icon, Header, Button, Container, Image } from 'semantic-ui-react';

export const Page404 = (props) => {
  
  const history = useHistory();

  return (
    <div>
      <Image size='medium' centered src='/oops.png'></Image>
      <Header textAlign='center'>404 - PAGE NOT FOUND</Header>
      <Container textAlign='center' >
        <p>The page you are looking for might have been removed</p>
        <p>had its name changed or is temporally unavailable</p>
        <Button onClick={()=> history.push('/')} primary>
          <Icon name='home' />Back to home
        </Button>
      </Container>
    </div>
  );
}