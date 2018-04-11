import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap'
import './Home.css'

export default class Home extends Component{
  render(){
    return(
      <Grid>
          <Jumbotron>
            <h2>Welcome to CodeLife.io</h2>
            <p>Buuilt with React, React Router and React Bootstrap</p>
          </Jumbotron>
          <Link to="/about">
          <Button bsStyle="default">About</Button>
          </Link>
      </Grid>
    )
  }
}

