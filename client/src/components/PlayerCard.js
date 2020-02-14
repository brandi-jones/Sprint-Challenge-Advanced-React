import React from "react";
import {Card, CardTitle, CardBody, CardSubtitle, CardText} from 'reactstrap';

const PlayerCard = (props) => {

    return (
        <Card data-testid="cardTest" className="playerCard">
            <CardBody>
                <CardTitle className="cardTitle">{props.player.name}</CardTitle>
                <CardSubtitle>Country: {props.player.country}</CardSubtitle>
                <CardText>Searches: {props.player.searches}</CardText>
            </CardBody>
        </Card>
    );
};

export default PlayerCard;