import Container from "react-bootstrap/esm/Container";
import {Row, Col, Card} from "react-bootstrap"
import "../css/Card.css"
const Games = () =>{

    return(
        <Container>
            <Row>
                <Col>
                    <Card className="Card">
                        <Card.Img 
                        variant="top" 
                        src="gamecards/minecraftCard.png"/>
                        <Card.Title>Minecraft</Card.Title>
                        <Card.Text>Starting at X.XX for 1GB</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card className="Card">
                        <Card.Img 
                        variant="top" 
                        src="gamecards/zomboidCard.png"/>
                        <Card.Title>Project Zomboid</Card.Title>
                        <Card.Text>Starting at X.XX for 1GB</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card className="Card">
                        <Card.Img 
                        variant="top" 
                        src="gamecards/csgoCard.png"/>
                        <Card.Title>Counter Strike: Global Offensive</Card.Title>
                        <Card.Text>Starting at X.XX for 1GB</Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="Card">
                        <Card.Img 
                        variant="top" 
                        src="gamecards/dayZCard.png"/>
                        <Card.Title>DayZ</Card.Title>
                        <Card.Text>Starting at X.XX for 1GB</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card className="Card">
                        <Card.Img 
                        variant="top" 
                        src="gamecards/7daystodieCard.png"/>
                        <Card.Title>7 Days To Die</Card.Title>
                        <Card.Text>Starting at X.XX for 1GB</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card className="Card">
                        <Card.Img 
                        variant="top" 
                        src="gamecards/mordhauCard.png"/>
                        <Card.Title>Mordhau</Card.Title>
                        <Card.Text>Starting at X.XX for 1GB</Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="Card">
                        <Card.Img 
                        variant="top" 
                        src="gamecards/arkCard.png"/>
                        <Card.Title>ARK: Survival Evolved</Card.Title>
                        <Card.Text>Starting at X.XX for 1GB</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card className="Card">
                        <Card.Img 
                        variant="top" 
                        src="gamecards/rustCard.png"/>
                        <Card.Title>Rust</Card.Title>
                        <Card.Text>Starting at X.XX for 1GB</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card className="Card">
                        <Card.Img 
                        variant="top" 
                        src="gamecards/arma3Card.png"/>
                        <Card.Title>Arma 3</Card.Title>
                        <Card.Text>Starting at X.XX for 1GB</Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="Card">
                        <Card.Img 
                        variant="top" 
                        src="gamecards/gmodCard.png"/>
                        <Card.Title>Garry's Mod</Card.Title>
                        <Card.Text>Starting at X.XX for 1GB</Card.Text>
                    </Card>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    );
}

export default Games;