import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {

    return (
        <>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                    Home
                </Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/view-task" action>
                    View Tasks
                </Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>
                    Contact
                </Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/about-us" action>
                    About Us
                </Link>
            </ListGroup>
        </>


    );



};

export default Menus;