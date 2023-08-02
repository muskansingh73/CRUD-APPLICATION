
 import {useState} from "react";


import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";

import {useNavigate} from "react-router-dom";

import {addPersons} from "../service/api";



const Container = styled(FormGroup)`
    }
    & > h5{
        font-family:'Times New Roman', Times, serif;
        font-weight: bold;
        text-align:center;
        font-size: 32px;

    }
`;
const initialValues = {
    name : '',
    username : '',
    phonenumber : '',
    email : ''

}


const PersonAdd = () => {

    const[user, setUser] = useState(initialValues);
    const navigate = useNavigate();
    
    

    const onValueChange = (e) => {
        // console.log(e.target.name , e.target.value)
        setUser({...user, [e.target.name]:e.target.value})
        console.log(user)
    }

    const addPersonDetails = async() =>{
        await addPersons(user);
        navigate('/all')

    }

    return(
        <Container>
            <Typography variant="h5">Add Users</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange ={(e) => onValueChange(e)} name = "name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name ="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input onChange ={(e) => onValueChange(e)} name = "phonenumber" />
            </FormControl>
            <FormControl>
                <InputLabel>E-Mail</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "email"/>
            </FormControl>
            <FormControl>
                <Button onClick={() => addPersonDetails()} variant="contained">ADD USER</Button>
            </FormControl>
        </Container>
    )
}

export default PersonAdd;