import { Img10, Img11, Img8, Img9 } from "../../assets/images"
import { ArrowRight } from "../../assets/icons"
import "./img.css"

function Img() {
    return (
        <section>
            <div>
                <div className="img">
                    <div>
                        <img src={Img8} alt="logo" width={486} height={305}></img>
                        <div className="imgs">
                            <p>Branding</p>
                            <strong>Soulful Rebrand</strong>
                            <a href="#">
                                <span>View Project</span>
                                <ArrowRight />
                            </a>
                        </div>
                    </div>
                    <div>
                        <img src={Img9} alt="logo" width={486} height={305}></img>
                        <div className="imgs">
                            <p>Product Design</p>
                            <strong>Datadash Product design</strong>
                            <a href="#">
                                <span>View Project</span>
                                <ArrowRight />
                            </a>
                        </div>
                    </div>
                    <div>
                        <img src={Img10} alt="logo" width={486} height={305}></img>
                        <div className="imgs">
                            <p>Web Design</p>
                            <strong>Maize Website Design</strong>
                            <a href="#">
                                <span>View Project</span>
                                <ArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container btn">
                <img src={Img11} alt="logo" width={54} height={54}></img>
                <img src={Img11} alt="logo" width={54} height={54}></img>
            </div> */}
        </section>
    )
}

export default Img