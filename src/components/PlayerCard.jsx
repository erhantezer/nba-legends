import { useState } from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ name, img, statistics }) => {
    const [showImage, setshowImage] = useState(true);
    return (
        <Card
            onClick={() => setshowImage(!showImage)}
            className="rounded-2 m-auto player-card"
            role="button"
        >
            {showImage ? (
                <Card.Img variant="top" src={img} className="player-logo" />
            ) :  (
                <ul className="m-auto">
                    {statistics.map((item, i) => {
                        return (
                            <li key={i} className="h5 text-start list-unstyled">
                                🏀 {item}
                            </li>
                            )
                    })}
                </ul>
            )}
            <Card.Footer>
                <Card.Title>{name}</Card.Title>
            </Card.Footer>
        </Card>
    )
};

export default PlayerCard;
