import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { StarIcon, SearchIcon, ArrowUpDownIcon } from "@chakra-ui/icons";

export const Sidebar = () => {
    return (
        <List color="white" fontSize="1em" spacing={4} p="5px">
            <ListItem>
                <NavLink to="/">
                    <ListIcon as={StarIcon} color="white" />
                    Dashboard
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink to="ramal">
                    <ListIcon as={SearchIcon} color="white" />
                    Prediksi
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink to="klasemen">
                    <ListIcon as={ArrowUpDownIcon} color="white" />
                    Klasemen
                </NavLink>
            </ListItem>
        </List>
    );
};
