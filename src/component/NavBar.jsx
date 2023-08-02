
import {AppBar , Toolbar, Typography, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background:aquamarine;    

`
const Tab = styled(NavLink)`
    font-size:20px;
    margin-right: 45px;
    color: brown;
    text-decoration:none;
    font-family: 'Times New Roman', Times, serif;
    font-weight:bold;
    cursor : pointer;
    :hover{
        color: lightcoral;
    }
`
const NavBar = () => {
    return(
        <Header position='static'>
            <Toolbar>
                
                 
                 <Tab to = '/all'>Person-List</Tab>
                 <Tab to ='/add'>Person-Add</Tab>
                 <Tab to = '/'>Person-Home</Tab>
            </Toolbar>
        </Header>
    )

}

export default NavBar;