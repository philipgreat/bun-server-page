
import moment from 'moment';
import * as ReactDOMServer from 'react-dom/server';



async function fetchMoviesJSON() {
  const response = await fetch('https://api.64clouds.com/v1/getServiceInfo?veid=1524667&api_key=private_typyXdAdjZj3cRzdudC7z9vi');
  const content = await response.json();
  return content;
}

const sampleResponse=async ()=>{
  const resp=await fetchMoviesJSON();
  const value=(resp.data_counter/resp.plan_monthly_data*100).toFixed(4)+"%"
  const expr=(resp.data_counter/1024/1024/1024).toFixed(2) +"GB/" +(resp.plan_monthly_data/1024/1024/1024).toFixed(2)+"GB"
  const content=ReactDOMServer.renderToString(
    <div >
      <p>{value}</p>
      <p>{(expr)}</p>
      
    </div>);


  const meta={satus: 200,
    headers: {
      "Content-Type": "text/html",
      "Server":"Double Chain Page Server 1.0"
    }
  };
  
  return new Response(content,meta);

}

export default {
  port: 3000,
  fetch(req) {
    
    return sampleResponse()
    //return new Response(`Hello from bun on Northflank!\nThe time is ${now}.\nThis is ${url.pathname}.`);
  }
};
