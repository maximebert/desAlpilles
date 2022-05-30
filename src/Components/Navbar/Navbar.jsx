import { Badge } from "@material-ui/core";
 import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";

import "./navbar.scss"


const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
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
                    <a href="/"><h1 className="logo">Madame Des Alpilles</h1></a>
                </div>
                <div className="right">
                    <a href="/connexion" className="menuItem">Se connecter</a>
                    <a href="/inscription" className="menuItem">S'inscrire</a>
                    <a href="/panier" className="menuItem">
                         <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                        </Badge>
                        </a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;