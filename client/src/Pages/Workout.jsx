import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Workout() {
    const { id } = useParams();
    const [workout, setWorkout] = useState({});

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/workout/${id}`);
            setWorkout(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container maxWidth="lg">
            <Typography variant="body1" color="initial">
                {workout.name}
            </Typography>
       
            {Array.isArray(workout.exercises) && workout.exercises.map((exercise, index) => (
                <div key={index}>
                    <Typography variant="body1" color="initial">
                        {exercise.name}
                    </Typography>
                </div>
            ))}
        </Container>
    );
}

export default Workout;
