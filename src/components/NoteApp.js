import React from 'react';
import { getInitialData } from '../utils';
import NoteDisplay from './NoteDisplay';
import NoteInput from './NoteInput';

class NoteApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getInitialData(),
			title: '',
		};

		this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
		this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
		this.onMoveNoteHandler = this.onMoveNoteHandler.bind(this);
		this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
	}

	onAddNoteEventHandler({ title, body }) {
		this.setState((prevState) => {
			return {
				notes: [
					...prevState.notes,
					{
						id: +new Date(),
						title,
						body,
						createdAt: new Date(),
						archived: false,
					},
				],
			};
		});
	}

	onDeleteNoteHandler(id) {
		const notes = this.state.notes.filter((note) => note.id !== id);
		this.setState({ notes });
	}

	onMoveNoteHandler(id) {
		const notes = this.state.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note));
		this.setState({ notes });
	}

	onSearchEventHandler(event) {
		this.setState(() => {
			return {
				title: event.target.value,
			};
		});
	}

	render() {
		const searchNote = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.title.toLowerCase()));
		return (
			<div className="note-app">
				<NoteInput addNote={this.onAddNoteEventHandler} />
				<div className="container-search">
					<input className="search-note" type="text" onChange={this.onSearchEventHandler} value={this.state.title} placeholder="Cari Judul Catatan..." />
				</div>
				<NoteDisplay notes={searchNote} onDelete={this.onDeleteNoteHandler} onMoveNote={this.onMoveNoteHandler} />
			</div>
		);
	}
}

export default NoteApp;
