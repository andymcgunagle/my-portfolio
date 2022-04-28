import Image from 'next/image';

import { links } from '../data/links';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    flex-direction: column;

    position: fixed;
    top: 1rem;
    right: 1rem;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: var(--border-radius-full);
  border: var(--border-width-0) solid var(--color-gray-200);
  box-shadow: var(--box-shadow-6);
  padding: 1rem;
  width: fit-content;
  transition: all 0.125s ease-in-out;
  
  &:hover {
    cursor: pointer;
    box-shadow: var(--box-shadow-8);
    transform: scale(1.05) translateY(-0.25rem);
    transition: all 0.125s ease-in-out;
  }

  &:active {
    transform: scale(1) translateY(0);
    transition: all 0.125s ease-in-out;
  }
`;

export default function MyLinks() {
  return (
    <Wrapper>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt={`${link.name} link`}
              height={32}
              width={32}
              layout="fixed"
              src={`/${link.name}-logo.png`}
            />
          </Link>
        );
      })}
    </Wrapper>
  );
};