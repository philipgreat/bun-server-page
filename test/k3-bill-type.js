var axios = require('axios');
var data = JSON.stringify({
  "data": {
    "formid": "BOS_BillType",
    "FilterString": "",
    //"FilterString": "",
    "OrderString":"FBillFormID.FName",
    "FieldKeys": "FBillFormID.FName,FName,FNumber,FDescription"
  }
});

//var cookie='kdservice-sessionid=4a03ef63-6bb7-413b-9acf-8767ca965e78; expires=Sun, 29-Jan-2023 08:47:19 GMT; path=/; secure; HttpOnly';

//var cookie="kdservice-sessionid=a8f40b88-b6aa-47d5-9953-156881c786b3; expires=Sat, 04-Feb-2023 06:48:06 GMT; path=/; secure; HttpOnly";
const cookie="kdservice-sessionid=2256aa1d-6361-4db0-8f55-072673b3fa58; expires=Thu, 09-Feb-2023 08:51:13 GMT; path=/; secure; HttpOnly";


var config = {
  method: 'post',
  url: 'https://gf872216.test.ik3cloud.com/k3cloud/Kingdee.BOS.WebApi.ServicesStub.DynamicFormService.ExecuteBillQuery.common.kdsvc',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': cookie
  },
  data : data
};

const ignoreType=({billType})=>{

  const use=["退货通知单","直接调拨单","销售退货单","销售订单","采购订单"];

  return !use.find(i=>i===billType)


}

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));

  response.data.forEach(element => {
    //console.log(element)
    //console.log(`\t\tbillTypeMap.put("${element[2]}","${element[1]}"}); // ${element[0]}, ${element[3]}`)

    if(element[1]==null){
      return;
    }
    if(ignoreType({billType:element[0]})){
      return;
    }
    const varname=element[1].replace("-","_").replace("+","_").replace("（","_").replace("）","").replace("-","_");
    //console.log(`\t\tBillTypeMap.${element[1]} = ${element[2]};//${element[0]}, ${element[3]}`);
    console.log(`\t\tstatic final String ${varname} = "${element[2]}";//${element[0]},${element[1]}, ${element[3]}`);

  });
  


})
.catch(function (error) {
  console.log(error);
});
