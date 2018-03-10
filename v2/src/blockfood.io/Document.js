import * as React from 'react';

export default ({Html, Head, Body, children}) => (
    <Html lang="en-US">
    <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>BlockFood - Decentralized Food Ordering & Delivery Platform</title>

        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Poppins" rel="stylesheet"/>
        <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"/>
        <script src='https://code.createjs.com/createjs-2015.11.26.min.js'/>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="theme-color" content="#ffffff"/>

    </Head>
    <Body>{children}</Body>
    </Html>
)