import { Link, useNavigate } from 'react-router';
import './styles/Home.css';
import resource1 from './assets/images/resource1.png';
import resource2 from './assets/images/resource2.png';
import resource3 from './assets/images/resource3.png';
import resource4 from './assets/images/resource4.png';



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

        <div>
            <div className="free-resources-section">
                <h2>Start Learning for Free</h2>
                <div className="free-resources">
                    <div>
                        <div className="resource">
                            <img src={resource1}/>
                        </div>
                        <div>
                            <p>Free Courses</p>
                            <p>Short beginner-friendly courses to build strong fundamentals.</p>
                            <Link to={"/courses"} state={{type:'free'}}>Explore free courses</Link>
                        </div>
                    </div>
                    <div>
                        <div className="resource">
                            <img src={resource2}/>
                        </div>
                        <div>
                            <p>Cheatsheets</p>
                            <p>Summaries of important topics - perfect for exams and quick revision.</p>
                            <Link>Download Cheatsheets</Link>
                        </div>  
                    </div>
                    <div>
                        <div className="resource">
                            <img src={resource3}/>
                        </div>
                        <div>
                            <p>Practice Quizzes</p>
                            <p>Test your concepts and improve weak areas instantly.</p>
                            <Link>Take a Quiz</Link>
                        </div>  
                    </div>
                    <div>
                        <div className="resource">
                            <img src={resource4}/>
                        </div>
                        <div>
                            <p>Guided Projects</p>
                            <p>Simple step-by-step project guides to build real work you can showcase.</p>
                            <Link>Start a Project</Link>
                        </div>  
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="paid-section">
                <h2>Popular Paid Courses</h2>
                <div className="paid-courses">
                    <div className="paid-course" onClick={()=>{navigate("/course/1")}}>
                        <div className='thumbnail'>
                            <img src="https://fueler.io/storage/users/timeline_image/1659279686-jy2p84ykvimsekzsjsx3.png"/>
                        </div>
                        <div className="paid-course-info">
                            <p>Full Stack Web Development</p>
                            <p>Learn Vue.js 3 (the latest major version) and Firebase from the ground-up to create amazing, interactive, content-driven & dynamic websites.</p>
                            <div className="paid-course-footer">
                                <span><i className="bi bi-camera-video"></i> Live</span>
                                <span>₹2000/-</span>
                            </div>
                        </div>
                    </div>
                    <div className="paid-course" onClick={()=>{navigate('/course/2')}}>
                        <div className='thumbnail'>
                            <img src="https://fueler.io/storage/users/timeline_image/1659279686-jy2p84ykvimsekzsjsx3.png"/>
                        </div>
                        <div className="paid-course-info">
                            <p>Full Stack Web Development</p>
                            <p>Learn Vue.js 3 (the latest major version) and Firebase from the ground-up to create amazing, interactive, content-driven & dynamic websites.</p>
                            <div className="paid-course-footer">
                                <span><i className="bi bi-camera-video"></i> Live</span>
                                <span>₹2000/-</span>
                            </div>
                        </div>
                    </div>
                    <div className="paid-course" onClick={()=>{navigate('/course/3')}}>
                        <div className='thumbnail'>
                            <img src="https://fueler.io/storage/users/timeline_image/1659279686-jy2p84ykvimsekzsjsx3.png"/>
                        </div>
                        <div className="paid-course-info">
                            <p>Full Stack Web Development</p>
                            <p>Learn Vue.js 3 (the latest major version) and Firebase from the ground-up to create amazing, interactive, content-driven & dynamic websites.</p>
                            <div className="paid-course-footer">
                                <span><i className="bi bi-camera-video"></i> Live</span>
                                <span>₹2000/-</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/courses">See all <i className="bi bi-arrow-right-circle"></i></Link>
            </div>
        </div>
    </div>
  )
}

export default Home
