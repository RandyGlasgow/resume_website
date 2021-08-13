import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="py-24">
      <Head></Head>
      <body className="bg-gradient-to-br from-gray-200 to-gray-400 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-36">
          {children}
        </div>
      </body>
    </div>
  );
}
