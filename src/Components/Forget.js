import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Input, TextField } from '@mui/material';
import insta from '../Assets/insta.png'
import { makeStyles } from '@mui/styles';
import { Alert } from '@mui/material';
import ClouduploadIcon from '@material-ui/icons/CloudUpload';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext'
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { database, storage } from '../firebase';
import {useParams} from 'react-router-dom'
import './Forget.css'

export default function Forget() {


  const usestyle = makeStyles({
    text1: {
      color: 'grey',
      textAlign: 'center',

    },
    card2: {
      height: '5vh',
      marginTop: '2%'
    }
  })

  const classes = usestyle();
  const [email, setemail] = useState('')
  const [error, seterror] = useState('')
  const [loading, setloading] = useState(false)
  const history = useHistory();
  const {forget}=useContext(AuthContext)

  // const forgetpush=useParams();
  // useEffect(()=>{
  //   <h4>Reset Link has been sent!</h4>
  // },[forgetpush])

  const handleForget = async () => {
        try {
            seterror('');
            setloading(true);
            let res = await forget(email);
            history.push('/forgetpush')
           
        }
        catch (error) {
            seterror(error.message);
            setTimeout(() => {
                seterror('')
            }, 2000);
            setloading(false)
        }
  }

  return (
    <div className="signupWrapper">
      <div className="signupCard">
        <Card variant="outlined">
          <div className="insta-logo">
            <img src={insta} alt="insta" />
          </div>
          <CardActionArea>
            <CardContent>
             
              {error != '' && <Alert severity="error">{error}</Alert>}
              <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e) => setemail(e.target.value)} />
             
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button color="primary" fullWidth={true} variant="contained" margin="dense" disabled={loading} onClick={handleForget}>
              RESET PASSWORD
            </Button>
          </CardActions>
          <CardContent>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
}
