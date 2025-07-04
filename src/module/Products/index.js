import Button from "../../components/Button"
import "./products.css"

function Prodcts(){
  return (
     <div className="container products">
        <div className="products-container">
            <p>PROJECTS</p>
            <h2>I bring results.<br></br> My clients are proof.</h2>
            
        </div>
      <button className="btn"><Button item ={"View all projects"}/></button>
     </div>
  )
}

export default Prodcts