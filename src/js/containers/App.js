/**
 * Created by Khazan on 03/07/2016.
 */
import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	childrenWithProps() {
		// Render all children with these props.
		// Thanks that you don't need to call mapStateToProps inside child elements.
		const childrenWithProps = React.Children.map(this.props.children,
			(child) => React.cloneElement(child, {
				//postcardImages: this.props.postcardImages,
				//postcardActiveImage: this.props.postcardActiveImage,
				//currentCanvas: this.props.currentCanvas
			})
		);
		return childrenWithProps;
	}

	render() {
		return (
			<div className="app">
				{this.childrenWithProps()}
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.element
//	fetchImages: PropTypes.func,
//	postcardImages: PropTypes.array,
//	postcardActiveImage: PropTypes.string,
//	currentCanvas: PropTypes.object
};

// get all available props and map them to props. through the all app.
//function mapStateToProps(state) {
//	return {
//		postcardImages: state.postcardImages,
//		postcardActiveImage: state.postcardActiveImage,
//		currentCanvas: state.currentCanvas
//	};
//}

export default connect(null, {})(App);
//export default App;
