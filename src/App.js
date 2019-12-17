import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import cat1 from './cats/cat.173.jpg';
import cat2 from './cats/cat.8474.jpg';
import cat3 from './cats/cat.6662.jpg';

function App() {
  return (
		<Carousel width={600}>
			<div>
				<img src={cat1} alt='cat'  />
				<p className='legend'>Cat 1</p>
		  </div>
			<div>
				<img src={cat2} alt='cat' />
				<p className='legend'>Cat 2</p>
		  </div>
			<div>
				<img src={cat3} alt='cat' />
				<p className='legend'>Cat 3</p>
		  </div>


		</Carousel>
	);
}

export default App;
