// import { Row, Container, Col } from "react-bootstrap";

// const About = () => {
//     return (  
//         <Container className="about" fluid>
//             <Row>
//                 <Col className="content" xxl={8}>
//                     <div className="textdiv">
//                     <h3 className="title">Background</h3>
//                         <p className="background">
//                             III received my BSc and MSc degrees in Computer Science from the University
//                             of Zagreb, Faculty of Electrical Engineering and Computing (UNIZG FER),
//                             Zagreb, Croatia in 2017 and 2020, respectively. <br></br> &emsp;My academic journey 
//                             initially centered around machine learning and deep learning, leading 
//                             me to a research role at the Laboratory for Intelligent Autonomous 
//                             Systems (<a href="https://lariat.unidu.hr/">LARIAT</a>)
//                             at the University of Dubrovnik. Although I considered 
//                             pursuing a Ph.D., I chose to explore other career pathways. I have
//                             a keen interest in crafting software solutions that enhance everyday 
//                             life. <br></br> &emsp;For further insights into my previous projects, please explore
//                             the Projects section in the menu. When I’m not coding, I enjoy staying
//                             active, usually playing soccer, but I’m always ready to engage in various 
//                             sports activities.
//                         </p>
//                     </div>
//                 </Col>
//             </Row>
//             </Container>
//     );
// }
 
// export default About;


import { Col,Container,Row } from "react-bootstrap";

const About = () => {
    return ( 
        <>
        <div className="about-bg"></div>
        <Container className="about" fluid>
            <Row>
                <Col className="content">
                    <div className="title">Background</div>
                    <div className="text">
                    I received my BSc and MSc degrees in Computer Science from the University
                    of Zagreb, Faculty of Electrical Engineering and Computing (UNIZG FER),
                    Zagreb, Croatia in 2017 and 2020, respectively. <br></br> &emsp;My academic journey                   initially centered around machine learning and deep learning, leading 
                    me to a research role at the Laboratory for Intelligent Autonomous 
                    Systems (<a href="https://lariat.unidu.hr/">LARIAT</a>)
                    at the University of Dubrovnik. Although I considered pursuing a Ph.D., 
                    I chose to explore other career pathways. I have
                    a keen interest in crafting software solutions that enhance everyday                  life. <br></br> &emsp;For further insights into my previous projects, please explore
                    the Projects section in the menu. When I’m not coding, I enjoy staying
                    active, usually playing soccer, but I’m always ready to engage in various 
                    sports activities.
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
 
export default About;