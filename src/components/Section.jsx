




const Header=({data})=>{

    if(!data.header){
        return null;
    }
    return  <tr><td style={{textAlign:"center"}} className='th' colSpan={3}>{data.header}</td></tr>
}

const SubHeader=({data})=>{

    if(!data.subHeader){
        return null;
    }
    return  <tr><td className='th' colSpan={3}>{data.subHeader}</td></tr>
}

const Body=({data})=>{
    
    return  <>
  {data.values.map(line=>{
      return <tr>
        {line.map(item=>{

            return <td>{item}</td>
        })}
      </tr>  
  })}
    </>
}
const wrapValue=(value)=>{
  if( !value || value.length===0 ){
    return "_";
  }
  return value;
}

const calcClass=(length, index)=>{
  
}

const calcSpan=(length, index,value)=>{

  if(length===1){
    return 4;
  }
  if(length===3){
    return 1;
  }
  if(length===2){


   if(isSingleValue(value)){
    return 2;
   }
   return 1;

  }

  return 1;


}

const buildCell=()=>{

}
const leftValue=(value)=>{
  const parts=value.split("~");
  return parts[0]
}

const rightValue=(value)=>{
  const parts=value.split("~");
  if(parts.length<2){
    return "";
  }
  return parts[1]
}
const isSingleValue=(value)=>{
  const parts=value.split("~");
  return parts?.length<2;
}
const CellItem=({value})=>{

  if(isSingleValue(value)){

    return <td colSpan={2}  style={{width:"50%"}}>{value}</td>
  }

  return <><td colSpan={1} style={{width:"35%"}}>{leftValue(value)}</td><td colSpan={1} style={{width:"15%"}}>{rightValue(value)}</td></>
  

}
export default function Section(props) {
    const {data}=props
    const {textAlign='left',minHeight="30px"}=data
    const valuesLength=data.values.length
    return (
      
      <>
      <tr style={{height:minHeight}}>

      {data.values.map((value,index)=>{
      
        if(!value || value.length===0 ){
          return <td colSpan={calcSpan(valuesLength,index,value)}>&nbsp;</td>;
        }
        if(valuesLength===1 ){
          return <td className='th' 
          style={{textAlign:textAlign}} 
          colSpan={calcSpan(valuesLength,index,value)}>{wrapValue(value)}</td>;
        }
        return <CellItem value={value}/>
        // return <><td colSpan={calcSpan(valuesLength,index,value)}
        //  style={{wordWrap:"break-word",wordBreak:"break-all",textDecoration:"none",width:"50%"}}
        //  >{leftValue(value)}
         

        //   </td>
        //   <td colSpan={calcSpan(valuesLength,index,value)}>
        //   {rightValue(value)} 
        //   </td>
        //   </>
      
      })}

      </tr>
      </>

    );
  }

