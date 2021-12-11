import Link from "next/link";

const products = [{ name: "bag" }, { name: "shoes" }, { name: "socks" }];

const Home = () => {
  return (
    <div>
      <ul>
        {products.map((products) => {
          return (
            <li key={products.name}>
              <Link href={`/products/${products.name}`}>
                <a>{products.name}</a>
              </Link>
            </li>
          );
        })}
        <li>
          <Link href={"/about"}>
            <a>About</a>
          </Link>
        </li>
      </ul>
      <h1>Hello Next.js</h1>
    </div>
  );
};

export default Home;
