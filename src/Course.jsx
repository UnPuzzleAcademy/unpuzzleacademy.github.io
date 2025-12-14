import React from 'react'
import { useParams } from 'react-router'

const Course = () => {
  const {courseId} = useParams();
  return (
    <div>
      {courseId}
    </div>
  )
}

export default Course
