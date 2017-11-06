import React from 'react';
import marked from 'marked';
import katex from 'katex';
import {split} from '../util/auto-render.js';

class MdRender extends React.Component {
	constructor(props) {
		super(props);
	}

	renderAllTex(mdString) {
		var sections = split(mdString, [{left:"$", right:"$"}]);
		var output = "";
		const katexConfig = {
			throwOnError: true,
		};
		for (var i = 0; i < sections.length; i++) {
			if (sections[i].type === "math"){
				try {
					output += katex.renderToString(sections[i].data, katexConfig);
					continue
				} catch (e) {
					console.log(e);
				}
			}
			output += sections[i].data;
		}
		return output;
	}

	renderTex(texString) {
	
	}

	render() {
		var renderedMd = marked(this.props.mdString);
		var renderedTex = this.renderAllTex(renderedMd);
		return <div dangerouslySetInnerHTML={{
			__html: renderedTex
		}}></div>;
	}
}

export default MdRender;
