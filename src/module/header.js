 import Logo from "../assets/images/header-logo.svg"

function header(){
    return (
          <header className="site-header">
          <div className="container header">
              <a href ="/">
                  <img src ={Logo} alt="Site logo" width={195} height={19}></img>
              </a>
              <nav>
                  <a href="/">About</a>
                  <a href="/">Services</a>
                  <a href="/">Projects</a>
                  <a href="/">Blog</a>
                  <a href="/">
                  Book a call
                  </a>
              </nav>
          </div>
      </header>

    )
}
export default header
