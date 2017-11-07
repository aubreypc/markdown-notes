import React from 'react';
import marked from 'marked';
import RenderTex from './RenderTex.js';
import RenderEmoji from './RenderEmoji.js'
import {split} from '../util/auto-render.js';

class Render extends React.Component {
	constructor(props) {
		super(props);
		marked.setOptions({
			breaks: true,
			gfm: true,
			smartypants: true,
		});
		this.parseAll.bind(this);
	}

	parseAll() {
		var body = this.props.body;
		const parsers = [
			{left:"$", right:"$", type:"math", render:RenderTex}, 
			{left:"\\[", right:"\\]", type:"math-display", render:RenderTex},
			{left:":", right:":", type:"emoji", render:RenderEmoji},
		]
		var sections = split(this.props.body, parsers);
		return {render: function(){
			var output = "";
			for (var i = 0; i < sections.length; i++) {
				const sec = sections[i];
				console.log(sec);
				if (sec.type !== "text") {
					// find the relevant parser archetype to access render function
					const secParser = parsers.find(function(p) {
						return p ? p.type === sec.type : null;
					})
					output += secParser.render(sec);
					continue;
				}
				output += sec.data;
			};
			return output;
		}};
	}

	render() {
		var renderedExtras = this.parseAll().render();
		var renderedMd = marked(renderedExtras);
		return <div className = "render-main" dangerouslySetInnerHTML={{
			__html: renderedMd
		}}></div>;
	}
}

export default Render;
