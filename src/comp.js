import * as ReactDOMServer from 'react-dom/server';

import HTMLPage from './HTMLPage';

console.log("Started .. ")

export default {
  port: 3000,
  fetch(request) {
    //return new Response("Welcome to Bun!");
    console.log("request ==>", JSON.stringify(request,null,4));
    console.log("request ==>", JSON.stringify(request.headers,null,4));
    
    const content=ReactDOMServer.renderToString(<HTMLPage/>);
    const meta={satus: 200,
      headers: {
        "Content-Type": "text/html",
      }
    };
    return new Response(content,meta);

  },
};