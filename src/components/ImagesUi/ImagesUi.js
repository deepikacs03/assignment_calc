import React,{useState,useEffect} from 'react';
import { Grid } from '@material-ui/core';
import UserInfo  from './UserInfo';

function ImagesUi (){
    const [users,setUsers]=useState([]);
    const [page, setPage] = useState();

    useEffect (()=>{
         fetch('https://reqres.in/api/users?page=2')
                .then(res=>res.json())
                .then(res=> setUsers(res.data))
                .catch(err=>console.log(err,"error"))
    },[])
    
    return(
        <Grid container direction="row"
            justify="center"
            alignItems="center"
          >
            <h3>The beauty of the material Ui</h3>

            <Grid container styling={{padding:'24px'}}>
                {users.map(users=>
                     <Grid 
                     key={users.id}
                     item xs={12} sm={6} lg={4} md={4} xl={4}>
                     <UserInfo 
                     email={users.email} 
                     firstname={users.first_name}
                     lastname={users.last_name}
                     avatar={users.avatar}/>
                 </Grid>
                )}
               

            </Grid>
        </Grid>
    )
}
export default ImagesUi;