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
  ListGroup
} from 'react-bootstrap';


const CONTROLLER = require('../controllers/portfolioController.js');

const Blog = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    CONTROLLER.getBlogPosts(setPosts);
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <h3> 🔗 Blog Posts </h3>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
          <ListGroup variant={posts.length <= 1 ? "" : "flush"}>
            {posts.map((post) => {
              var itemDate = new Date(post.posted);
              return (
                <ListGroup.Item action>
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
