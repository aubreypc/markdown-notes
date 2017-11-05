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
		return <div>
			<MdEditor onEditorChange={this.onEditorChange}/>
			<MdRender mdString={this.state.editorValue}/>
		</div>;
	}
}

export default App;
