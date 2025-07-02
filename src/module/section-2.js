 import img1 from "../assets/images/logo-img-1.png"
 import img2 from "../assets/images/logo-img-2.png"
 import img3 from "../assets/images/logo-img-3.png"
 import img4 from "../assets/images/logo-img-4.png"

function section2() {
    return (
          <section className="Trusted-section">
                <div className="container">
                    <p className="Trusted-by">Trusted by</p>
                    <div className="Trusted-imgs">
                        <img src ={img1} alt="Site logo" width={141} height={32}></img>
                        <img src ={img2} alt="Site logo" width={141} height={32}></img>
                        <img src ={img3} alt="Site logo" width={141} height={32}></img>
                        <img src ={img4} alt="Site logo" width={141} height={32}></img>
                    </div>
    
                </div>
            </section>
    )
}
export default section2
