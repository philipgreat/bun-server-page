import * as ReactDOMServer from 'react-dom/server';

import HTMLPage from '../components/HTMLPage';
import FillingPilotReport from '../components/FillingPilotReport'
console.log("Started .. ")

export default {
  port: 3000,
  fetch(request) {
    //return new Response("Welcome to Bun!");
    console.log("request ==>", JSON.stringify(request,null,4));
   

    console.log("request ==>", new URL(request.url).pathname);
    //console.log("request ==>", JSON.stringify(request.headers,null,4));
    
    request.text().then((text) => {
      console.log("request text ==>", text);

      // do something with the text sent in the request
    });
    
    
    const content=ReactDOMServer.renderToString(
    <HTMLPage>


      <FillingPilotReport></FillingPilotReport>


    </HTMLPage>);
    const meta={satus: 200,
      headers: {
        "Content-Type": "text/html",
      }
    };
    return new Response(content,meta);

  },
};