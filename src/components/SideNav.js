import React, {useState} from 'react';

import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import HomeIcon from '@material-ui/icons/Home';
import {Drawer, List, ListItem, ListItemText} from '@material-ui/core/';
import {makeStyles} from '@material-ui/core/styles';

const navBars = [{text: "Home", link: "/", icon: <HomeIcon />}, {text: "My Team", link: "/fantasy-team", icon: <PeopleIcon />}, {text: "Search Player", link: "/search-players", icon: <SearchIcon />}, {text: "Match Calender", link: "/match-calender", icon: <EventAvailableIcon />}];

const useStyles = makeStyles({
    hamburger: {
        position: "fixed",
        top: 20,
        right: 20,
        backgroundColor: "#3f51b5",
        color: "white",
        borderRadius:5,
        cursor: "pointer",
        zIndex: 100
    },
    item: {
        cursor: "pointer",
        color: "white",
        backgroundColor: "#3f51b5",
        marginTop: 5,
        marginBottom: 5,
    }
})

const SideNav = () => {
    const classes = useStyles();
    const [state, setState] = useState(false);
    return (
        <div className="sidenav">
            <MenuIcon className={classes.hamburger} onClick={() => setState(!state)} />
            <Drawer anchor="right" open={state} onClose={() => setState(false)}>
                <List>
                    <ArrowForwardIcon className={classes.item} onClick={() => setState(false)} />
                    {navBars.map(nav => {
                        return <Link onClick={() => setState(false)} style={{textDecoration: "none"}} to={nav.link}>
                            <ListItem className={classes.item}>
                                <ListItemText primary={nav.text} />
                                {nav.icon}
                            </ListItem>
                        </Link>
                    })}
                </List>
            </Drawer>
        </div>
    )
}

export default SideNav;
