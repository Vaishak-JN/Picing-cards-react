import "./style.css"
// import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Card = ({ plan, price, features }) => {
    return (
        <div className="card">
            <p className="plan">{plan}</p>
            <p><span className="price">${price}</span>/month</p>
            <hr></hr>
            <ul>
                {features.available.map(f => <li><span><i class="fa-solid fa-check"></i></span> {f}</li>)}
                {features.notAvailable && features.notAvailable.map(f => <li style={{ opacity: 0.7 }}><span style={{ opacity: 0.7 }}><i class="fa-solid fa-xmark"></i> </span> {f}</li>)}
            </ul>
            <button className="btn">BUTTON</button>
        </div>
    )
}


export default Card