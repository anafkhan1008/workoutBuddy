import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'

import { Paper, Button } from '@mui/material';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/all');
            setData(response.data); // Accessing the data property from the response
            console.log(response.data); // Logging the data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <Navbar />
            {data.map((item) => (
                <Paper key={item._id} maxWidth="lg" sx={{background : '#4db5d1' , m : 1 , p : 2 }} >
                    <Typography variant="caption" color="initial">{new Date(item.date).toLocaleDateString()}</Typography><br />
                    <Typography variant="caption" color="initial">{new Date(item.date).toLocaleTimeString()}</Typography>
                    <Typography variant="h3" color="initial">{item.name}</Typography>
                    <Typography variant="h3" color="initial">{item.description}</Typography>
                    <Typography variant="h3" color="initial">{item.duration}</Typography>
                    <Button variant="contained" color="primary" href={`/workout/${item._id}`}>
                      View
                    </Button>
                </Paper>
            ))}
        </div>
    );
}

export default Home;
