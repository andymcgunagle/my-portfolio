export const specialties: Specialty[] = [
  {
    name: 'JavScript',
    image: {
      src: '/javascript-logo.png',
      height: 480,
      width: 480,
    },
  },
  {
    name: 'TypeScript',
    image: {
      src: '/typescript-logo.png',
      height: 1024,
      width: 1024,
    },
  },
  {
    name: 'React.js',
    image: {
      src: '/react-logo.png',
      height: 848,
      width: 1200,
    },
  },
  {
    name: 'Node.js',
    image: {
      src: '/node-logo.png',
      height: 734,
      width: 1200,
    },
  },
];

interface Specialty {
  name: string;
  image: {
    src: string;
    height: number,
    width: number,
  },
};