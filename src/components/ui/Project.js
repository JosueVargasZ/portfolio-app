import React, { useEffect, useState } from 'react'
import { ProjectModal } from './ProjectModal';

export const Project = ({ name, url, repository_url, thumbnail, poster, desc}) => {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if(showModal){
            document.body.classList.add('stop-scrolling');
        } else{
            document.body.classList.remove('stop-scrolling');
        }
    }, [showModal]);

    return (
        <div className="project-card">
            <figure>
                <img src={ thumbnail } alt="" />
                <figcaption>
                    <h3 className="project-title">{ name }</h3>
                    <p>{ desc.slice(0,100) }...</p>
                    <button onClick={ ()=> setShowModal(true)}>Read more <i className="fas fa-info-circle"></i></button>
                </figcaption>
            </figure>
            {
                (showModal) && 
                    <ProjectModal 
                        setShowModal={ setShowModal } 
                        name={name}
                        url={ url }
                        repository_url={ repository_url } 
                        poster={ poster } 
                        desc={ desc }/>
            }
        </div>
    )
}
