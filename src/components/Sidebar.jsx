import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { StarIcon, SearchIcon, ArrowUpDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const Sidebar = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    const linkStyles = {
        color: "white",
        fontSize: "1em",
        spacing: 4,
        p: "5px",
        fontWeight: "bold",
    };

    const activeLinkStyles = {
        color: "#165a72",
    };

    return (
        <List {...linkStyles}>
            <ListItem>
                <NavLink
                    to="/"
                    onClick={() => handleLinkClick(0)}
                    style={activeLink === 0 ? activeLinkStyles : {}}
                >
                    <ListIcon as={StarIcon} color="white" />
                    Dashboard
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink
                    to="ramal"
                    onClick={() => handleLinkClick(1)}
                    style={activeLink === 1 ? activeLinkStyles : {}}
                >
                    <ListIcon as={SearchIcon} color="white" />
                    Prediksi
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink
                    to="klasemen"
                    onClick={() => handleLinkClick(2)}
                    style={activeLink === 2 ? activeLinkStyles : {}}
                >
                    <ListIcon as={ArrowUpDownIcon} color="white" />
                    Klasemen
                </NavLink>
            </ListItem>
        </List>
    );
};
