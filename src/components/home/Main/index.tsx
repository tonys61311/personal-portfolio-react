import React from 'react'
import Header from '@/components/home/Header';
import Intro from '@/components/home/Intro';
import Portfolio from '@/components/home/Portfolio';
import About from '@/components/home/About';
import Contact from '@/components/home/Contact';

function Main() {
	return (
		<div className="is-preload">
			<Header />
			<div id="main">
				<Intro />
				<Portfolio />
				<About />
				<Contact />
			</div>
		</div>
	);
}

export default Main