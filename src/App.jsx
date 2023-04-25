import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { rehypeTableMerge } from 'rehype-table-merge'
import remarkGfm from 'remark-gfm'

function App() {

  const txt1 =`**1. Establish roles and responsibilities**\r\n \r\nAssign responsibility and accountability for the SOQM, including:\r\n \r\n1. Ultimate responsibility and accountability.\r\n2. Operational responsibility for the SOQM as a whole.\r\n3. Operational responsibility for specific aspects of the SOQM, including:\r\n    1. Compliance with independence requirements.\r\n    2. The monitoring and remediation process.\r\n\r\n**Note:** In smaller firms, these roles and responsibilities may be assigned to a single individual. In larger firms, these roles will likely be assigned to separate individuals.\r\n\r\nComments (if any) (i.e., significant changes from previous year)`
  const txt2 =`**1. Establish roles and responsibilities**\r\n \r\nAssign responsibility and accountability for the SOQM, including:\r\n \r\na. Ultimate responsibility and accountability.\r\nb. Operational responsibility for the SOQM as a whole.\r\nc. Operational responsibility for specific aspects of the SOQM, including:\r\n    i. Compliance with independence requirements.\r\n    ii. The monitoring and remediation process.\r\n\r\n**Note:** In smaller firms, these roles and responsibilities may be assigned to a single individual. In largerA firms, these roles will likely be assigned to separate individuals.\r\n\r\nComments (if any) (i.e., significant changes from previous year)`
  const txt3 =`**1. Establish roles and responsibilities**\r\n \r\nAssign responsibility and accountability for the SOQM, including:\r\n \r\n1. Ultimate responsibility and accountability.\r\n2. Operational responsibility for the SOQM as a whole.\r\n3. Operational responsibility for specific aspects of the SOQM, including:\r\n    1. Compliance with independence requirements.\r\n    2. The monitoring and remediation process.\r\n\r\n**Note:** In smaller firms, these roles and responsibilities may be assigned to a single individual. In larger firms, these roles will likely be assigned to separate individuals.\r\n\r\nComments (if any) (i.e., significant changes from previous year)`
const listTest = [txt1,txt2,txt3]
  return (
    
    listTest.map((e)=>{
      console.log(e)
      return ( 
        <>
      <Markdown
      
      children={e}
      rehypePlugins={[rehypeRaw, rehypeTableMerge]}
      remarkPlugins={[remarkGfm]}
    />
    test
      <br></br>
    </>
       
    )
    })
    
    
  )
}

export default App
