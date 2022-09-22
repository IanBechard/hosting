import "../css/Footer.css"
import {Row, Col, Container} from "react-bootstrap"

const Footer = () => {
    return(
        <div className="Box">
            <h1 className="Title">Hosting Company: we host you pay us</h1>
            <Container>
                <Row>
                    <Col>
                        <img src="/logo192.png" 
                        width="90"
                        height="90"
                        alt="Hosting Service Name Logo">
                        </img>
                        <p>Hosting Service Name</p>
                        <p>Ottawa, Ontario, Canada</p>
                    </Col>
                    <Col>
                        <p className="Heading">About us</p>

                        <p className="Element">asdfasdf</p>
                        <p className="Element">asdfasdf</p>
                        <p className="Element">asdfasdf</p>
                    </Col>
                    <Col>
                        <p className="Heading">About us</p>

                        <p className="Element">asdfasdf</p>
                        <p className="Element">asdfasdf</p>
                        <p className="Element">asdfasdf</p>
                    </Col>
                    <Col>
                        <p className="Heading">About us</p>

                        <p className="Element">asdfasdf</p>
                        <p className="Element">asdfasdf</p>
                        <p className="Element">asdfasdf</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;