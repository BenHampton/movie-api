import React, { Component } from 'react'
import Genres from "./Genres";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";

class GenresPanel extends Component{
    render(){
        return(
            <div>
                <div>
                    <div>
                        <Genres />
                        <Row className="show-grid" style={{width: '1296px'}}>
                            <Col md={8} style={{background: 'purple'}}>
                                <p>1</p>
                            </Col>
                            <Col md={4} style={{background: 'blue'}}>
                                <p>2</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
export default GenresPanel;