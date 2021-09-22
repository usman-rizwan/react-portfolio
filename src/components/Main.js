import React from 'react';
import Cap from '../assests/graduation-cap.png';
import Send from '../assests/send.png';
import Monitor from '../assests/monitor.png';
import Brush from '../assests/paintbrush.png';
import html from '../assests/html5.png';
// import Banner from '../assests/send-banner.png';
const Main = () => {
    return (
        <div className="container-fluid main">
            <div className="row">
                <div className="row p-5">
                    <div className="col-md-12 text-center">
                        <h1 className="head">My Projects</h1>
                        <span className="h1-span">-------- <img src={Cap} alt="Logo" />--------</span>
                    </div>
                    <div className="row cen-row justify-content-center">
                        <div className="col-md-4">
                            <div className="card" style={{ marginTop: '50px' }}>
                                <div className="card-body">
                                    <img src={Send} alt="Logo " width="30" />
                                    <h5 className="card-title">Learning In Front Of The Screen</h5>
                                    <p className="card-text">Possibility of remote learning is a great convenience for parents and children. It
                                        saves a lot of time and money.</p>
                                    <a href="https://react-definiton.netlify.app" target="_blank"><button className="btn btn-primary text-center" > View Project </button></a >
                                </div>
                            </div>
                            <div className="card" style={{ marginTop: '50px' }}>
                                <div className="card-body">
                                    <img src={Monitor} alt="Logo " width="30" />
                                    <h5 className="card-title">Computer Skills</h5>
                                    <p className="card-text">This is a great way to improve your technical computer literacy. The child works on
                                        his intuition in the use of programs other than games.</p>
                                        <a href="https://usman-stop-watch.netlify.app" target="_blank"><button className="btn btn-primary text-center" > View Project </button></a >
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 text-center" style={{ margin: 'auto 0px' }}>
                            <img src="https://ae01.alicdn.com/kf/HTB16mV9aInrK1RkHFrdq6xCoFXaP.jpg" width="250" style={{ borderRadius: '50px 0px 50px 0px' }} />
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <img src={html} alt="Logo " width="30" />
                                    <h5 className="card-title">Learning Is The Best Experience</h5>
                                    <p className="card-text">Video lessons are conducive to an individualized path of cooperation between the
                                        teacher and the child. The student is not distracted by peers, thanks to which he focuses on the
                                        acquisition of knowledge in the maximum way, the learning process is effective, and the video-lesson
                                        becomes much more fruitful compared to the standard teaching mode.</p>
                                        <a href="https://usman-resturant-web.netlify.app" target="_blank"><button className="btn btn-primary text-center" > View Project </button></a >
                                </div>
                            </div>
                            <div className="card" style={{ marginTop: '50px' }}>
                                <div className="card-body">
                                    <img src={Brush} alt="Logo " width="30" />
                                    <h5 className="card-title">Competence Development</h5>
                                    <p className="card-text">Individual lessons have a positive effect on the development of your child's social
                                        skills. The teacher encourages the student to interact and talk actively.</p>
                                        <a href="https://usman-calculator.netlify.app" target="_blank"><button className="btn btn-primary text-center" > View Project </button></a >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;