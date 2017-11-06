import React, { Component } from 'react';
import MdEditor from './MdEditor';
import MdRender from './MdRender';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {editorValue: ""};
		this.onEditorChange = this.onEditorChange.bind(this);
	}

	onEditorChange(val) {
		const content = val.getCurrentContent();
		this.setState({editorValue: content.getPlainText()})
	}

	render() {
		return <div className="container-fluid">
			<div className="row">
				<div className="col-sm-4">
					<MdEditor onEditorChange={this.onEditorChange}/>
				</div>
				<div className="col-sm-8">
					<MdRender mdString={this.state.editorValue}/>
				</div>
			</div>
		</div>;
	}
}

export default App;
