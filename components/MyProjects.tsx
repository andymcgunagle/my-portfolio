import { projects } from "../data/projects";

import styled from 'styled-components';
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 0 auto;
  max-width: 600px;
  width: calc(100vw - 2rem);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
  
  padding-inline: 2rem;

  & > .github-repo-link {
    text-decoration: underline;
    text-underline-offset: 0.125rem;
  }
`;

const Heading = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  & * {
    font-size: 1.5rem;
  }
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  border-radius: var(--border-radius-4);
  border: var(--border-width-0) solid var(--color-gray-200);
  box-shadow: var(--box-shadow-6);
  padding-block: 2rem;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: var(--font-size-0);
  padding-inline: 2rem;
`;

const ImageWrapper = styled.div`
  border-block: var(--border-width-0) solid var(--color-gray-200);
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  padding-inline: 2rem;
`;

const Pill = styled.span`
  background-color: var(--color-gray-200);
  border-radius: var(--border-radius-full);
  height: fit-content;
  padding: 0.125rem 1rem;
  width: fit-content;
`;

export default function MyProjects() {
  return (
    <Wrapper>
      {projects.map((project) => (
        <Project key={project.name}>
          <Header>
            <a
              href={project.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Heading>
                <span className="material-symbols-rounded">link</span>
                <span>{project.name}</span>
              </Heading>
            </a>
            {project.githubUrl &&
              <a
                href={project.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="github-repo-link"
              >
                GitHub Repo
              </a>
            }
          </Header>

          <ImageWrapper>
            <Image
              alt={project.image.alt}
              height={project.image.height}
              layout="responsive"
              src={project.image.src}
              width={project.image.width}
            />
          </ImageWrapper>

          <Description>
            {project.description}
          </Description>

          <Container>
            {project.tech.map((item => <Pill key={item}>{item}</Pill>))}
          </Container>
        </Project>
      ))}
    </Wrapper>
  );
};