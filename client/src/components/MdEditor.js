import React from 'react';
import {Editor, EditorState} from 'draft-js';

class MdEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {editorState: EditorState.createEmpty()};	
		this.onChange = this.onChange.bind(this);
	}

	onChange(editorState) {
		this.setState({editorState});
		this.props.onEditorChange(editorState);
	}

	render() {
		return <Editor editorState={this.state.editorState} onChange={this.onChange}/>;
	}
}

export default MdEditor;
