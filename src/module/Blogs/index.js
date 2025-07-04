import { ArrowRight } from "../../assets/icons"

import "./blogs.css"

function Blogs() {
    return (
        <div className="design-container ">
            <div className="container blogs-container">
                <div className="blog">
                    <strong>Blogs</strong>
                    <h2>Latest Blogs</h2>
                    <a href="#">
                        <span>View all</span>
                        <ArrowRight />
                    </a>
                </div>
                <div>
                    <div >
                        <div className="design">
                            <span>April 16, 2021</span>
                            <span>6 mins</span>
                            <p>Design tips for designers, that cover everything you need</p>
                            <a href="#">
                                Read the article
                                <ArrowRight />
                            </a>
                        </div>
                        <div className="design design1">
                            <span>April 16, 2021</span>
                            <span>3 mins</span>
                            <p>How to build rapport with your web design clients</p>
                            <a href="#">
                                Read the article
                                <ArrowRight />
                            </a>
                        </div>
                        <div className="design design1">
                            <span>April 16, 2021</span>
                            <span>6 mins</span>
                            <p>Top 6 free website mockup tools 2021</p>
                            <a href="#">
                                Read the article
                                <ArrowRight />
                            </a>
                        </div>
                        <div className="design design2">
                            <span>April 16, 2021</span>
                            <span>6 mins</span>
                            <p>Logo design trends to avoid in 2021</p>
                            <a href="#">
                                Read the article
                                <ArrowRight />
                            </a>
                        </div>
                        <div className="design design2">
                            <span>April 16, 2021</span>
                            <span>7 mins</span>
                            <p>22 best UI design tools</p>
                            <a href="#">
                                Read the article
                                <ArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs