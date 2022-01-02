// Libs
import { NavLink } from "react-router-dom";

// Common Components
import { LinkButton } from "../common";

// Constans
import { paths } from "../constans";



const Header = () => {
    return (
        <div className="d-flex flex-column align-items-center home-header-container">
            {/* Title */}
            <h1 className="home-header-title">Sell Your Products Here...</h1>

             {/* Subtitle */}
             <p className="home-header-subtitle">
                 You Can Buy Or Sell Laptops, Houses, Tools, Games, Other Things ...
             </p>

              {/* Buttons */}
             <div className="d-flex align-items-center home-header-link">
                <LinkButton path={paths.PRODUCTS_ROUTE} styles="main-color white-background">
                    Browse
                </LinkButton>
             </div>
        </div>
    )
}

export default Header
