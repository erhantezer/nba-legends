import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
    const [search, setSearch] = useState("");
    return (
        <>
            <Form.Control
                type="search"
                placeholder="Search Player..."
                className="w-50 m-auto"
                onChange={(e) => setSearch(e.target.value)}
            />
            <Container className="card-container rounded-4 my-4 p-3">
                <Row className="g-3 justify-content-center">
                    {data.filter((player) => player.name.toLowerCase().includes(search))
                    .map((item, index) => {
                        // const {name, img, statistics} = item
                    return (
                        <Col md={6} lg={4} xl={3} key={index}>
                            <PlayerCard {...item} />
                        </Col>
                    )
                    })}
                </Row>
            </Container>
        </>
    )
};

export default CardContainer;
