import React from 'react'
import { Button } from '@mui/material'
import {useHistory} from 'react-router-dom'
import { useState } from 'react';

export default function Forgetpush() {
    const history=useHistory();
    const [loading, setloading] = useState(false)
  
    
    const handlelogin=()=>{
        setloading(true);
       history.push("/login");
        setloading(false);
    }
    return (
        <div>
            <h4 style={{color:'green'}}>Reset link has been sent successfully on your email!</h4>
          <Button color="primary"  variant="contained" onClick={handlelogin} disabled={loading}>
           Log in
          </Button>
        </div>
    )
}
