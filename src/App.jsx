import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { rehypeTableMerge } from 'rehype-table-merge'
import remarkGfm from 'remark-gfm'

function App() {
const markdown ={  
  description: `**1. Es*tablish&nbsp;  role*s and responsibilities**\r\n \r\nAssign responsibility and accountability for the SOQM, including:\r\n \r\n1. Ultimate responsibility and accountability.\r\n2. Operational responsibility for the SOQM as a whole.\r\n3. Operational responsibility for specific aspects of the SOQM, including:\r\n&nbsp; &nbsp; 1. Compliance&nbsp; &nbsp; &nbsp; with inde**pend**ence requi**r*emen*t**s.\r\n&nbsp; &nbsp; 2. The monitoring and remediation process.\r\n\r\n**Note:** In smaller firms, these roles and responsibilities may be assigned to a single individual. In larger firms, these roles will likely be assigned to separate individuals.\r\n\r\nComments (if any) (i.e., significant changes from previous year)`
}
  return (
    <Markdown
      children={markdown.description}
      rehypePlugins={[rehypeRaw, rehypeTableMerge]}
      remarkPlugins={[remarkGfm]}
    />
  )
}

export default App
