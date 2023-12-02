import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Startup Success Predictor
      </Typography>
      <Typography variant="body1" component="h1" gutterBottom>
        This web application leverages machine learning and business principles to predict the success of startups based on common characteristics.
      </Typography>
    </>
  );
}
