import React from 'react';
import ItemButton from './ItemButton';
import NoteItemContent from './NoteItemContent';

function NoteItem({ id, title, body, createdAt, onDelete, onMoveNote, btnValue }) {
	return (
		<div id={id} className="note-item">
			<NoteItemContent title={title} body={body} createdAt={createdAt} />
			<ItemButton id={id} onDelete={onDelete} onMoveNote={onMoveNote} btnValue={btnValue} />
		</div>
	);
}

export default NoteItem;
