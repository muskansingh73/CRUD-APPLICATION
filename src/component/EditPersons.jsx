import {useState, useEffect} from "react";


import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";

import {useNavigate, useParams} from "react-router-dom";

import {getPerson, editPerson} from "../service/api";



const Container = styled(FormGroup)`
    width : 50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top:20px;
        
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


const EditPersons = () => {

    const[user, setUser] = useState(initialValues);
    const navigate = useNavigate();

    const { id } = useParams();


    useEffect(() =>{
        getPersonData();

    }, [])

    const getPersonData = async() => {
        let response = await getPerson(id)
        setUser(response.data);
        
    }
    
    

    const onValueChange = (e) => {
        // console.log(e.target.name , e.target.value)
        setUser({...user, [e.target.name]:e.target.value})
        console.log(user)
    }

    const addPersonDetails = async() =>{
        await editPerson(user,id);
        navigate('/all')

    }

    return(
        <Container>
            <Typography variant="h5">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange ={(e) => onValueChange(e)} name = "name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name ="username" value = {user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input onChange ={(e) => onValueChange(e)} name = "phonenumber" value ={user.phonenumber}/>
            </FormControl>
            <FormControl>
                <InputLabel>E-Mail</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "email" value ={user.email}/>
            </FormControl>
            <FormControl>
                <Button onClick={() => addPersonDetails()} variant="contained">EDIT USER</Button>
            </FormControl>
        </Container>
    )
}

export default EditPersons;
