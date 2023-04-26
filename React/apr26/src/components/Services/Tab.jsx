import "../Services/Tab.css"

function Tab (props){
    return(
        <div className="services__tab">
            <i>{props.icon}</i>
            <p>{props.desc}</p>
        </div>
    )
}

export default Tab;