import { Badge } from "@material-ui/core";
 import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";

import "./navbar.scss"


const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="wrapper">
                <div className="left">
                    <div className="language">Fr</div>
                    <div className="searchContainer">
                        <input type="text" placeholder="Rechercher"/>
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </div>
                </div>
                <div className="center">
                    <h1 className="logo">Madame Des Alpilles</h1>
                </div>
                <div className="right">
                    <a href="" className="menuItem">Se connecter</a>
                    <a href="" className="menuItem">S'inscrire</a>
                    <a href="" className="menuItem">
                         <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                        </Badge>

                    </a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;