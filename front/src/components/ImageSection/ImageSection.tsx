import { useState, useEffect } from 'react';
import { ImageSectionContainer } from './styled.components';

interface ImageSectionProps {
  step?: number;
}

const ImageSection = ({ step }: ImageSectionProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
  const [step6Image] = useState('/step6DesktopView.png');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1023);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload Step6 image
  useEffect(() => {
    const img = new Image();
    img.src = step6Image;
  }, [step6Image]);

  return (
    <ImageSectionContainer>
      {isMobile ? (
        <>
          <img className="section-image-default" src="/sectionImgMobile.png" alt="CustomerScoops Logo" />
          <img className="logo-image" src="/logoMobile.png" alt="CustomerScoops Logo" />
        </>
      ) : (
        <>
          {step === 6 ? (
            <img className="section-image-step6" src={step6Image} alt="CustomerScoops Logo for Step 6" />
          ) : (
            <img className="section-image-default" src="/sectionImgDesktop.png" alt="CustomerScoops Logo Default" />
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