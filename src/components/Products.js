import React from 'react';
import breadsImage from '../images/products/breads.jpg'; // Import the image
import raisinbreadImage from '../images/products/raisinbread.jpg';

const Products = () => {
  const imageUrls = [
    breadsImage,  // Use the imported image
    raisinbreadImage,
    // Add more image URLs as needed
  ];

  return (
    <div className="product">
      <h2 style={{ textAlign: 'center' }}>
        Products of every<br />
        <span className="municipality">Municipality</span>
      </h2>

      <p className="centered-justified-paragraph">
        Antique, formally the Province of Antique, is a province in the Western Visayas area of the Philippines. San Jose de Buenavista, the largest town in Antique, serves as its capital.
        The town of "Hamtic," which once served as the province's capital, gives Antique its name. The term "hamtic" describes the numerous, huge red ants that were present.
      </p>

      <div className="image-gallery">
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Product ${index + 1}`} />
        ))}
      </div>

      <style jsx>{`
        .product {
          text-align: center;
        }

        .municipality {
          color: red;
        }

        .image-gallery {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .image-gallery img {
          width: 100%;
          max-width: 300px;
          margin: 10px;
        }

        @media (max-width: 768px) {
          .image-gallery img {
            max-width: 100%;
          }
          
          .centered-justified-paragraph {
            text-align: justify;
            margin: 20px 10px; /* Adjust the margin-top value here */
          }
        }

        .centered-justified-paragraph {
          max-width: 800px;
          margin: 20px auto; /* Adjust the margin-top value here */
          padding: 0 20px;
        }
      `}</style>
    </div>
  );
}

export default Products;
