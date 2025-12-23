import React from 'react'
import { useParams } from 'react-router'
import './styles/Course.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Code from './Code';
import InlineCode from './InlineCode';
import { MDXProvider } from '@mdx-js/react';
import Test from './mdx/test.mdx';
import {MDXComponents} from './MDXComponents';
//import SyntaxHighlighter from 'react-syntax-highlighter';
// Choose a style (e.g., docco, monokai, atomOneDark)
//import { defaultStyle, github, githubGist, googlecode, monokai, stackoverflowLight, vs, vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Course = () => {
  const {courseId} = useParams();
  return (
    <div className="unit-container">
      <MDXProvider components={MDXComponents}><Test/></MDXProvider>
    </div>
  )
}

export default Course
