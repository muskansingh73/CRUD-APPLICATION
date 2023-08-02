import axios from "axios";

const API_URL = 'http://localhost:3002/users';

export const addPersons = async(data) =>{
    try{
        return await axios.post(API_URL, data)
    }catch(error){
        console.log('error in api while calling add user', error.message);
    }
    
}

export const getPersons = async(id) =>{
    id= id || '';
    try{
        return await axios.get(`${API_URL}/${id}`);

    }catch(error){
        console.log("error while calling getUsers api",  error.message)
    }
}

export const getPerson = async(data) =>{
    try{
        return await axios.get(`${API_URL}/${data}`);

    }catch(error){
        console.log('error while calling getuser api' , error.message)
    }
}

export const editPerson = async(data, id) =>{
    try{
        return await axios.put(`${API_URL}/${id}`, data);

    }catch(error){
        console.log('error while running edituser api', error.message)
    }
}

export const deletePerson = async(id) => {
    try{
        return await axios.delete(`${API_URL}/${id}`);

    }catch(error){
        console.log('error while calling the delete api', error.message)

    }
}