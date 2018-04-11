import React, { Component } from 'react'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import './News.css'


export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/mountain-man.jpg" className="header-image"/>
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>You the best</p>
              <p>Better then all the rest</p>
              <p>Ooooo yeah</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/dog-people.jpg" />
              <p>Look at this image its so cool</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

