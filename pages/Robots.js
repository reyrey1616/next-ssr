import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = () => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href='/'>
        <button>Home Page</button>
      </Link>
      <Link href='/about'>
        <button>About</button>
      </Link>
      <div>Robots data</div>
    </div>
  );
};

export default Robots;
