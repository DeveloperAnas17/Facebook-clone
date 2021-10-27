import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Facebook Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* body */}
      <div className="flex justify-between max-w-screen-2xl mx-auto p-3">
        <Sidebar className="" />
        <Feed className="" />
        <Widgets className="" />
      </div>
    </div>
  );
}
