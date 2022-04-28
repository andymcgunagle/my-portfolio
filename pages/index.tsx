import type { NextPage } from 'next';
import Head from 'next/head';

import styled from 'styled-components';

import Avatar from '../components/Avatar';
import MyLinks from '../components/MyLinks';
import MyProjects from '../components/MyProjects';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-inline: auto;
  max-width: 600px;
  width: calc(100vw - 2rem);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  & h1 {
    font-size: var(--font-size-6);
  }
  
  & p {
    display: flex;
    flex-direction: column;
    
    font-weight: var(--font-weight-2);
  }
  
  & p span {
    font-size: var(--font-size-0);
  }
  
  @media only screen and (min-width: 768px) {
    & h1 {
      font-size: var(--font-size-10);
    }
    
    & p {
      flex-direction: row;
      gap: 0.25rem;
      align-items: center;
    }

    & p span {
      font-size: var(--font-size-2);
    }
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Andy McGunagle</title>
        <meta name="description" content="Andy McGunagle's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Container>
          <Avatar />
          <div>
            <h1>
              Andy McGunagle
            </h1>
            <p>
              <span>Software engineer based in </span>
              <span>San Diego, CA ☀️</span>
            </p>
          </div>
        </Container>
        <MyProjects />
        <MyLinks />
      </Wrapper>
    </div>
  );
};

export default Home;
