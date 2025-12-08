import React from 'react'
import Navbar from './Navbar'
import './styles/Courses.css'
import hero from './assets/images/hero.png';

const Courses = () => {
  return (
    <div className="coursesPage">
      <div className="headingSection">
        <div>
            <h1 className="heading">UnPuzzle Academy Courses</h1>
            <p>Level up your career with the most up-to-date tech courses online. From complete beginner to getting hired, or upskill to advance your career.</p>
        </div>
        <img src={hero}/>
      </div>
    </div>
  )
}

export default Courses
