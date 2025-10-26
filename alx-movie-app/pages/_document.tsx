import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <link rel="manifest" href="/manifest.json" />
            <body className="antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
