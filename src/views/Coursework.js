import { coursework } from "../models/coursework.js";
import {
    Container,
    Row,
    Col,
    ListGroup
} from 'react-bootstrap';

const Coursework = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2> 🏫 Coursework </h2>
                </Col>
            </Row>
            <br/>
            {coursework.map((work, index) => {
                return (
                    <div key={work.course + "-" + index.toString()}>
                        <Row>
                            <Col>
                                <h4> {work.course} </h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <i style={{fontSize: "15px"}}> {work.school} </i>
                            </Col>
                        </Row>
                        <br/>
                        {work.assignments.reverse().map((assignment, assignmentIndex) => {
                            let assignmentKey = assignment.name + "-" + assignmentIndex.toString();
                            return (
                                <div style={{marginLeft: "30px"}}>
                                    <h5> {assignment.name} </h5>
                                    <ListGroup variant="flush" key={assignmentKey}>
                                        {assignment.links.map((link, linkIndex) => {
                                            let linkId = assignmentKey + "-link-" + linkIndex.toString();
                                            return (
                                                <ListGroup.Item key={linkId}>
                                                    ⭐ <a href={link.link} target="_blank" rel="noreferrer"> {link.title} </a>
                                                </ListGroup.Item>
                                            );
                                        })}
                                    </ListGroup>
                                    <br/>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </Container>
    );
}

export default Coursework;
