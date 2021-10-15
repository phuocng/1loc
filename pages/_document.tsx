import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.png" type="image/png" />
                    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                    <link rel="mask-icon" href="/mask-favicon.svg" color="#1975FF" />
                    <meta content="Favorite JavaScript utilities in single line of code" name="description" />
                    <meta content="JavaScript helpers, JavaScript snippets, JavaScript utils" name="keywords" />
                    <meta content="Nguyen Huu Phuoc" name="author" />

                    <meta content="@nghuuphuoc" name="twitter:site" />
                    <meta content="summary" name="twitter:card" />
                    <meta name="twitter:title" content="Favorite JavaScript utilities in single line of code - 1 LOC" />
                    <meta name="twitter:description" content="Favorite JavaScript utilities in single line of code" />

                    <meta property="og:title" content="Favorite JavaScript utilities in single line of code - 1 LOC" />
                    <meta property="og:description" content="Favorite JavaScript utilities in single line of code" />
                    <meta name="description" content="Favorite JavaScript utilities in single line of code" />

                    <meta content="article" property="og:type" />
                    <meta content="https://1loc.dev" property="og:url" />
                    <meta content="1LOC" property="og:site_name" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?&family=Source+Code+Pro:wght@400&family=Inter:wght@400;700&display=swap" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
