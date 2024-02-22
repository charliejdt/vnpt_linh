import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dịch vụ internet VNPT</title>
        <link rel="icon" href="icon.png"></link>
        <meta name="description" content="Dịch vụ internet VNPT" />

        <meta content="Dịch vụ internet VNPT" />

        {process.env.NODE_ENV === "production" && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=GTM-NRW8HDJJ`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', 'GTM-NRW8HDJJ');
                                `,
              }}
            ></script>
          </>
        )}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
