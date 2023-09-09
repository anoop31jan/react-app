import React from "react";
import { Card, CardBody } from "reactstrap";
import pms from './images/pms.jpg';


const Home = () => {

    return (
        <>


            <Card>

                <CardBody>

                    <img src={pms} alt="PMS Image" />
                    <p />
                    Welcome to our Project Management System!

                    Our Project Management System is a comprehensive platform designed to streamline your project management processes and enhance collaboration within your teams. Whether you're a small startup or a large enterprise, our system offers a wide range of features and tools to help you efficiently plan, execute, and track your projects from start to finish.

                </CardBody>

            </Card>

        </>


    );

};

export default Home;