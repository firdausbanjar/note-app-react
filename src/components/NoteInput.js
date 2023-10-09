import React from 'react';

class NoteInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			maxChar: 50,
			title: '',
			body: '',
		};

		this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
		this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
		this.onResetEventHandler = this.onResetEventHandler.bind(this);
		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
	}

	onTitleChangeEventHandler(event) {
		this.setState(() => {
			return {
				maxChar: event.target.maxLength - event.target.value.length,
				title: event.target.value,
			};
		});
	}

	onBodyChangeEventHandler(event) {
		this.setState(() => {
			return {
				body: event.target.value,
			};
		});
	}

	onResetEventHandler() {
		this.setState({
			maxChar: 50,
			title: '',
			body: '',
		});
	}

	onSubmitEventHandler(event) {
		event.preventDefault();
		this.props.addNote(this.state);
		this.setState({
			maxChar: 50,
			title: '',
			body: '',
		});
	}

	render() {
		return (
			<form className="note-input" onSubmit={this.onSubmitEventHandler}>
				<p>
					Sisa karakter: <span>{this.state.maxChar}</span>
				</p>
				<input className="note-input__title" type="text" placeholder="Judul catatan ..." maxLength="50" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
				<br />
				<textarea className="note-input__body" placeholder="Catatan..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
				<br />
				<div className="note-input__btn">
					<button className="note-input__btn-reset" type="reset" onClick={this.onResetEventHandler}>
						Hapus
					</button>
					<button className="note-input__btn-create" type="submit">
						Buat
					</button>
				</div>
			</form>
		);
	}
}

export default NoteInput;
