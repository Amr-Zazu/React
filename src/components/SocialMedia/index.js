import React , {useEffect , useState}  from 'react' ;
import axios from 'axios'

import {SociaMedia,Social,Icon,SocialDesc,Span,SpanInfo} from './style.js' ;

const SocialMedia = () =>  {
  const [ icons , setIcons ] = useState([]) 

  useEffect ( () => {
    axios.get('js/data.json').then(res => {setIcons(res.data.social)}  )

  }, [] ) 

  const SocialIcons = icons.map( (iconItem) => {
    return(
      <Social media = {iconItem.id} key = {iconItem.id}>
      <Icon className={iconItem.icon}></Icon>
      <SocialDesc>
          <Span>{iconItem.title}</Span>
          <SpanInfo>{iconItem.body}</SpanInfo>
      </SocialDesc>
  </Social>
    )
  })
    return (
      <SociaMedia>
        {SocialIcons}
  </SociaMedia>
    );
}

export default SocialMedia;