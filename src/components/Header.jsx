
import {Col,Row} from '../layouts/FlexLayout'



const Body=({metaData})=>{

    
    
    return  <>
    
   
  {metaData.map(line=>{

      return <tr key={line}><td key={line}> {line}</td></tr>  

  })}
    </>
}


export default function Section(props) {
    //const {data}=props
    const {reportData}=props
    //border:;
    const tdStyle={width:"33%",borderCollapse:"collapse",border:"0"}
    //style={{borderCollapse:"collapse"}}
    return (
      <div style={{paddingBottom:"20px"}}>
            <table cellSpacing="0" cellPadding="0" style={{border:"0"}} ><tr>
                <td style={tdStyle}>
                <img width="40px" src={reportData.header.logo} />
                </td>
                <td style={tdStyle}>
                    <div style={{fontSize:"30px",textAlign:"center"}}>
                        {reportData.header.title}
                    </div>
                </td>
                <td style={tdStyle}>
                <table>
                   <Body metaData={reportData.header.metaData} />
                </table>
                </td>

                </tr>
            </table>
            
      </div>
    );
  }


/*


export default function Section(props) {
    //const {data}=props
    const {reportData}=props

    return (
      <div style={{paddingBottom:"20px"}}>
            <Row>
                <Col>
                <img width="40px" src={reportData.header.logo} />
                </Col>
                <Col >
                    <div style={{fontSize:"30px",textAlign:"center"}}>
                        {reportData.header.title}
                    </div>
                </Col>
                <Col>
                <table>
                   <Body metaData={reportData.header.metaData} />
                </table>
                </Col>


            </Row>
            
      </div>
    );
  }



*/