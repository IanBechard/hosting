import Container from "react-bootstrap/esm/Container";
import {Row, Col} from "react-bootstrap"
import Hovercard from "../components/Hovercard";



/*
TODO:
Search function, dynamically load cards based on search and or filters

*/
const Games = () =>{

    return(
        <Container>
            <Row>
                <Col>
                    <Hovercard 
                    title="Minecraft"
                    imgsrc="gamecards/minecraftCard.png"
                    text="Starting at 3.99 for 1gb"/>
                </Col>
                <Col>
                    <Hovercard
                    title="Project Zomboid"
                    imgsrc="gamecards/zomboidCard.png"
                    text="Starting at x.xx for 3 slots"
                    />
                </Col>
                <Col>
                    <Hovercard
                    title="Counter-Strike: GO"
                    imgsrc="gamecards/csgoCard.png"
                    text="Starting at x.xx for 3 slots"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Hovercard
                    title="DayZ"
                    imgsrc="gamecards/dayZCard.png"
                    text="Starting at x.xx for 3 slots"
                    />
                </Col>
                <Col>
                    <Hovercard
                    title="7 Days To Die"
                    imgsrc="gamecards/7daystodieCard.png"
                    text="Starting at x.xx for 3 slots"
                    />
                </Col>
                <Col>
                    <Hovercard
                    title="Mordhau"
                    imgsrc="gamecards/mordhauCard.png"
                    text="Starting at x.xx for 3 slots"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Hovercard
                    title="ARK: Survival Evolved"
                    imgsrc="gamecards/arkCard.png"
                    text="Starting at x.xx for 3 slots"
                    />
                </Col>
                <Col>
                    <Hovercard
                    title="Rust"
                    imgsrc="gamecards/rustCard.png"
                    text="Starting at x.xx for 3 slots"
                    />
                </Col>
                <Col>
                    <Hovercard
                    title="Arma 3"
                    imgsrc="gamecards/arma3Card.png"
                    text="Starting at x.xx for 3 slots"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Hovercard
                    title="Garry's Mod"
                    imgsrc="gamecards/gmodCard.png"
                    text="Starting at x.xx for 3 slots"
                    />
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