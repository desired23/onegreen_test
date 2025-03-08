import { Card, CardMedia, FormControl, FormHelperText, Grid2, Input, InputLabel, TextField } from '@mui/material';
import './App.css'
import './MuiClassNameSetup';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [amount, setAmount] = useState(1);
  const [images, setImages,] = useState([]);
  const fetchImages = async () => {
    try {
      const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${amount}`);
      setImages((prevImages) => [...prevImages, ...response.data.message]);
    } catch (error) {
      console.error('Error fetching dog images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchImages();
  };
const handleClearImages = (e) => {
  e.preventDefault()
  setImages([])
}
  return (
<Grid2 padding={2}
>
<form className='flex items-center gap-4 justify-self-start'onSubmit={handleSubmit} >
      <TextField
        label="Amount"
        variant="outlined"
        size='small'
        margin="normal"
        defaultValue={1}
        type='number'
        required
        onChange={(e) => setAmount(e.target.value)}
        inputProps={{min:1}}
      />
        <Button size="medium"          
        variant="contained"
        color="primary"
        type="submit">LOAD🐶</Button> 
        <Button size="medium"          
        variant="outlined"
        color="secondary"
        type="reset"
        onClick={handleClearImages}
        >CLEAR</Button> 

    </form>
<Grid2 alignItems={'center'} container spacing={2} sx={{ justifyContent: 'left', padding: 2 }}>
  {images.map((img, index) => (
    <Grid2 item xs={5} sm={5} md={4} lg={2.4} key={index}           sx={{
    }}>
      <Card   sx={{ borderRadius: 1, boxShadow: 3, paddingX: '16px', paddingY: '0', overflow: 'hidden', height: '300px', width: '300px', backgroundColor: "lightgray", display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
        <CardMedia
          component="img"
          image={img}
          alt="Dog"
          sx={{
            overflowClipMargin: 'content-box',
            objectFit: "cover", 
            // aspectRatio: "1 / 1", 
            overflow: 'clip',
            cursor: 'pointer'
          }}
        />
      </Card>
    </Grid2>
  ))}
</Grid2>

</Grid2>


  )
}

export default App
