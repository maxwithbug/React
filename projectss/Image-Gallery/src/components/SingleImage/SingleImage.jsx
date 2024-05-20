import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './Single.css'

function SingleImage() {
  const { id } = useParams(); // Get the ID from the URL params
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        setImage(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching the image");
        setLoading(false);
      }
    }
    fetchImage();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='single-div'>
      <div className='card'>
        <img src={image.photo.url} alt={image.title}/>
        <div>
          <h1>{image.photo.title}</h1>
          <p>{image.photo.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleImage;
