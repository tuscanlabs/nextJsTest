import React from 'react';  
import {useQuery} from 'react-query'; 
import BasicTable from './BasicTable'

  const fetchUsers = async () => { 
    const res = await fetch('http://localhost:3000/api/users');
    return res.json();
}

function BasicTable1() {     
    const { data, status } = useQuery('users', fetchUsers)   
    console.log(data);
        return (
            <div className="App">
            <h1>React Query example with star wars API</h1>
            {status === 'error' && (
                <div> Error fetching data </div>
            )}
            {status === 'loading' && (
                <div> Loading data </div>
            )}
            {status === 'success' && (
                <BasicTable data={data}/>
            )}
            </div>
        );
}
export default BasicTable1;
