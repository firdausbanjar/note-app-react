import React from 'react';
import EmptyNote from './EmptyNote';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, hiddenNote, onMoveNote, empty, btnValue }) {
	if (!hiddenNote) {
		if (notes.length > 0) {
			return (
				<div className="note-list">
					{notes.map((note) => (
						<NoteItem key={note.id} {...note} id={note.id} onDelete={onDelete} onMoveNote={onMoveNote} btnValue={btnValue} />
					))}
				</div>
			);
		} else {
			return <EmptyNote description={empty} />;
		}
	} else {
		return null;
	}
}

export default NoteList;
