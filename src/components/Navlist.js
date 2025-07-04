const  Navlist = ({item}) => {
    return (
         <a href="/">
            <span>{item.title}</span>
            {item.icon}
        </a>
    )
}

export default Navlist