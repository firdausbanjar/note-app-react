import React from 'react';
import { showFormattedDate } from '../utils';

function NoteItemContent({ title, body, createdAt }) {
	const date = showFormattedDate(createdAt);

	return (
		<div>
			<h3 className="note-item__title">{title}</h3>
			<p className="note-item__date">{date}</p>
			<p className="note-item__body">{body}</p>
		</div>
	);
}

export default NoteItemContent;
