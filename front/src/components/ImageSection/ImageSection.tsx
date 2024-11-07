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
          <img
            className="section-image-default"
            src="/sectionImgMobile.png"
            alt="CustomerScoops Logo"
            loading="lazy"
          />
          <img 
            className="logo-image" 
            src="/logoMobile.png" 
            alt="CustomerScoops Logo"
            loading="lazy"
          />
        </>
      ) : (
        <>
          {step === 6 ? (
            <img
              className="section-image-step6"
              src="/step6DesktopView.png"
              alt="CustomerScoops Logo for Step 6"
              loading="lazy"
            />
          ) : (
            <img 
              className="section-image-default"
              src="/sectionImgDesktop.png" 
              alt="CustomerScoops Logo Default"
              loading="lazy"
            />
          )}
        </>
      )}

      <div className={`${step === 6 ? 'container-step6' : ''}`}>
        <span className="step">0{step || "01"}</span>
        <span className="line"></span>
        <span>06</span>
      </div>
    </ImageSectionContainer>
  );
};

export default ImageSection;