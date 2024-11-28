import * as ReactDOMServer from 'react-dom/server';

import HTMLPage from '../components/HTMLPage';
import FillingPilotReport from '../../archive/FillingPilotReport'
console.log("Started .. ")

export default {
  port: 3000,
  fetch(request) {
    //return new Response("Welcome to Bun!");
    console.log("request ==>", JSON.stringify(request,null,4));
   

    console.log("request ==>", new URL(request.url).pathname);
    //console.log("request ==>", JSON.stringify(request.headers,null,4));
    const playload={}
    request.text().then((text) => {
      console.log("request text request.text().then((text) ==>", text);
      playload.text=text;
      // do something with the text sent in the request
    });
    console.log("request text payload", playload);
    
    const content=ReactDOMServer.renderToString(
        <HTMLPage>
          <FillingPilotReport/>
        </HTMLPage>);

  const meta={satus: 200,
      headers: {
        "Content-Type": "text/html",
      }
    };
    return new Response(content,meta);

  },
};