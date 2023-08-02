import { useState } from "react";

import { useEffect } from "react";

import {Table, TableHead, TableRow,TableCell,TableBody, styled, Button} from "@mui/material";

import {getPersons, deletePerson} from "../service/api";

import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
    width : 90%;
    margin : 50px auto 0 auto;
`;


const StyledTableRow = styled(TableRow)`
    background-color: pink;
    & th {
        color: black;
        font-weight: bold;
        font-size: 18px;
        font-family: 'Times New Roman', Times, serif;
    }
`
const StyledTableBody = styled(TableRow)`
    background-color: whitesmoke;
    & td {
        color : black;
        font-family : 'Times New Roman', Times, serif;
        font-size : 16px;
    }
`


const PersonList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllPersons()

    },[])

   

    const deletePersonData = async(id) =>{
        await deletePerson(id);
        getAllPersons();
    }
    const getAllPersons = async () => {
        let response = await getPersons();
        setUsers(response?.data);
    }




    return(
        <StyledTable>
            <TableHead>
                <StyledTableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell></TableCell>
                </StyledTableRow>

            </TableHead>
            <TableBody>
                {

                    users?.map(user =>(
                        <StyledTableBody>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.phonenumber}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:10}} component ={Link} to = {`/edit/${user.id}`}>EDIT</Button>
                                <Button variant="contained"color="secondary" onClick={() => deletePersonData(user.id) }>DELETE</Button>
                            </TableCell>

                        </StyledTableBody> 
                    )
                    )


                }

            </TableBody>
        </StyledTable>
    )


}

export default PersonList;