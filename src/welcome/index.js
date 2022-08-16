import React, {useState, useEffect} from 'react';
import "../styles/home.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Typography } from '@mui/material';
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import {userName} from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const dispatch = useDispatch()
  const unique_id = uuid();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    localStorage.clear();
  }, []);

  

  const handleUser = () => {
    console.log(name);
    const payload = {
      userName: name,
      id: unique_id,
    };
    sessionStorage.setItem("user",JSON.stringify(payload)  )
    
    dispatch(userName(payload));
    navigate("/i-chart");
  }


  return (
    <div className="homeWrap">
      <Box
        component="span"
        sx={{ p: 2, border: "1px dashed grey", textAlign: "center" }}
      >
        <Typography variant="h3" component="h2">
          Welcome to iChart
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          mt={2}
          gutterBottom
          component="div"
        >
          Enter your name to start chart
        </Typography>

        <div className="namewrap">
          <TextField
            required
            id="outlined-required"
            label="Required"
            mt={2}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <Button onClick={handleUser}>Submit</Button>
        </div>
      </Box>
    </div>
  );
}

export default HomePage