import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import ThirdSection from "@/components/ThirdSection";
import LastSection from "@/components/LastSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Street Taxi Knokke</title>
        <meta name='description' content='Street Taxi Knokke ' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='google-site-verification'
          content='qq4msw35AbpTxunoNYt6pBE822Q0Qi2rD-S2Y7w7M9w'
        />
        <link rel='icon' href='/favicon.ico' />
        {/* <link href="/dist/output.css" rel="stylesheet"></link> */}
      </Head>

      <Navbar>
        <Header />
        <Hero
          hasBackground={true}
          buttonTextColor={false}
          isShown={true}
          isBig={true}
          isThick={false}
          hasMargin={true}
        />
        <WelcomeSection
          hasBackground={true}
          buttonTextColor={false}
          isShown={true}
          isPGrey={true}
          isH2Grey={true}
          isBig={true}
          isThick={false}
          hasMargin={true}
        />
        <ThirdSection isGrey={true} />
        <LastSection isGrey={false} />
        <Footer />
      </Navbar>
    </>
  );
}
