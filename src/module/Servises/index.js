import "./servisec.css"

import { Img5, Img6, Img7 } from "../../assets/images"

function Servises(){
    return(
            <section className="Services-section1">
                <div className="container">
                    <div className="Services-section">
                        <strong className="Services">Services</strong>
                         <h2>Design that solves problems, one product at a time.</h2>
                    </div>
                    <div className="containers-wrapper">
                        <div className="container-div">
                            <img src ={Img5} alt="Site logo" width={70} height={70}></img>
                            <strong className="Services-strong">What I can do for you</strong>
                            <p className="container-p">Faster, better products that your users love. Here's all the services I provide:</p>
                            <div className="Design-container">
                                <span></span>
                                <p>Design Strategy</p>
                            </div>
                            <div className="Design-container">
                                <span></span>
                                <p>Web and Mobile App Design</p>
                            </div>
                            <div className="Design-container">
                                <span></span>
                                <p>Front-end Development</p>
                            </div>
                        </div>
                        <div className="container-div">
                            <img src ={Img6} alt="Site logo" width={70} height={70}></img>
                            <strong className="Services-strong">Applications I'm fluent in</strong>
                            <p className="container-p">Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.</p>
                            <div className="Design-container">
                                <span></span>
                                <p>Sketch</p>
                            </div>
                            <div className="Design-container">
                                <span></span>
                                <p>Webflow</p>
                            </div>
                            <div className="Design-container">
                                <span></span>
                                <p>Figma</p>
                            </div>
                        </div>
                        <div className="container-div">
                            <img src ={Img7} alt="Site logo" width={70} height={70}></img>
                            <strong className="Services-strong">What you can expect</strong>
                            <p className="container-p">I design products that are more than pretty. I make them shippable and usable.</p>
                            <div className="Design-container">
                                <span></span>
                                <p>Clean and functional</p>
                            </div>
                            <div className="Design-container">
                                <span></span>
                                <p>Device and user friendly</p>
                            </div>
                            <div className="Design-container">
                                <span></span>
                                <p>Efficient and maintainable</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    )
}

export default Servises