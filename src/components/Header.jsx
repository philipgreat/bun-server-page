
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
