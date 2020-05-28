import Link from 'next/link';

const About = () => (
  <div style={{ fontSize: '20px', color: 'blue' }}>
    <h1> ABOUT</h1>
    <Link href='/'>
      <button>Back to home</button>
    </Link>
    <p>I was a magician once</p>
  </div>
);

export default About;
