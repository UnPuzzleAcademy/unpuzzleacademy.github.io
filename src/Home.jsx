import { redirect, useNavigate } from 'react-router';
import './styles/Home.css';

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="homePage">
        <div className="heroSection">
            <div className="left">
                <h1>Learn in-demand skills the <br/><span>Smart, Simple and Practical Way</span></h1>
                <p>
                    Live classes, free courses, projects, quizzes, and a supportive community - everything you need to learn and grow without confusion or overwhelm
                </p>
                <button className="btn" onClick={()=>{navigate('/courses')}}>
                    See all Courses
                </button>
            </div>
            <div className="heroImgSection"></div>
        </div>
    </div>
  )
}

export default Home
