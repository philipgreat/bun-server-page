import * as ReactDOMServer from 'react-dom/server';

import App from './App';


const pi=Math.PI;
export default {
  port: 3000,
  fetch(request) {
    //return new Response("Welcome to Bun!");
    
    return new Response(ReactDOMServer.renderToString(<App name={'user'} req={request}/>));

  },
};