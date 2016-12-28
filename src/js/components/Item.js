/**
 * Created by hazantip on 11.08.16.
 */
import React from 'react';
import Link from 'react-router/lib/Link';

const Item = () => {
	return(
		<div className="intro intro-item">
			<div className="container">
				<div className="intro-inner">
					<div className="intro-img">
						<div className="num">1</div>
						<Link to="item" className="btn-link prev"/>
						<Link to="item" className="btn-link next"/>
						<img src={require('../../images/burger2.jpg')} alt=""/>
					</div>
					<div className="container">
						<div className="intro-content">
							<div className="title">חדשות, ידיעות מהארץ והעולם</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi at esse hic ipsum labore maxime, modi nesciunt obcaecati quas reprehenderit repudiandae similique sit temporibus.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi at esse hic ipsum labore maxime, modi nesciunt obcaecati quas reprehenderit repudiandae similique sit temporibus.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
