 import Logo from "../../assets/images/header-logo.svg"

 import {ArrowRight} from "../../assets/icons"
 import NavItem from "../../components/Navlist"
 import "./header.css"

function header(){
    const navList = [
        {
            id:1,
            title:"About",
            icon:null
        },
        {
            id:2,
            title:"Services",
            icon:null
        },
        {
            id:3,
            title:"Projects",
            icon:null
        },
        {
            id:4,
            title:"Blog",
            icon:null
        },
        {
            id:1,
            title:" Book a call",
            icon:<ArrowRight/>
        }
    ]
         
    return (
          <header className="site-header">
          <div className="container header">
              <a href ="/">
                  <img src ={Logo} alt="Site logo" width={195} height={19}></img>
              </a>
              <nav>
                  {navList.map(item =><NavItem key={item.id} item = {item}/>  )}
              </nav>
          </div>
      </header>

    )
}
export default header
