import "../Services/Tab.css"

function Tab (props){
    return(
        <div className="services__tab">
            <img src={props.icon} alt="" />
            <p>{props.desc}</p>
        </div>
    )
}

export default Tab;