import React  from 'react'
import {Carousel} from 'react-bootstrap'

const JumbotronComponent = () => (

            <div className="jumbotron">
            <Carousel>
	            <Carousel.Item>
	            <div className="jumbotron-image">
			      <img width={900} height={500} alt="900x500" src="/Kenneth_Noland_Collage4.jpg" />
			     </div>
			      <Carousel.Caption>
			        <h3>KENNETH NOLAND</h3>
			        <p>New paintings, now in stock!</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			    <div className="jumbotron-image">
			    <img width={900} height={500} alt="900x500" src="/Gallery_View2.jpg" />
			    </div>
			      <Carousel.Caption className="jumbotron-caption">
			        <h3>Visit Our New Showroom</h3>
			        <p>344 Mercer Street, New York City</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			    <div className="jumbotron-image">
			      <img width={900} height={500} alt="900x500" src="/Minimal_Home.jpg" />
			     </div>
			      <Carousel.Caption>
			        <h3>THE ART STORE FEATURED IN ARCHITECTURAL DIGEST</h3>
			        <p>"NYC's Best Kept Secret for the New Art Collector"</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			 </Carousel>
			 </div>
    )

export default JumbotronComponent
