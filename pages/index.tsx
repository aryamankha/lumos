import Head from "next/head";
import Image from "next/image";
import { StepBar } from "../src/components/StepBar";

export default function Home() {
  const steps = [
    { name: "Assign", number: "1" },
    { name: "Review", number: "2" },
    { name: "Remove & Upload Evidence", number: "3" },
    { name: "Done", number: "4" },
  ];
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          style={{
            backgroundColor: "rgb(25,25,25)",
            padding: "10px 0px",
            width: "750px",
          }}
        >
          <StepBar steps={steps} currentIndex={2} />
        </div>
      </main>
    </div>
  );
}
