import axios from 'axios';
import './Image.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ImageDetails() {
  const [apiLink] = useState('https://api.slingacademy.com/v1/sample-data/photos?&limit=20');
  const [imageData, setImageData] = useState([]);

  async function DownloadImage() {
    try {
      const response = await axios.get(apiLink);
      const getData = response.data.photos.map((img) => ({
        id: img.id,
        title: img.title,
        image: img.url,
        description: img.description
      }));
      setImageData(getData);
    } catch (error) {
      console.error("Error fetching the images:", error);
    }
  }

  useEffect(() => {
    DownloadImage();
  }, []);

  return (
    <>
      <div className="image-gallery">
        {imageData.map((item) => (
          <Link to={`/imgDetails/${item.id}`} key={item.id}>
            <img
              className="imageCss"
              src={item.image}
              alt={item.title}
            />
          </Link>
        ))}
      </div>
      <div className="Button">
        <button className="Previous">Previous</button>
        <button className="Next">Next</button>
      </div>
    </>
  );
}

export default ImageDetails;
