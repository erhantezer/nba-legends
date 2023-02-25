import React from "react";
import { Container, Row } from "react-bootstrap";
import { data } from "../helpers/data";

const CardContainer = () => {
    const [search, setSearch] = useState("");
    return (
        <>
            <Form.Control
                type="search"
                placeholder="Search Player..."
                className="w-50 m-auto"
                onChange={() => setSearch(e.target.value)}
            />
            <Container className="card-container rounded-4 my-4 p-3">
                <Row className="g-3 justify-content-center">
                    {data.map((item, index) => {
                        const { name, img, statistics } = item
                        return (
                            
                        )
                    })}
                </Row>
            </Container>
        </>
    )
};

export default CardContainer;
