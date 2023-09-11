import React from 'react';
import HeaderButton from './HeaderButton';
import NoteList from './NoteList';

class NoteDisplay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hiddenNote: false,
			hiddenArchive: true,
		};

		this.onHiddenNoteHandler = this.onHiddenNoteHandler.bind(this);
		this.onHiddenArchiveHandler = this.onHiddenArchiveHandler.bind(this);
	}

	onHiddenNoteHandler() {
		this.setState(() => {
			return {
				hiddenNote: true,
				hiddenArchive: false,
			};
		});
	}

	onHiddenArchiveHandler() {
		this.setState(() => {
			return {
				hiddenNote: false,
				hiddenArchive: true,
			};
		});
	}

	render() {
		const notes = this.props.notes;
		const isArchive = notes.filter((note) => note.archived === true);
		const isNote = notes.filter((note) => note.archived === false);

		return (
			<div className="note-display">
				<HeaderButton hiddenNote={this.onHiddenNoteHandler} hiddenArchive={this.onHiddenArchiveHandler} />

				{/* Note */}
				<NoteList notes={isNote} onDelete={this.props.onDelete} hiddenNote={this.state.hiddenNote} onMoveNote={this.props.onMoveNote} empty="Catatan" btnValue="Arsipkan" />

				{/* Archive */}
				<NoteList notes={isArchive} onDelete={this.props.onDelete} hiddenNote={this.state.hiddenArchive} onMoveNote={this.props.onMoveNote} empty="Arsip" btnValue="Pindahkan" />
			</div>
		);
	}
}

export default NoteDisplay;
