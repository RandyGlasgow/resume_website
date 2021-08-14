import Head from "next/head";

export default function Layout({ children, title }) {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-36">
        {children}
      </div>
    </div>
  );
}
