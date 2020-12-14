import React , {useState , useEffect}  from 'react' ;
import axios from 'axios';



import {PortfolioSection , PortfolioTitle , PortfolioList , PortfolioItem , Image , ImageWrapper , Overlay , Span , OverlaySpan} from './style.js'


const Portofolio = () =>  {

  const [ images , setImages ] = useState([]) 

  useEffect ( () => {
    axios.get('js/data.json').then(res => {setImages(res.data.portfolio)}  )

  }, [] ) 

  const PortofolioImages = images.map( (imageItem) => {
    return(
      <ImageWrapper key={imageItem.id}>
      <Image src={imageItem.image} alt=""/>
      <Overlay>
          <OverlaySpan>
              Show Image
          </OverlaySpan>
      </Overlay>
      </ImageWrapper>

    )
  })

    return (
      <PortfolioSection>
      <PortfolioTitle ><Span>My</Span> Portfolio</PortfolioTitle>
      <PortfolioList>
          <PortfolioItem active>All</PortfolioItem>
          <PortfolioItem >HTML</PortfolioItem>
          <PortfolioItem >Photoshop</PortfolioItem>
          <PortfolioItem >Wordpress</PortfolioItem>
          <PortfolioItem >Mobile</PortfolioItem>
      </PortfolioList>
      
      <div class="box">
        {PortofolioImages}
      </div>
      
  </PortfolioSection>
    );
}

export default Portofolio;