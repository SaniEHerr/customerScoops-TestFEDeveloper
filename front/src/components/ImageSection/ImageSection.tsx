import { useState, useEffect } from 'react';
import { ImageSectionContainer } from './styled.components';

interface ImageSectionProps {
  step?: number;
}

const ImageSection = ({ step }: ImageSectionProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1023);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ImageSectionContainer>
      {isMobile ? (
        <>
          <img className="section-image" src="/sectionImgMobile.png" alt="CustomerScoops Logo" />
          <img className="logo-image" src="/logoMobile.png" alt="CustomerScoops Logo" />
        </>
      ) : (
        <img className="section-image" src="/sectionImgDesktop.png" alt="CustomerScoops Logo" />
      )}

      <div>
        <span className="step">0{step || "01"}</span>
        <span className="line"></span>
        <span>06</span>
      </div>
    </ImageSectionContainer>
  );
};

export default ImageSection;
