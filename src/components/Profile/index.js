import React , {useState , useEffect}  from 'react' ;
import axios from 'axios' ;

import {ProfileSkills , ProfileSection , ProfileList , ProfileItem ,Span ,SpanWeb , Skills , SkillsDesc , Bar , BarTitle , BarPerc , BarParent , BarParentSpan , ProfileTitle , SkillsTitle , ProfileTitleSpan , SkillsTitleSpan} from './style.js'

const Profile = () =>  {
  const [ bars , setBars ] = useState([]) 

  useEffect ( () => {
    axios.get('js/data.json').then(res => {setBars(res.data.profile)}  )

  }, [] ) 

  const ProfileBars = bars.map( (barItem) => {
    return(
      <Bar key = {barItem.id}>
                  <BarTitle>{barItem.title}</BarTitle>
                  <BarPerc>{barItem.perc}</BarPerc>
                  <BarParent>
                      <BarParentSpan span = {barItem.span} ></BarParentSpan>
                  </BarParent> 
      </Bar>
    )
  })
    return (
      <ProfileSkills>
      <div class="container">
          <ProfileSection>
              <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
              <ProfileList>
                  <ProfileItem>
                      <Span>Name</Span>
                      Hamza Nabil
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Birthday</Span>
                      21/1/1996
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Address</Span>
                      Ain shams
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Phone</Span>
                      4444 5555 6666
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Email</Span>
                      hamza@hamza.com
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Website</Span>
                      <SpanWeb>www.google.com</SpanWeb>
                  </ProfileItem>
              </ProfileList>
          </ProfileSection>
          
          <Skills>
              <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
              <SkillsDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
              </SkillsDesc>
              {ProfileBars}
          </Skills>
          
      </div>
  </ProfileSkills>
    );
}

export default Profile;