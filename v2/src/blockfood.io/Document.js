import * as React from 'react';

export default ({ Html, Head, Body, children }) => (
    <Html lang="en-US">
    <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>BlockFood - Decentralized Food Ordering & Delivery Platform</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Poppins" rel="stylesheet"/>
        <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"/>
    </Head>
    <Body>{children}</Body>
    </Html>
)