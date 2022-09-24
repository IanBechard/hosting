import React, { useState } from "react";
import {Button, Card, Fade} from "react-bootstrap"
import "../css/Card.css"

const Hovercard = (props) =>{
    const [hover, setHover] = useState(false);
    return(
            <Card 
            className="Card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            >
                <Card.Img 
                variant="top" 
                src={props.imgsrc}/>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Fade in={hover} className="Fade">
                    <Card.ImgOverlay className="Overlay">
                        {hover && (<Button className="Button">Order Now</Button>)}
                    </Card.ImgOverlay>
                </Fade>
            </Card>
    );
};

export default Hovercard;