import { NavLink } from "react-router-dom";

const LinkButton = ({children, path, styles}) => {
    return (
        <NavLink className={`link-button ${styles}`} to={path}>
            {children}
        </NavLink>
    );
}

export default LinkButton
