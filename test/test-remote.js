
//unset ALL_PROXY

const dayjs = require('dayjs');
const axios = require('axios').default;
const _ = require("lodash")
const { v4: uuidv4 } = require('uuid');

const nowExpr=dayjs().format('YYYY年MM月DD日') // '25/01/2019'

const defaultReportData={
    header:{
      logo:"https://cms.think-to.com/thinktologo.png", 
      title:"CMS SaaS日报",
      metaData:["日期："+nowExpr,"编号："+uuidv4()]
    },
    body:[
        {"values":["序号","工厂名称","登记气瓶总数","充装总数","去年充装总数","上个月充装个数","昨天充装个数"]},
    ]
}
/*

{"class":"com.doublechaintech.cmes.merchant.Merchant",
"displayName":"玉环圣洁气体有限公司","messageList":[],
"_packagedItemCount":57117,
"_lastMonthCount":6411,
"_lastYearCount":56397,
"_assetAsRegisterCount":15630,"id":"M000001",
"name":"玉环圣洁气体有限公司","nickname":"玉环圣洁",
"code":"33102101350","createTime":1642494740000,
"lastUpdateTime":1673604004000,
"syncMerchantId":"M000003","lastSyncRecordTime":1673604004000,"version":4803}

*/
const wrapItem=({item,index})=>{
    //      {"values":["工厂名称","登记气瓶总数","充装总数","去年充装总数","上个月充装个数","昨天充装个数"]},

    const properties=["name","_assetAsRegisterCount","_packagedItemCount","_lastYearCount","_lastMonthCount","_yesterdayCount"];
    const line=[];
    line.push(index+1)
    properties.forEach(prop=>{
      line.push(_.get(item,prop,"-"));
    })
    
    return  {"values":line};
}
async function sendEmail({htmlContent,title}) {
  const emailservice="https://springboot-simple-service-siphksxloz.cn-chengdu.fcapp.run/emailservice/platformManager/sendHTMLEmailT/"
  const data={title,
    text:htmlContent,
    content:htmlContent,
    recipients:"philip_chang@163.com,dehong.mei@think-to.com,tingzhi.zhou@think-to.com,xiaodong.chen@think-to.com,bo.huang@think-to.com,jun.yang@think-to.com"
    //recipients:"philip_chang@163.com"
  
  }
  //const data={title,text:htmlContent,recipients:"philip_chang@163.com"}
  const status = await axios.put(emailservice,JSON.stringify(data),{headers:{'Content-Type': 'application/json'}});
  console.log(status.data)



}
//curl http://localhost:8888/cmes/platformManager/statsMerchant/
async function execute() {
  try {
    const response = await axios.get(`http://cms.think-to.com/cmes/platformManager/statsMerchant/`);
    response.data.data.forEach((item,index)=>{
        //console.log(JSON.stringify(item));
        defaultReportData.body.push(wrapItem({item,index}));
    })

    const response2 = await axios.get(`https://cmstest.ggas.com/cmes/platformManager/statsMerchant/`);
    response2.data.data.forEach((item,index)=>{
        //console.log(JSON.stringify(item));
        defaultReportData.body.push(wrapItem({item,index}));
    })
    

    //console.log(response.data);
    const htmlContentResp = await axios.put(`http://cms.think-to.com:20003/`,defaultReportData);
    //console.log(htmlContentResp.data);
    await sendEmail({htmlContent:htmlContentResp.data,title:"CMS-SaaS每日汇报@"+nowExpr})
    //return response.data;
  } catch (error) {
    console.error(error);
  }
}

execute()

// const htmlContent="<div></div>"
// const title="TRY"

// sendEmail({title,htmlContent})

//console.log(defaultReportData)


    // const response2 = await axios.get(`https://cmstest.ggas.com/cmes/platformManager/statsMerchant/`);
    // response2.data.data.forEach(item=>{
    //     //console.log(JSON.stringify(item));
    //     defaultReportData.body.push(wrapItem({item}));
    // })