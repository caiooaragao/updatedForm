import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html>
      <Head>
    <title>Bootstrap demo</title>
    <link href="/template/dist/css/app.css" rel="stylesheet" />
        </Head>
        
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}