
import {Col,Row} from '../layouts/FlexLayout'

const data={
    header:"产品信息",
    count:3,
    values:[
        ["编号：FP20220805659"],
        ["工厂："],
       
    ]
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
    //const {data}=props
    return (
      <div style={{paddingBottom:"20px"}}>
            <Row>
                <Col>


                </Col>
                <Col>
                    <div style={{fontSize:"50px"}}>
                        充装报告
                    </div>
                    
                </Col>
                <Col>
                <table>

                   <Body data={data} />

                </table>
                    
                </Col>


            </Row>
            
      </div>
    );
  }
