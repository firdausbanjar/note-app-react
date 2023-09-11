import React from 'react';
// import DeleteButton from "./DeleteButton";

function ItemButton({ id, onDelete, onMoveNote, btnValue }) {
	return (
		<div className="note-item__btn">
			<button className="note-item__btn-delete" onClick={() => onDelete(id)}>
				Hapus
			</button>
			<button className="note-item__btn-move" onClick={() => onMoveNote(id)}>
				{btnValue}
			</button>
		</div>
	);
}

export default ItemButton;
