import React from 'react';
import marked from 'marked';

class MdRender extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.mdString);
		return <div dangerouslySetInnerHTML={{
			__html: marked(this.props.mdString)
		}}></div>;
	}
}

export default MdRender;
