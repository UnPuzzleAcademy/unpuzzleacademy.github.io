import React, { useState } from 'react'
import './styles/Courses.css'
import hero from './assets/images/hero.png';
import { useLocation } from 'react-router';

const Courses = () => {
  const location = useLocation();
  let {type} = location.state || {};
  let [courseType, setCourseType] = useState(type??'paid');
  return (
    <div className="coursesPage">
      <h1>Our Courses</h1>
      <div className="courseTypeSection">
        <p className={courseType=='paid'?'active':''} onClick={()=>setCourseType('paid')}>Paid Courses</p>
        <p className={courseType=='free'?'active':''} onClick={()=>setCourseType('free')}>Free Courses</p>
      </div>
      <div></div>
      <div></div>
    </div>
    // <div className="coursesPage">
    //   <div className="headingSection">
    //     <div>
    //         <h1 className="heading">UnPuzzle Academy Courses</h1>
    //         <p>Practical, beginner-friendly courses for engineering students who want real skills, projects, and confidence 💪🚀</p>
    //     </div>
    //     <img src={hero}/>
    //   </div>
    // </div>
  )
}

export default Courses
