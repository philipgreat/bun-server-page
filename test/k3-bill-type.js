var axios = require('axios');
var data = JSON.stringify({
  "data": {
    "formid": "BOS_BillType",
    "FilterString": "FBillFormID.FName='销售订单' or FBillFormID.FName='采购订单' or FBillFormID.FName like '%直接调拨单%' ",
    //"FilterString": "",
    "OrderString":"FBillFormID.FName",
    "FieldKeys": "FBillFormID.FName,FName,FNumber,FDescription"
  }
});

var cookie='kdservice-sessionid=840bff7a-5346-4f1b-aede-1408c914dded; expires=Sun, 15-Jan-2023 17:48:00 GMT; path=/; secure; HttpOnly';

var config = {
  method: 'post',
  url: 'https://gf872216.test.ik3cloud.com/k3cloud/Kingdee.BOS.WebApi.ServicesStub.DynamicFormService.ExecuteBillQuery.common.kdsvc',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': cookie
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));

  response.data.forEach(element => {
    //console.log(element)
    //console.log(`\t\tbillTypeMap.put("${element[2]}","${element[1]}"}); // ${element[0]}, ${element[3]}`)

    //console.log(`\t\tBillTypeMap.${element[1]} = ${element[2]};//${element[0]}, ${element[3]}`);
    console.log(`\t\tstatic final String ${element[1].replace("-","_").replace("（","_").replace("）","_")} = "${element[2]}";//${element[0]}, ${element[3]}`);

  });
  


})
.catch(function (error) {
  console.log(error);
});
