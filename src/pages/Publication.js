import React from 'react';
import { Navigation, Heading, Container, Footer } from '../components';
import { useParams } from 'react-router-dom';

export const Publication = () => {
  const { id } = useParams();

  return (
    <>
      <Navigation />
      <Container>
        <Heading>Publication # {id}</Heading>
      </Container>
      <Footer />
    </>
  );
};
