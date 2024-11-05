import { ImageSectionContainer } from './styled.components'

interface ImageSectionProps {
  step?: number
}

const ImageSection = ( {step}: ImageSectionProps ) => {
  return (
    <ImageSectionContainer>
      <img src="/sectionImgMobile.png" width="365" height="213" alt="CustomerScoops Logo" />
      <img className='section-image' src="/logoMobile.png" width="100" height="36.44" alt="CustomerScoops Logo" />
      <div>
        <span className='step'>{ step || "01"}</span>
        <span className='line'></span>
        <span>08</span>
      </div>
    </ImageSectionContainer>
  )
}

export default ImageSection