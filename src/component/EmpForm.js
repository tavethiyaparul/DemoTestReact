import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { saveData } from "../api/empApi.js"
import { useDispatch } from "react-redux";
import './styles.css'

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        top: "15%",
        marginBottom: "5px",
        "& > *": {
            width: theme.spacing(45),
            height: theme.spacing(70)
        }
               
    }
}));

export default function EmpForm() {
    const classes = useStyles();
    
    const dispatch = useDispatch();
    let [input, setInput] = useState({
        empName: "",
        post: "",
        salary: "",
        phoneNo: "",
        address: "",
        gender: ""
    });
    const { empName, post, salary, phoneNo, address, gender } = input
    const inputEvent = (e) => {
        const { name, value } = e.target
        setInput((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const clearAll = () => {
        setInput({
            empName: "",
            address: "",
            post: "",
            salary: "",
            gender: "",
            phoneNo: "",
        })

    }
    const SubmitBtn = async () => {
        console.log(input);
        dispatch({ type:'EMP_DETAILS_REQUEST' })
        const emp = { empName, post, address, phoneNo, salary, gender }
        let res = await saveData(emp)
        console.log("respone", res);

        if (res.data.success === true) {
            dispatch({ type:'EMP_DETAILS_SUCCESS', payload: res.data })
            alert("data save successfully")
        }
        else {
            alert("Data Does not save")
        }

        clearAll()
    };

    return (
        <div className={classes.root}>
            <Paper elevation={15}>
                <div className="form_container">
                    <h1> Emplooyee Details </h1>
                    <TextField
                        className="input"
                        label="Emp Name"
                        type="text"
                        value={input.empName}
                        name="empName"
                        onChange={inputEvent}
                                          />
                    <br />
                    <RadioGroup
                        className="radio_group"
                        row
                        name="gender"
                        defaultValue="Female"
                        value={input.gender || true}
                        onChange={inputEvent}
                        style={{ fontSize: 18 }}
                    >
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    </RadioGroup>

                    <TextField
                        className="input"
                        label="Post"
                        type="text"
                        value={input.post}
                        name="post"
                        onChange={inputEvent}
                    />
                    <TextField
                        className="input"
                        label="Salary"
                        type="number"
                        value={input.salary}
                        name="salary"
                        onChange={inputEvent}

                    />
                    <TextField  
                        className="input"
                        label="PhoneNo"
                        type="number"
                        value={input.phoneNo}
                        name="phoneNo"
                        onChange={inputEvent}
                    />
                    <br />
                    <br />
                    <TextareaAutosize
                        className="input"
                        aria-label="empty textarea"
                        minRows={3}
                        placeholder="Address"
                        style={{ fontSize: 18 }}
                        value={input.address}
                        name="address"
                        onChange={inputEvent}
                    />
                    <br />
                    <br />
                    <Button onClick={SubmitBtn} variant="contained" color="secondary">
                        Submit
                    </Button>
                </div>
            </Paper>
        </div>
    );
}