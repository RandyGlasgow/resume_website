import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="">
      <Head></Head>
      <body >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-36">
          {children}
        </div>
      </body>
    </div>
  );
}
