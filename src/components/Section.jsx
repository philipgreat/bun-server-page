




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

const calcSpan=(length, index)=>{

  if(length===1){
    return 3;
  }
  if(length===3){
    return 1;
  }
  if(length===2){

    if(index===0){
      return 1;
    }
    if(index===1){
      return 2;
    }

  }

  return 1;


}

export default function Section(props) {
    const {data}=props
    const {textAlign='left',minHeight="15px"}=data
    const valuesLength=data.values.length
    return (
      
      <>
      <tr style={{height:minHeight}}>

      {data.values.map((value,index)=>{
      
        if(!value || value.length===0 ){
          return <td colSpan={calcSpan(valuesLength,index)}>&nbsp;</td>;
        }
        if(valuesLength===1 ){
          return <td className='th' 
          style={{textAlign:textAlign}} 
          colSpan={calcSpan(valuesLength,index)}>{wrapValue(value)}</td>;
        }
        return <td colSpan={calcSpan(valuesLength,index)}>{wrapValue(value)}</td>
      
      })}

      </tr>
      </>

    );
  }

