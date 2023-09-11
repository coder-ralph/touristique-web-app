import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaCalendar } from 'react-icons/fa';
import { MapContainer, TileLayer } from 'react-leaflet'; // Import Leaflet components
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
// import { LatLngLiteral } from 'leaflet';

import axios from 'axios'; 

const Posts = ({ posts }) => {
  const handleShareFacebook = (url, caption) => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(caption)}`;
    window.open(shareUrl, '_blank');
  };

  const handleShareTwitter = (url, text, caption) => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text + ' ' + caption)}`;
    window.open(shareUrl, '_blank');
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Define the initial center coordinates
  const initialCenter = [51.505, -0.09]; // Replace with your desired latitude and longitude

  const [weatherData, setWeatherData] = React.useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const apiKey = 'b35692f4684e2701047e36c0ee4b49d9'; // Put your actual API key in single or double quotes
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  
  React.useEffect(() => {
    fetchWeatherData(51.505, -0.09); // Replace with your desired coordinates
  }, []);

  return (
    <div className='two-column-layout'>
      <div className='left-column'>
        {posts?.map(post => (
          <div className="posts-box" key={post.id}>
            <div className="posts-img">
              <Link to={`/article/${post.slug}`}>
                {/* Enlarge the cover image using CSS styles */}
                <div className="enlarge-cover-container">
                  <img className="enlarge-cover" src={post.coverPhoto.url} alt="" />
                </div>
              </Link>
              <div className="categories">
                {post.categories?.map(category => (
                  <Link
                    to={`/posts/${category.slug}`}
                    key={category.id}
                    className="category"
                    style={{ background: category.color.css }}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="posts-text">
              <div className="category-time">
                {post.categories?.map(category => (
                  <Link
                    to={`/posts/${category.slug}`}
                    key={category.id}
                    style={{ color: category.color.css }}
                  >
                    {category.name}
                  </Link>
                ))}
                <span className='published-time'>
                  <FaCalendar className='blue-icon' /> {formatDate(post.updatedAt)}
                </span>
              </div>

              <Link to={`/article/${post.slug}`}>
                <h3>{post.title}</h3>
              </Link>

              <p className='excerpt'>{post.description}</p>

              {/* Add "Continue Reading" button */}
              <div className="continue-reading">
                <Link to={`/article/${post.slug}`}>Continue Reading</Link>
              </div>

              <div className="share-buttons">
                <div className="share-button">
                  <button
                    className="dark-bg"
                    onClick={() => handleShareFacebook(
                      `https://touristique-web-app.vercel.app/article/${post.slug}`,
                      'Read this post.' // Short description for Facebook
                    )}
                  >
                    <FaFacebook /> Share to Facebook
                  </button>
                </div>
                <div className="share-button">
                  <button
                    className="dark-bg"
                    onClick={() => handleShareTwitter(
                      `https://touristique-web-app.vercel.app/article/${post.slug}`,
                      post.title,
                      'Read this post.' // Short description for Twitter
                    )}
                  >
                    <FaTwitter /> Share to Twitter
                  </button>
                </div>
                {/* You can add more share buttons for other platforms here */}
              </div>

              {/* Open Graph Meta Tags */}
              <meta property="og:url" content={`https://touristique-web-app.vercel.app/article/${post.slug}`} />
              <meta property="og:image" content={post.coverPhoto.url} />
              <meta property="og:title" content={post.title} />
              <meta property="og:description" content={post.description} />

              {/* Twitter Card Meta Tags */}
              <meta name="twitter:url" content={`https://touristique-web-app.vercel.app/article/${post.slug}`} />
              <meta name="twitter:image" content={post.coverPhoto.url} />
              <meta name="twitter:title" content={post.title} />
              <meta name="twitter:description" content={post.description} />
            </div>
          </div>
        ))}
      </div>

    {/* Insert the interactive Leaflet map component in the right column */}
    <div className="right-column">
        <div className="interactive-map">
          <MapContainer
            center={initialCenter} // Set the initial coordinates here
            zoom={10} // Adjust the initial zoom level
            style={{ height: '400px', width: '245%' }}
          >
            {/* Replace the URL below with your custom Antique map tile layer URL from MapTiler */}
            <TileLayer
              url="https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=ZjVzlBdPZpJMSGawYevm"
              maxZoom={19}
              attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* You can add map elements (e.g., markers) here */}
          </MapContainer>
        </div>
      </div>

      {/* Weather forecast */}
<div className="right-column">
  {weatherData && (
    <div className="weather-forecast">
      <h2>
        <img
          src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt={weatherData.weather[0].description}
        />
        Weather Forecast
      </h2>
      <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  )}
</div>

    </div>
  );
};

export default Posts;