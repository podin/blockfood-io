import * as React from 'react';

import {
    DATA_META_TAGS_TITLE,
    DATA_META_TAGS_DESCRIPTION,
    DATA_META_TAGS_KEYWORDS,
    DATA_META_TAGS_SOCIAL
} from './data/DataMetaTags'

export default ({Html, Head, Body, children}) => (
    <Html lang="en-US">
    <Head>
        <meta charSet='utf-8'/>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <title>{DATA_META_TAGS_TITLE}</title>
        <meta name='description' content={DATA_META_TAGS_DESCRIPTION}/>
        <meta name='keywords' content={DATA_META_TAGS_KEYWORDS.join(', ')}/>
        <meta name='author' content='BlockFood'/>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="theme-color" content="#ffffff"/>

        <meta property='og:title' content={DATA_META_TAGS_SOCIAL.title}/>
        <meta property='og:image' content={DATA_META_TAGS_SOCIAL.image}/>
        <meta property='og:url' content={DATA_META_TAGS_SOCIAL.url}/>
        <meta property='og:site_name' content={DATA_META_TAGS_SOCIAL.name}/>
        <meta property='og:description' content={DATA_META_TAGS_SOCIAL.description}/>
        <meta name='twitter:title' content={DATA_META_TAGS_SOCIAL.title}/>
        <meta name='twitter:image' content={DATA_META_TAGS_SOCIAL.image}/>
        <meta name='twitter:url' content={DATA_META_TAGS_SOCIAL.url}/>
        <meta name='twitter:card' content={DATA_META_TAGS_SOCIAL.name}/>

        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Poppins" rel="stylesheet"/>
        <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"/>
        <script src='https://code.createjs.com/createjs-2015.11.26.min.js'/>

    </Head>
    <Body>{children}</Body>
    </Html>
)