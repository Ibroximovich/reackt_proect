 import "./trus.css"
 
 import { Img1, Img2,Img3, Img4 } from "../../assets/images"
  
  
  function Trus(){
          return (
          <section className="Trusted-section">
                <div className="container">
                    <p className="Trusted-by">Trusted by</p>
                    <div className="Trusted-imgs">
                        <img src ={Img1} alt="Site logo" width={141} height={32}></img>
                        <img src ={Img2} alt="Site logo" width={141} height={32}></img>
                        <img src ={Img3} alt="Site logo" width={141} height={32}></img>
                        <img src ={Img4} alt="Site logo" width={141} height={32}></img>
                    </div>
    
                </div>
            </section>
    )
  }

  export default Trus