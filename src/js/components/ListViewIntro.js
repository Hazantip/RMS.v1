/**
 * Created by Khazan on 03/07/2016.
 */

import React from 'react';
import Link from 'react-router/lib/Link';
//import {connect} from 'react-redux';

const ListViewIntro = () => {

	return (

		<div className="intro">

			<div className="container">

				<div className="intro-inner">

					<div className="intro-img">
						<img src={require('../../images/burger.jpg')} alt=""/>
					</div>

					<div className="container">

						<div className="intro-content">

							<div className="details">
								<Link to="item" className="btn-details">Open</Link>
								<div className="details-text">
									<div className="author">
										<div className="icon-author"></div>
										Gil Rabbi
									</div>
									<div className="text">
										<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
									</div>
								</div>
							</div>

							<div className="social">
								<div className="social-r">
									<div className="item"></div>
								</div>

								<div className="social-l">
									<div className="item"></div>
									<div className="item"></div>
									<div className="item"></div>
									<div className="item"></div>
								</div>
							</div>

						</div>

					</div>

				</div>

				{/*<div className="temp">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet at cum eaque eos est eum excepturi explicabo illo ipsam iste magni minus nam natus necessitatibus nemo nihil nobis odio officia provident quas quidem quis veniam, voluptatem voluptates voluptatibus? Amet aperiam, aspernatur aut corporis eius illo ipsum iste magnam nesciunt nihil nulla quas quidem reiciendis repellat saepe sint soluta tempore tenetur veritatis voluptatum. Et explicabo molestias perferendis. Accusamus, adipisci autem commodi cupiditate debitis deleniti ducimus hic minus mollitia necessitatibus non obcaecati quos soluta velit vitae. Aut dignissimos dolorem, esse impedit inventore ipsam itaque necessitatibus nesciunt rerum totam velit voluptas.</p>
				</div>*/}

			</div>
		</div>

	);
};

//ListViewIntro.propTypes = {
//	postcardImages: React.PropTypes.array,
//	setPostcardActiveImage: React.PropTypes.func
//};

//export default connect(null, null)(ListViewIntro);
export default ListViewIntro;
