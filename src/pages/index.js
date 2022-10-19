import * as ReactDOMServer from 'react-dom/server';

import HTMLPage from '../components/HTMLPage';
import FillingPilotReport from '../components/FillingPilotReport'
console.log("Started .. ")


const getTextFromRequest=(request)=>{

  return request.text().then((text) => {
    console.log("request text request.text().then((text) ==>", text);
    return Promise.resolve(text)
    // do something with the text sent in the request
  });

}

const errorResponse=(message)=>{

  const errorStatus= {
    satus: 507,
      headers: {
        "Content-Type": "text/html",
        "Server":"Double Chain Page Server 1.0"
      }
  }

  return new Response(message,errorStatus)

}

export default {
  port: 3000,
  async fetch(request) {
    //return new Response("Welcome to Bun!");
    console.log("request ==>", JSON.stringify(request,null,4));
   

    console.log("request ==>", new URL(request.url).pathname);
    //console.log("request ==>", JSON.stringify(request.headers,null,4));
    const playload={}
    playload.text=await getTextFromRequest(request)

    if(!playload.text){
      return errorResponse("请求正文中不包含数据");
    }
    try{
      JSON.parse(playload.text)
    }catch(error){
      return errorResponse("请求'"+playload.text+"'不是合法的JSON:"+error);
    }
    const {header,body}=JSON.parse(playload.text);
    if(!header){
      return errorResponse("请求JSON里不包含 header 字段");
    }
    /*
    header:{
    logo:"https://cms.think-to.com/thinktologo.png", 
    title:"充装报告(样)",
    metaData:["编号：FP20220805659","工厂："]
  }
    */
    const {logo,title,metaData}=header
    if(!logo){
      return errorResponse("请求JSON header 字段不包含 logo");
    }
    if(!title){
      return errorResponse("请求JSON header 字段不包含 title");
    }
    if(!metaData){
      return errorResponse("请求JSON header 字段不包含 metaData");
    }
    if(!Array.isArray(metaData)){
      return errorResponse("请求JSON header 字段包含 metaData 但是metaData 字段不是数组");
    }

    if(!body){
      return errorResponse("请求JSON里不包含 body 字段");
    }
    if(!Array.isArray(body)){
      return errorResponse("请求JSON里不包含 body 字段必须是 数组");
    }
    
    const content=ReactDOMServer.renderToString(
      <HTMLPage>
        <FillingPilotReport reportData={JSON.parse(playload.text)}/>
      </HTMLPage>);


    const meta={satus: 200,
      headers: {
        "Content-Type": "text/html",
        "Server":"Double Chain Page Server 1.0"
      }
    };
    console.log("request text payload", playload.text);
    
    return new Response(content,meta);

  },
};