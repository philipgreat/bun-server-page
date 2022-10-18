




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

export default function Section(props) {
    const {data}=props
    return (
      <div style={{paddingBottom:"20px"}}>
            <section>
              <table>
                {Header({data})}
                {SubHeader({data})}
                {Body({data})}
              </table>
            </section>
      </div>
    );
  }

