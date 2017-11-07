import React, { Component } from 'react';
import MdEditor from './MdEditor';
//import MdRender from './MdRender';
import Render from './Render';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {editorValue: "", editorCollapsed: false};
		this.onEditorChange = this.onEditorChange.bind(this);
		this.collapse = this.collapse.bind(this);
	}

	onEditorChange(val) {
		const content = val.getCurrentContent();
		this.setState({editorValue: content.getPlainText()})
	}

	collapse() {
		this.setState({editorCollapsed: !this.state.editorCollapsed});
	}

	collapseBtn() {
		return <i className={"v-center octicon octicon-triangle-" 
			+ (this.state.editorCollapsed ? "right" : "left")}
			onClick={this.collapse}
		></i>;
	}
	render() {
		return <div className="container-fluid full-height">
			<div className="row full-height">
				<div className={"col-sm-4 full-height editor-container " + (this.state.editorCollapsed ? "collapse" : "")}>
					<MdEditor onEditorChange={this.onEditorChange}/>
				</div>
				<div className="col-sm-8 full-height rendered">
				{this.collapseBtn()}
				<Render body={this.state.editorValue}/>
				</div>
			</div>
		</div>;
	}
}

export default App;
