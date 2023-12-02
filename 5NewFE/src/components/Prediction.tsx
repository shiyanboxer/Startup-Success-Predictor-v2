import { useState } from 'react';
import { Button, TextField, Box, CircularProgress, Typography } from '@mui/material';
import axios from 'axios';

const API_URL = 'https://startup-success-predictor-api.herokuapp.com/predict';

export default function Prediction() {
    const [totalFunding, setTotalFunding] = useState('');
    const [foundingYear, setFoundingYear] = useState('');
    const [loading, setLoading] = useState(false);
    const [predictionResult, setPredictionResult] = useState("");

    const makePrediction = async ({ foundingYear, totalFunding }: { foundingYear: string, totalFunding: string }) => {
        try {
            setLoading(true);
            const payload = {
                founding_year: foundingYear,
                total_funding: totalFunding,
            };
            const response = await axios.post(
                API_URL,
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            setPredictionResult(response.data.response === 1 ? 'SUCCESSFUL' : 'UNSUCCESSFUL');
        } catch (error) {
            console.error('API call error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 5, marginTop: 10 }}>
            <TextField
                required
                label="Founding year"
                helperText="Enter a number between 1900 - Present year"
                type="number"
                value={foundingYear}
                onChange={(e) => setFoundingYear(e.target.value)}
            />
            <TextField
                required
                label="Total funding in USD"
                helperText="Enter a number between 0 - 10,000,000,000"
                value={totalFunding}
                onChange={(e) => setTotalFunding(e.target.value)}
            />
            <Button
                variant='contained'
                onClick={() => makePrediction({ foundingYear, totalFunding })}
                disabled={loading}
            >
                {loading ? <CircularProgress size={24} /> : 'Make a Prediction'}
            </Button>
            <Box style={{ marginTop: 10 }}>
                <Typography variant="h6">Prediction Result:</Typography>
                <Typography variant="h3">{"Successful"}</Typography>
            </Box>
        </Box>
    );
}
