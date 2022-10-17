import * as ReactDOMServer from 'react-dom/server';

import HTMLPage from '../components/HTMLPage';
import App from '../components/App'
console.log("Started .. ")

export default {
  port: 3000,
  fetch(request) {
    //return new Response("Welcome to Bun!");
    console.log("request ==>", JSON.stringify(request,null,4));
    console.log("request ==>", request.url);
    console.log("request ==>", new URL(request.url).pathname);
    //console.log("request ==>", JSON.stringify(request.headers,null,4));
    
    const content=ReactDOMServer.renderToString(
    <HTMLPage>


      <App></App>


    </HTMLPage>);
    const meta={satus: 200,
      headers: {
        "Content-Type": "text/html",
      }
    };
    return new Response(content,meta);

  },
};