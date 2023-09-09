import { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import ViewTask from "./ViewTask";


const TaskForm = () => {

    const [showComponent, setShowComponent] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        if (inputValue.trim() == '') {
            alert("Member Id can not be blank");
        } else {
            setShowComponent(true);
        }
    };
    return (
        <>
            <Fragment>
                <h1 className="text-center my-3 py">View Assigned Task </h1>
                <Form>
                    <FormGroup>
                        <Label for="memberId"> Member Id :</Label>
                        <Input type="text" style={{ width: "400px" }} maxLength="15" value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Enter member-id here" name="memberId" id="memberId" />

                    </FormGroup>
                    <Container>
                        <Button color="success" onClick={handleClick}>View Task</Button>   
                        <Button color="warning m" className = "ml-2" >Clear</Button>
                        {showComponent && <ViewTask memberId={inputValue} />}
                    </Container>
                </Form>
            </Fragment>
        </>

    );

};

export default TaskForm;