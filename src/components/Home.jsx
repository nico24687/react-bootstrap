import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap'
import './Home.css'

export default class Home extends Component{
  render(){
    return(
      <Grid>
          <Jumbotron>
            <h2>Welcome to BE 1710</h2>
            <p>Built with React, React Router and React Bootstrap</p>
            <Link to="/about">
              <Button bsStyle="default">About</Button>
            </Link>
          </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>Nico</h3>
            <p>Miss me with that backend</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.jpg" circle className="profile-pic" />
            <h3>Gabe</h3>
            <p>Meme Lord</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.jpg" circle className="profile-pic" />
            <h3>Zach</h3>
            <p>Lead Developer PYT Dating ...</p>
          </Col>
        </Row>

      </Grid>
    )
  }
}

