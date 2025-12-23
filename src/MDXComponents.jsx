import Code from './Code.jsx';
export const MDXComponents = {
    code:({className, children})=>{
       if(!className){
        return <code style={{padding:"3px", backgroundColor:"#e6e6e6"}} children={children}/>
       }
       let [language, header] = className?.split(',');
       language = language.replace('language-', '');
       return <Code language={language} header={header} children={children}/>
    }
};