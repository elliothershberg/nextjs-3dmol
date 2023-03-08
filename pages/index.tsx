import type { NextPage } from "next";
import { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

const Home: NextPage = () => {
  const [viewerLoaded, setviewerLoaded] = useState(false);
  const [uiLoaded, setUiLoaded] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Script
          src="https://3Dmol.org/build/3Dmol-min.js"
          onLoad={() => {
            console.log("loaded!");
            setviewerLoaded(true);
          }}
        ></Script>
        <Script
          src="https://3Dmol.org/build/3Dmol.ui-min.js"
          onLoad={() => {
            setUiLoaded(true);
          }}
        ></Script>

        {viewerLoaded && uiLoaded && (
          <div className="w-full h-full">
            Container:
            <div
              style={{ height: 400, width: 400, position: "relative" }}
              className="viewer_3Dmoljs"
              data-pdb="2POR"
              data-backgroundcolor="0xffffff"
              data-style="stick"
              data-ui="true"
            ></div>
          </div>
        )}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
