import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="YourGiftFinder is dé plaats om leuke cadeaus te vinden voor je vriend, vriendin of familielid. Met meer dan tweeduizend cadeaus om uit te kiezen, helpen wij jou graag dat ene speciale cadeau te vinden voor diegene die jij wilt verrassen."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
