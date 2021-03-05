import Document, { Html, Head, Main, NextScript }from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="author" content="Tas Ownzt"/>
                    <meta name="description" content="Projeto desenvolvido durante a NLW 4º da Rocketseat na trilha ReactJs"/>

                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://move-it-tasownzt.vercel.app/"/>
                    <meta property="og:description" content="Projeto desenvolvido durante a NLW 4º da Rocketseat na trilha ReactJs"/>
                    <meta property="og:image" content="./Screenshot.png"/>

                    
                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://move-it-tasownzt.vercel.app/"/>
                    <meta property="twitter:description" content="Projeto desenvolvido durante a NLW 4º da Rocketseat na trilha ReactJs"/>
                    <meta property="twitter:image" content="./Screenshot.png"/>

                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                    
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}