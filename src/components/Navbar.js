import React from 'react'
import { NavLink, Link } from "react-router-dom";

import profile_url from '../media/profile.png';
import { SidebarItem } from './SidebarItem';
import '../css/Navbar.css';
import * as IoIcons from 'react-icons/io';


export default function Header({ sidebar, setSidebar }) {

    return (
        <header className='header'>
            <div>
                <h3 className='name'>FINFO</h3>

            </div>

            <div className='nav-menu-container'>
                <ul className='nav-menu-items' >
                    {SidebarItem.map((item, index) => {
                        return (
                            <li key={index} className={item.cName} >
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                    <li key={"a"} className={"nav-text"} >
                        <a href='https://crispenchisina.shinyapps.io/stock_app_project/'>
                            {<IoIcons.IoMdBonfire />}
                            <span>{'Stock Analysis'}</span>
                        </a>

                    </li>

                </ul>
            </div>

            <NavLink to="/" className="x"><img src={profile_url} alt="profile" align-self="center" width='150px' height='150px' border-radius='50%' /></NavLink>
        </header >
    )
}
