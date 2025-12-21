import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
const InlineCode = ({children}) => {
  const customStyle = {
        margin:"0px",
        display:'inline',
        padding:"3px",
        backgroundColor:"#e6e6e6"
    };  
  return (
    <SyntaxHighlighter style={prism} customStyle={customStyle}>
        {children}
    </SyntaxHighlighter>
  )
}

export default InlineCode
