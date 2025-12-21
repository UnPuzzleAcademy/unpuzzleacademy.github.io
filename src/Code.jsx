import React, { useState } from 'react';
import './styles/Code.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
const Code = ({header, language, children}) => {
    let [copyState, setCopyState] = useState(['bi bi-copy', false])
    const customStyle = {
        margin:"0px"
    };
    async function copyCode(e){
        e.preventDefault();
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(children);
            setCopyState(['bi bi-check', true]);
            setTimeout(()=>{
                setCopyState(['bi bi-copy', false]);
            },1000);
        } catch (err) {
            alert('Something went Wrong!');
        }
    }  
  return (
    <div className='code-block'>
        <div className="code-header">
            <span>{header}</span>
            <button onClick={(e)=>{copyCode(e)}}><i className={copyState[0]} disabled={copyState[1]}></i>&nbsp;&nbsp;Copy</button>
        </div>      
        <SyntaxHighlighter language={language} style={vscDarkPlus} customStyle={customStyle}>
          {children}
        </SyntaxHighlighter>
    </div>
  )
}

export default Code
