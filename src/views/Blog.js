/*********
react imports
**********/
import React, { useState, useEffect } from 'react';

/*********
react-bootstrap imports
**********/
import {
  Row,
  Col,
  ListGroup,
  Spinner
} from 'react-bootstrap';


const CONTROLLER = require('../controllers/portfolioController.js');

const Blog = (props) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    CONTROLLER.getBlogPosts(setPosts);
  }, []);

  if(posts === undefined) {
    return (
      <div>
        <br/>
        <Row>
          <Col className="center-align">
            <Spinner animation="border" />
          </Col>
        </Row>
      </div>
    );
  }
  return (
    <div>
      <Row>
        <Col>
          <h2> 🔗 Blog Posts </h2>
        </Col>
      </Row>
      <Row>
        <Col style={{marginLeft: "20px"}}>
          <i> A list of random things I geek out on </i>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
          <ListGroup variant={posts.length <= 1 ? "" : "flush"}>
            {posts.map((post, index) => {
              var itemDate = new Date(post.posted);
              return (
                <ListGroup.Item
                  key={index}
                  action
                  onClick={() => {
                    window.open(post.link, "_blank")
                  }}
                >
                  <Row>
                    <Col>
                      <div>
                        {post.title}
                      </div>
                    </Col>
                    <Col style={{textAlign: "right"}}>
                      📅 {itemDate.toLocaleDateString() + " @ " + itemDate.toLocaleTimeString()}
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Blog;
