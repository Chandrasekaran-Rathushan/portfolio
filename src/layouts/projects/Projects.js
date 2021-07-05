import React from 'react'
import './projects.css';

const Projects = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div className='project-container'>
            <div className='project-cards-container'>
                {
                    cards.map((card) => (
                        <div id={card} className="card" style={{width: '18rem'}}>
                            <img src="https://dz2cdn1.dzone.com/storage/temp/12721356-pic-html-on-page.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/projects" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default Projects;
