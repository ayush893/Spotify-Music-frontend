import React from 'react';
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from "./DataLayer";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

function Sidebar() {
    const [{ playlists  }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img 
            className="sidebar__logo"
            src = "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""/>
            <SidebarOption title="Home" Icon={HomeIcon}/> 
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Music Library" Icon={LibraryMusicIcon}/>

            <br />
            <strong className="sidebar__title">
                PLAYLISTS
            </strong>
            <hr />
            {console.log("it is my play;ists",playlists)}
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}

            {/* <SidebarOption title="Hip hop" />
            <SidebarOption title=" Rock" />
            <SidebarOption title="Classic" /> */}
        </div>
    )
}

export default Sidebar
