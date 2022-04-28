import Image from "next/image";

import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: var(--border-radius-full);
  border: var(--border-width-0) solid var(--color-gray-200);
  box-shadow: var(--box-shadow-6);
  padding: 0.25rem;
  width: 4.5rem;
  
  & > * {
    border-radius: var(--border-radius-full);
  }
`;

export default function Avatar() {
  return (
    <Wrapper>
      <Image
        src="/andy-mcgunagle.jpeg"
        alt="Andy McGunagle hiking in San Luis Obispo, CA"
        layout="responsive"
        width={640}
        height={635}
      />
    </Wrapper>
  );
};
