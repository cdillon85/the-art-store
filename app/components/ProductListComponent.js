import React from 'react'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'


export default function ProductListComponent (props) {
    return (
        <div>

            <h1 className="shop-header"> Shop The Collection </h1>
                <div className="products-list">
                    <Grid>
                        <Row className= "show-grid">
                        {props.products && props.products.map(painting => {
                            return (
                                <Col xs={6} md={4} key={painting.id}>
                                <Link to={`/products/${painting.id}`}>
                                <img className="art" src={painting.url} />
                                </Link>
                                </Col>
                                )
                        })}
                        </Row>
                    </Grid>
                </div>

        </div>
        )
}