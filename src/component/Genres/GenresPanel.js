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
                        <div className="p-grid p-nogutter ">
                            <div className="p-col-8" style={{background: 'purple'}}>
                                <p>1</p>
                            </div>
                            <div className="p-col-4" style={{background: 'blue'}}>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default GenresPanel;