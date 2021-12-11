import Link from "next/link";
import Head from "next/head";

const products = [{ name: "bag" }, { name: "shoes" }, { name: "socks" }];

const Home = () => {
  return (
    <div>
      <Head>
        <title>{products[0].name}</title>
        <meta name="description" content={`${products[0].name}のページ`} />
        <meta property="og:title" content={products[0].name} />
        <meta
          property="og:description"
          content={`${products[0].name}のページ`}
        />
      </Head>
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
