import React, { useState } from 'react';
import styles from './Offer.module.css'; 
import image1 from '../../assets/photo-1504060765228-f97d1772ff9e.avif';
import image2 from '../../assets/photo-1541701494587-cb58502866ab.avif';
// import image3 from '../../assets/photo-1504674900247-0877df9cc836 (1).avif';

const Offer = () => {
  const [currentImage, setCurrentImage] = useState(image1);

  const changeImage = (newImage) => {
    setCurrentImage(newImage);
  };

  return (
    <div>
    <div className={styles.offerContainer} style={{ backgroundImage: `url(${currentImage})` }}>
      <div className={styles.textOverlay}>
        <h1>Veggie Friendly Eateries</h1>
        <p>Try Now</p>
      </div>
    </div>
    <div className={styles.imageSelector}>
        <div className={styles.circle} onClick={() => changeImage(image1)}></div>
        <div className={styles.circle} onClick={() => changeImage(image2)}></div>
        {/* <div className={styles.circle} onClick={() => changeImage(image3)}></div> */}
      </div>
    </div>
  );
};

export default Offer;