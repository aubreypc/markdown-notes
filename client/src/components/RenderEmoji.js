import React from 'react';
import ReactDOMServer from 'react-dom/server';
import emojis from '../util/emoji.js';
import twemoji from 'twemoji';

function renderEmoji(emojiStr) {
	const aliased = emojis.find(function(a){
		return a ? a.aliases.includes(emojiStr.data) : null;   
	});
	if (aliased) {
		return twemoji.parse(aliased.emoji, {folder: 'svg', ext:'.svg'});
	} else {
		return emojiStr.rawData;
	}
}


export default renderEmoji;
