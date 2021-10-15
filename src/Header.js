import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import './Header.css';
import { useDataLayerValue } from "./DataLayer";

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon /> 
                <input
                placeholder ="Seerch for Artists, Song, etc"
                type = "text" 
                />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <h4> {user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header