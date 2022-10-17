import Section from "./Section";
import styles from "./Share.css";

import  Header  from "./Header";
const data={
  count:3,
  values:[
      ["充装开始时间：2022.08.06 14:19:44","充装结束时间：2022.08.06 14:55:35","充装时间：00:35:51"],
      ["充装人员：2022.08.06 14:19:44","充装工位：Skid1-Module1",""],
      ["检验人员：","校验结论：",""],
  ]
}


const data2={
  header:"产品信息",
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

export default function App(props) {
  return (
    <div className={"text"} style={{padding:"50px 50px 50px 50px "}}>
      
       <Header></Header>
         <Section data={data}></Section>
         <Section data={data2}></Section>
         <Section data={data3}></Section>
         
       
      
    </div>
  );
}
