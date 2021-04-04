import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/billing");
    }, 1000);
  }, []);

  return (
    <div className="col-span-7">
      <Head>
        <title>GameShop</title>
      </Head>

      <main className="bg-white min-h-full">
        <h1>route: /</h1>
      </main>
    </div>
  );
}
