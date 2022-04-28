export const projects: Project[] = [
  {
    name: 'ClassLoops',
    description: `ClassLoops is a SaaS product that enables fitness studios to easily loop multiple exercise demo videos on a TV during their classes.\n\nI initially built ClassLoops using Web Components and Firebase in my 3rd month of teaching myself web development. Months later, with a lot more experience under my belt, I rebuilt the entire product with React.\n\nThis project helped me learn how to use technologies such as JavaScript, Web Components, Firebase, React, Redux, Redux Toolkit, styled-components, CSS Modules, Stripe, Node.js, and the YouTube API.`,
    githubUrl: '',
    tech: ['React', 'Firebase', 'Redux', 'Redux Toolkit', 'styled-components', 'CSS', 'HTML'],
    url: 'https://www.classloops.com/',
    image: {
      src: '/classloops-screenshot.png',
      alt: 'ClassLoops screenshot',
      height: 1896,
      width: 3584,
    },
  },
  {
    name: 'React Qwirkle',
    description: 'Qwirkle is a game my family and I have enjoyed playing for years, so I built an online version using React and Firebase. This project helped me learn the HTML Drag and Drop API and how to listen to realtime updates with Cloud Firestore.',
    githubUrl: 'https://github.com/andymcgunagle/react-qwirkle',
    tech: ['React', 'Firebase', 'styled-components', 'CSS', 'HTML'],
    url: 'https://react-qwirkle.vercel.app/',
    image: {
      src: '/react-qwirkle-screenshot.png',
      alt: 'React Qwirkle screenshot',
      height: 1882,
      width: 3584,
    },
  },
  {
    name: 'React Boggle',
    description: 'My dad and youngest brother love playing Boggle, so I built them an online version using React. This project taught me a few things about conditional styling with styled-components and how to leverage React\'s useEffect hook to produce desired side effects.',
    githubUrl: 'https://github.com/andymcgunagle/react-boggle',
    tech: ['React', 'styled-components', 'CSS', 'HTML'],
    url: 'https://react-boggle.vercel.app/',
    image: {
      src: '/react-boggle-screenshot.png',
      alt: 'React Boggle screenshot',
      height: 1900,
      width: 3584,
    },
  },
];

export interface Project {
  name: string,
  description: string,
  githubUrl: string,
  tech: string[],
  url: string,
  image: {
    src: string,
    alt: string,
    height: number,
    width: number,
  },
}