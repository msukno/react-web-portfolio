// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Intro from './Intro';
// import BackgroundVideo from './BackgroundVideo';
// import WelcomeMsg from './WelcomeMsg';
// import SocialMedia from './SocialMedia';

// function Homepage() {
//   const welcomeMsgtext_top = "Welcome to My";
//   const welcomeMsgtext_bottom= "Web Portfolio";
//   const introduction_text = `Hello, I'am Matija. I code, play sports and train neural networks. This portfolio is a showcase of my journey so far, where you'll find a detailed account 
//   of my previous projects and college experience. As you navigate through the pages, 
//   you'll get a glimpse into the work I've done and the knowledge I've gained along the way. 
//   My goal is to leverage these experiences as I pursue a future in the IT industry.
//   Thank you for visiting, and I hope you find inspiration in my work!`
              
//               return (
//                 <>
//                   <BackgroundVideo />
//                   <Container fluid className='gridContainer'>
//                     <Row>
//                       <Col className="wmAndIntroCol" xxl={10}>
//                         <WelcomeMsg message1={welcomeMsgtext_top} message2={welcomeMsgtext_bottom} />
//                         <Intro text={introduction_text} />
//                         <SocialMedia />
//                       </Col>
//                       <Col className="vidIntroCol" xxl={2}>
//                       </Col>
//                     </Row>
//                   </Container>
//                 </>
//               );
// }

// export default Homepage;


import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intro from './Intro';
import BackgroundVideo from './BackgroundVideo';
import WelcomeMsg from './WelcomeMsg';
import SocialMedia from './SocialMedia';
import Loading from './Loading';

function Homepage() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const welcomeMsgtext_top = "Welcome to My";
  const welcomeMsgtext_bottom= "Web Portfolio";
  const introduction_text = `Hello, I'am Matija. I code, play sports and train neural networks. This portfolio is a showcase of my journey so far, where you'll find a detailed account 
  of my previous projects and college experience. As you navigate through the pages, 
  you'll get a glimpse into the work I've done and the knowledge I've gained along the way. 
  My goal is to leverage these experiences as I pursue a future in the IT industry.
  Thank you for visiting, and I hope you find inspiration in my work!`
              
  return (
    <>
      {!videoLoaded && <Loading />}
      <BackgroundVideo setVideoLoaded={setVideoLoaded} />
      {videoLoaded && (
        <Container fluid className='gridContainer'>
          <Row>
            <Col className="wmAndIntroCol" xxl={10}>
              <WelcomeMsg message1={welcomeMsgtext_top} message2={welcomeMsgtext_bottom} />
              <Intro text={introduction_text} />
              <SocialMedia />
            </Col>
            <Col className="vidIntroCol" xxl={2}>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default Homepage;
