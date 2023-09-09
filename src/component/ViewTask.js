import { ACCESSOR_TYPES } from "@babel/types";
import React from "react";
import { useEffect, useState } from "react";
import { Card } from "reactstrap";
import "../taskTable.css"


const ViewTask = (props) => {

    const [data, setData] = useState(null);
    const [status, setStatus] = useState(200);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const userName = 'admin';
                //const pwd = 'adminPass';
                console.log("member-id " + props.memberId);
                //const basicAuth = btoa('${userName}:${pwd}');
                //const headers = {
                 //   Authorization: 'Basic ${basicAuth}',

                //};
                const memberId = props.memberId;
                const url = "http://localhost:8083/taskservice/api/v1/member/list/" + memberId + "/taskDetails";
                console.log(" URL " + url);
                const response = await fetch(url, {
                    headers: {
                        'Authorization': 'Basic dXNlcjp1c2VyUGFzcw=='
                    }
                })
                const data = await response.json();
                const status = response.status;
                console.log("status " + status);
                setStatus(status);
                console.log(data);
                console.log(" json data " + data);
                setData(data.tasks);


            }
            catch (error) {
                console.error("Error fetching data ", error);
            }

        };

        fetchData();

    }, []);

    if (status != 200) {
        return (
            <div>
                <Card color="primary">
                    No Data found with this memberId : {props.memberId}<br />
                    Please enter valid member-id.
                </Card>
            </div>
        );

    }

    return (

        <div>
            {


                data ? (
                    <div >
                        <Card color="primary">

                            <h1> </h1><p></p>
                        </Card>
                        <table className="table table-bordered" width="800px">
                            <tr>
                                <th>Member ID</th>
                                <th>Task Name</th>
                                <th>Deliverables</th>
                                <th>Task Stard Date</th>
                                <th>Task End Date</th>
                                <th>Project Start Date</th>
                                <th>Project End Date</th>,
                                <th>AllocationPercentage</th>
                            </tr>




                            {data.map((item, index) => (


                                <tr data-index
                                    ={index}>
                                    <td> {item.memberId} </td>
                                    <td> {item.taskName} </td>
                                    <td> {item.deliverables} </td>
                                    <td> {item.taskStartDate} </td>
                                    <td> {item.taskEndDate} </td>
                                    <td> {item.projectStartDate} </td>
                                    <td> {item.projectEndDate} </td>
                                    <td> {item.allocationPercentage} </td>
                                </tr>
                            ))}


                        </table>
                    </div>

                ) : (<p>Loading data .... </p>)
            }

        </div>

    );



};
export default ViewTask;