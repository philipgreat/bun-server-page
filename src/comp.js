import * as ReactDOMServer from 'react-dom/server';

import App from './App';


const pi=Math.PI;
export default {
  port: 3000,
  fetch(request) {
    //return new Response("Welcome to Bun!");
    console.log("request ==>", request)
    return new Response(ReactDOMServer.renderToString(
    
        <html lang="en">
        <head>
          <title>Default Title</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </head>
        <body>
        <App name={'app'} req={request}/>
        </body>
      </html>
    
    ));

  },
};