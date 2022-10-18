import Section from "./Section";
import styles from "./Share.css";

import  Header  from "./Header";
import Footer from "./Footer";
const data={
  count:3,
  values:[
      ["充装开始时间：2022.08.06 14:19:44","充装结束时间：2022.08.06 14:55:35","充装时间：00:35:51"],
      ["充装人员：2022.08.06 14:19:44","充装工位：Skid1-Module1",""],
      ["检验人员：","校验结论：",""],
  ]
}


const data2={
  header:"充装信息",
  subHeader:"气体1-氧气",
  count:3,
  values:[
      ["配方名称：120-氩-真空一次","配方编码：AR-006","配方描述：120-放空-真空-100%氩"],
      ["公称压力：15Mpa","钢瓶规格：40L","批次号："],
      ["检验人员：","校验结论："],
  ]
}


const data4={
  subHeader:"气体1-氧气",
  count:3,
  values:[
      ["配方名称：120-氩-真空一次","配方编码：AR-006","配方描述：120-放空-真空-100%氩"],
      ["公称压力：15Mpa","钢瓶规格：40L","批次号："],
      ["检验人员：","校验结论："],
  ]
}


const data3={
  header:"钢瓶序列号清单",
  count:3,
  values:[
    ["GP00002","GP00002","GP00002"],
    ["GP00002","GP00002","GP00002"],
    ["GP00002","GP00002","GP00002"],
    ["GP00002","GP00002","GP00002"],
    
    
  ]
}
/*
["充装开始时间：2022.10.15 15:53:35","充装结束时间：2022.10.15 16:21:40","充装时间：00:28:05"]
["充装人员：2016","充装工位：Skid3-Module1"]
["检验人员：","校验结论："]
["产品信息"]
[""]
["配方名称：135-15CO2 85AR-散","配方编码：MIX-008","配方描述：135bar-散瓶-15%CO2 85%AR"]
["公称压力：15Mpa","钢瓶规格：40L","报告id："]
[""]
["充装信息"]
["气体1：15%CO2"]
["开始时间：15:50:45","结束时间：16:01:17","持续时间: 00:10:32"]
["起始压力：1.00 Bar","结束压力：36.27 Bar","动态目标压力：28.22 Bar"]
["环境/结束温度：20.40/26.70℃","实际精度：28.52%","目标精度：1.5%"]

["气体2：85%Ar"]
["开始时间：15:50:45","结束时间：16:01:17","持续时间: 00:10:32"]
["起始压力：1.00 Bar","结束压力：36.27 Bar","动态目标压力：28.22 Bar"]
["环境/结束温度：20.40/26.70℃","实际精度：28.52%","目标精度：1.5%"]

[""]
["钢瓶序列号清单"]
*/

const defaultReportData={
  header:{
    logo:"https://cms.think-to.com/thinktologo.png", 
    title:"充装报告(样)",
    metaData:["编号：FP20220805659","工厂："]
  },
  body:[
    {values:["充装开始时间：2022.10.15 15:53:35","充装结束时间：2022.10.15 16:21:40","充装时间：00:28:05"]},
    {values:["充装人员：2016","充装工位：Skid3-Module1"]},
    {values:["检验人员：","校验结论："]},
    {values:["产品信息"],textAlign:'center'},
    {values:[""]},

    {values:["配方名称：135-15CO2 85AR-散","配方编码：MIX-008","配方描述：135bar-散瓶-15%CO2 85%AR"]},
    {values:["公称压力：15Mpa","钢瓶规格：40L","报告id："]},
    {values:[""]},
    {values:["充装信息"],textAlign:'center'},
    {values:["气体1：15%CO2"]},
    {values:["开始时间：15:50:45","结束时间：16:01:17","持续时间: 00:10:32"]},
    {values:["起始压力：1.00 Bar","结束压力：36.27 Bar","动态目标压力：28.22 Bar"]},
    {values:["环境/结束温度：20.40/26.70℃","实际精度：28.52%","目标精度：1.5%"]},
    
    {values:["气体2：15%CO2"]},
    {values:["开始时间：15:50:45","结束时间：16:01:17","持续时间: 00:10:32"]},
    {values:["起始压力：1.00 Bar","结束压力：36.27 Bar","动态目标压力：28.22 Bar"]},
    {values:["环境/结束温度：20.40/26.70℃","实际精度：28.52%","目标精度：1.5%"]},
    {values:[""]},
    {values:["钢瓶序列号清单"]},
    {values:[""]},
    
    
  
  
  ]
}


export default function FillingPilotReport(props) {


  const {reportData=defaultReportData}=props 

  console.log("report data", JSON.stringify(reportData,null,4))
  return (
    <div className={"text"} style={{padding:"50px 50px 50px 50px ",height:"90vh"}}>
      <div style={{height:"80vh"}}>
         <Header reportData={reportData}/>
         <table>
         {

            reportData.body.map(section=><Section data={section}></Section>)

         } 
         </table>
         
         </div>
        
         <Footer/>
      
    </div>
  );
}
