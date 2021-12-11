import Link from "next/link";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <h1>Hello Next.js</h1>
    </div>
  );
};

export default Home;
