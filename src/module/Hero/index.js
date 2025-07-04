 import { ArrowRight } from "../../assets/icons"
import Bro from "../../assets/images/img.png"
import Button from "../../components/Button"
 import "./hero.css"

function section() {
    return (
          <section className="hero-section">
                <div className="container site-hero">
                    <div className="site-div">
                        <h1 className="section-h1"><span className="section-span">I design products<br></br></span>that delight and inspire people.</h1>
                        <p className="section-p">Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.</p>
                        <div className="section-btns">
                             <button className="btn"><Button item ={"Book a call"}/></button>
                            <a href ="#">Download CV
                                <ArrowRight/>
                            </a>
                        </div>
                    </div>
                      <img src ={Bro} alt="Site logo" width={500} height={595}></img>
                </div>
            </section>
    )
}
export default section
