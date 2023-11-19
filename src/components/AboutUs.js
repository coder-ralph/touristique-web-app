import React, { useEffect, useState } from 'react';
import antiqueImage from '../images/province-of-antique.jpg';
import middleImage from '../images/antique-mountain.jpg';
import middleImage2 from '../images/antique-capitol.jpg';

const AboutUs = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`about-us ${scrolling ? 'scrolling' : ''}`}>
      <h2 className="about-title">History <span className="antique-title"> of Antique</span></h2>
      <p style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', color: '#7f71ff' }}>“Where the Mountains Meet the Sea”</p>

      {/* first image */}
      <div className="about-image">
        <img src={antiqueImage} alt="Top Section" title="Welcome to Antique Province: “Where Mountains Meet the Sea”." />
      </div>

      <p>
        Antique, formally the Province of Antique, is a province in the Western Visayas area of the Philippines. San Jose de Buenavista, the largest town in Antique, serves as its capital.
        The town of "Hamtic," which once served as the province's capital, gives Antique its name. The term "hamtic" describes the numerous, huge red ants that were present.
      </p>

      {/* second image */}
      <div className="about-image">
        <img src={middleImage2} alt="Middle Section" title="Antique Province Capitol" />
      </div>

      <p>
        Historians believe that the Negritos or Atis tribe was the earliest to settle on Panay Island. Oral history passed
        down as "Maragtas" says that ten "datus" or small tribal leaders fled persecution in a Borneo town called Odtohan by
        a tyrannical ruler named Makatunaw. Led by Datu Put, the ten data sailed north with their families and communities,
        landing in Panay after leaving Borneo.
      </p>

      {/* third image */}
      <div className="about-image">
        <img src={middleImage} alt="Middle Section" title="Mountain" />
      </div>

      <p>
        Panay Island was then divided into three parts: Hantik, Akean, and Irong-Irong. Irong-Irong became Iloilo, Akean became
        present-day Aklan and Capiz, and Hantik (also called Hamtik or Hamtik) in ancient times. Hantik was named after the large
        black ants found on the island called "hantik-hantik".
      </p>

      <p>
        Hantik's sakupi was given to Datu Sumakwel, one of the ten data, who according to tradition was a master swordsman and
        the wisest. These three sakupi were later governed as a political unit called Madja-asin Kedatuan, also under the leadership
        of Datu Sumakweli. Datu Sumakwel founded the town of Malandog, which is considered the first Malay settlement in the country.
        Malandog is now a barangay in the current municipality of Hamtic, named after a historical sakup.
      </p>
    </div>
  );
}

export default AboutUs;
