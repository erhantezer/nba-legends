import React from "react";
import { Container } from "react-bootstrap";
import { data } from "../helpers/data";

const CardContainer = () => {
    return (
            <Container>
                {data.map((item,index) => {
                    const { name, img, statistics } = item
                    return (
                            
                        )
                })}
            </Container>
        )
};

export default CardContainer;
