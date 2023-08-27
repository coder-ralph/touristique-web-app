import React from 'react';
import antiqueImage from '../images/antique.JPG'; // path for the first image
import middleImage from '../images/mountain.jpg'; // path for the second image
import middleImage2 from '../images/capitol.jpg'; // path for the third image

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2 className="about-title">About <span className="antique-title"> Antique</span></h2>

      {/* first image */}
      <div className="about-image">
        <img src={antiqueImage} alt="Top Section" />
      </div>

      <p>
      Antique, formally the Province of Antique, is a province in the Western Visayas area of the Philippines. San Jose de Buenavista, the largest town in Antique, serves as its capital.
      The town of "Hamtic," which once served as the province's capital, gives Antique its name. The term "hamtic" describes the numerous, huge red ants that were present.
      </p>

      {/* second image */}
      <div className="about-image">
        <img src={middleImage2} alt="Middle Section" />
      </div>

      <p>
      Historians believe that the Negritos or Atis tribe was the earliest to settle on Panay Island. Oral history passed
      down as "Maragtas" says that ten "datus" or small tribal leaders fled persecution in a Borneo town called Odtohan by
      a tyrannical ruler named Makatunaw. Led by Datu Put, the ten data sailed north with their families and communities,
      landing in Panay after leaving Borneo.
      </p>

      <p>
      Maragtie's account is said to be dated to 1212 to coincide with the transition of the Srivijayan kingdom to Majapahit,
      but there is no written evidence for this and no surviving claims linking the account to Borneo. However, the story of
      Maragtas must be considered part of the local history of the nation. Upon arrival, Malay intelligence met Ati chief Datu
      Marikudo and his wife Maniwantiwan. They offered the chief a salak (wide-brimmed hat) (an exaggeration, according to
      today's locals, that it was pure gold), which contained, among other things, a gold necklace, earrings, bracelets and
      jewelry that they had worn when they fled Borneo as a sign of respect gifts of pearls and beautiful clothes and to buy
      land for them to live on.
      </p>

      <p>
      Datu Marikudo responded to the  generosity of the information by giving the lowlands to the Malays and moved to the mountains
      with his Ati tribe because the mountains are sacred to them. The legacy of that landing is celebrated every year during the
      Binirayan festival in ancient times.
      </p>
      
      {/* third image */}
      <div className="about-image">
        <img src={middleImage} alt="Middle Section" />
      </div>

      <p>
      Panay Island was then divided into three parts: Hantik, Akean and Irong-Irong. Irong-Irong became Iloilo, Akean became
      present-day Aklan and Capiz, and Hantik (also called Hamtik or Hamtik) in ancient times. Hantik was named after the large
      black ants found on the island called "hantik-hantik".
      </p>

      <p>
      Hantik's sakupi was given to Datu Sumakwel, one of the ten data, who according to tradition was a  master swordsman and
      the wisest. These three sakupi were later governed as a political unit called Madja-asin Kedatuan, also under the leadership
      of Datu Sumakweli. Datu Sumakwel founded the town of Malandog, which is considered  the first Malay settlement in the country.
      Malandog is now a barangay in the current municipality of Hamtic,  named after a historical sakup.
      </p>

    </div>
  );
}

export default AboutUs;
