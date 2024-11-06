import { ImageSectionContainer } from './styled.components'

interface ImageSectionProps {
  step?: number
}

const ImageSection = ( {step}: ImageSectionProps ) => {
  return (
    <ImageSectionContainer>
      <img className='section-image' src="/sectionImgMobile.png" alt="CustomerScoops Logo" />
      <img className='logo-image' src="/logoMobile.png" alt="CustomerScoops Logo" />
      <div>
        <span className='step'>0{ step || "01"}</span>
        <span className='line'></span>
        <span>06</span>
      </div>
    </ImageSectionContainer>
  )
}

export default ImageSection