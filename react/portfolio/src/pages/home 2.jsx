import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Box from '@mui/joy/Box';

function Home() {
    return (
        <Card sx={{ width: 320 }}>
            <Box
                sx={{
                    width: '100%', 
                    maxWidth: 200, 
                    aspectRatio: '1',
                    mx: 'auto', 
                    minHeight: 120,
                    maxHeight: 200,
                }}
            >
                <Box
                    component="img"
                    src="https://avatars.githubusercontent.com/u/45531020?s=400&u=bfb4a77fa6798f9d08e1376f86063e6232e3281d&v=4"
                    alt="profile"
                    loading="lazy"
                    sx={{
                        borderRadius: '50%',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>
            <CardContent orientation="vertical">
                <Typography level="h2" sx={{ textAlign: 'center' }}>
                    Max Bushell
                </Typography>
                <Typography level="body-md" sx={{ textAlign: 'center' }}>
                    **description**
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Home;
