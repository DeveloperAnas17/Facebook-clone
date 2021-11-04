import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
// import Login from "../components/Login";

export default function Home({ session }) {
  // if (!session) return <Login />;
  return (
    <div className="">
      <Head>
        <title>Facebook Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* body */}
      <Sidebar />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
