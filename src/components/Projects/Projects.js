import React from 'react';
import './Projects.css';
import {myprojects} from './Myprojects.js';

export default function Projects() {
    return (
        <div className="project" id="Project">
            <div className="project_div">
                <h1>Check Out My works...</h1>
                <div className='projects_wrapper'>
                    { myprojects.map((projects,index)=>{
                        return(
                        <div className='project_wrapper' key={index}>
                            <div className='img_wrapper'>
                                <img src= {projects.img} alt={projects.name}/>
                                <a className='link_github' href={projects.github} rel='noreferrer' target='_blank' >
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>

                            <div className='details_wrapper'>
                                <h4> {projects.name} </h4>
                                <a href={projects.link} rel='noreferrer'  className='project_link' target='_blank'>Live website</a>
                            </div>
                        </div>
                         )
                        })}
                </div>
            </div>
        </div>
                        


                
                
        )
}
