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
        <title>
          Street Taxi Knokke | Taxi Knokke |Taxibedrijf uit Knokke-Heist | Taxi
          Service
        </title>
        <meta
          name='description'
          content='Street Taxi Knokke is je vertrouwde taxidienst in Knokke-Heist en omstreken. Boek je taxi in Knokke voor veilig en betrouwbaar vervoer. Wij bieden 24 uur per dag taxidiensten om aan al uw reisbehoeften in de omgeving te voldoen. Neem nu contact met ons op om je reis te boeken met ons ervaren team.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='google-site-verification'
          content='qq4msw35AbpTxunoNYt6pBE822Q0Qi2rD-S2Y7w7M9w'
        />
        <link rel='icon' href='/logo.ico' />
        <meta property='og:image' content='assets/logos/logo.svg'></meta>
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
