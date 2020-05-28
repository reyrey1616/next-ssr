import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = ({ robots }) => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href='/'>
        <button>Home Page</button>
      </Link>
      <Link href='/about'>
        <button>About</button>
      </Link>
      <div>
        {robots.map((robot) => (
          <li key={robot.id}>
            <Link href={`/robot/${robot.id}`}>
              <a>{robot.name}</a>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

Robots.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    robots: data,
  };
};

export default Robots;
