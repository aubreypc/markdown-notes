import katex from 'katex';

function renderTex(texString) {
	const data = texString.data;
	const katexConfig = {
		throwOnError: true,
		displayMode: true ? texString.type === "math-display" : false 
	};
	try {
		return katex.renderToString(data, katexConfig);
	} catch(e) {
		console.log(e);
	}
	return data;
}

export default renderTex;
