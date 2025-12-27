import React, { useState } from 'react'
import './styles/Unit.css'
import { redirect, useNavigate, useParams } from 'react-router';
import { courses } from './courses';
import { modules } from './modules';
import { MDXComponents } from './MDXComponents';
import { MDXProvider } from '@mdx-js/react';
const UnitDropdown = ({units, moduleTitle, unitId, courseId, moduleId, navigate})=>{
    let unitArr = [];
    for(let unit in units){
       unitArr.push({unitId:unit, title:units[unit]['title']})
    }
    return(
        <div className="unit-dropdown" onClick={(e)=>{e.stopPropagation()}}>
            <div className="triangle"></div>
            <div className="module-title">{moduleTitle}</div>
            {unitArr.map(unit=>{
                return(
                    <div onClick={()=>{navigate(`/unit/${courseId}/${moduleId}/${unit.unitId}`)}} className={`unit ${unitId==unit.unitId?'current-unit':''}`} key={unit.unitId}><div></div>{unit.title}</div>
                )
            })}
        </div>
    )
}
const Unit = () => {
  let navigate = useNavigate();
  const {courseId, moduleId, unitId} = useParams();
  const [unitDropdown, setUnitDropdown] = useState(false);
  if(courseId in courses && courses[courseId]['modules'].includes(moduleId) && unitId in modules[moduleId]['units']){
    let Unit = modules[moduleId]['units'][unitId]['Unit'];
    let totalUnits = Object.keys(modules[moduleId]['units']).length;
    return (
    <div className="unit-page" onClick={()=>{unitDropdown && setUnitDropdown(false)}}>
    <div className="units-bar">
      <div onClick={(e)=>{e.stopPropagation();setUnitDropdown(!unitDropdown)}}>Unit {unitId} of {totalUnits} <i className={unitDropdown?"bi bi-chevron-up":"bi bi-chevron-down"}></i></div>
    </div>
    
    <div className="unit-container">
      {unitDropdown && <UnitDropdown units={modules[moduleId]['units']} moduleTitle={modules[moduleId]['title']} unitId={unitId} moduleId={moduleId} courseId={courseId} navigate={navigate}/>}
      <MDXProvider components={MDXComponents}>{<Unit/>}</MDXProvider>
    </div>
    </div>
    );
  }else{
    return(
        <div>Not found</div>
    )
  }
}

export default Unit
