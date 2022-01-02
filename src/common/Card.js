// Libs
import { NavLink } from 'react-router-dom';

// Constans
import { routes } from "../constans";

const Card = ({color, title, icon }) => {

    let titleChanged = title.toLowerCase().replaceAll(" ", "-");

    return (
        
        <div className="card cg-item">
            <div className="card-body text-center">
                <NavLink to={`/products/${titleChanged}`} className="link-text">
                    <i>{icon}</i>
                    <p className="card-text cg-text" style={{color: `${color}`}}>{title}</p>
                </NavLink>
            </div>
        </div>
        
    )
}

export default Card
