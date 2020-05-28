import Link from 'next/link';
import Image from '../components/Image';

const About = () => (
  <div style={{ fontSize: '20px', color: 'blue' }}>
    <h1> ABOUT</h1>
    <Link href='/'>
      <button>Back to home</button>
    </Link>
    <Link href='/Robots'>
      <button>Robots</button>
    </Link>
    <p>I was a magician once</p>
    <Image />
  </div>
);

export default About;
