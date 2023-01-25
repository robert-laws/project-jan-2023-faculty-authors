import React from 'react';
import { Navigation, Heading, Container, Footer, Card } from '../components';

export const PubCards = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Heading>PubCards</Heading>
        <div className='py-6'>
          <div className='mx-auto max-w-3xl sm:px-6 md:px-4 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8'>
            <aside className='md:col-span-12 lg:col-span-3 xl:col-span-4 xl:block bg-slate-100'>
              <div className='sticky top-6 space-y-4'>Aside</div>
            </aside>

            <main className='md:col-span-12 lg:col-span-9 xl:col-span-8'>
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-1'>
                <Card
                  pubId='1'
                  title='The omani-zanzibari family: Between politics and pedigree in an empire on the rim'
                  author='Rogaia Mustafa Abusharaf'
                  year='2018'
                  language='English'
                  documentType='Article'
                />
              </div>
            </main>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};
