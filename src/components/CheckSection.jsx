




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

export default function CheckSection(props) {
    const {data}=props
    const {textAlign='left',minHeight="15px"}=data
    const valuesLength=data?.items?.length
    return (
      
      <>
      
      <tr style={{height:minHeight}}>
        <td>{valuesLength}</td>

      </tr>
      </>

    );
  }

