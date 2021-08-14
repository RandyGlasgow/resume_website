import Head from "next/head";

export default function Layout({ children, title, keywords }) {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta content="randy glasgow's resume" name="description" />
        <meta content={keywords} name="keywords" />
        <meta content={title} name="author" />
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-36">
        {children}
      </div>
    </div>
  );
}
