import React from 'react';

class HeaderButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			noteActive: true,
			archiveActive: false,
		};

		this.onHeaderNoteEventHandler = this.onHeaderNoteEventHandler.bind(this);
		this.onHeaderArchiveEventHandler = this.onHeaderArchiveEventHandler.bind(this);
	}

	onHeaderNoteEventHandler() {
		this.props.hiddenArchive();
		this.setState(() => {
			return {
				noteActive: true,
				archiveActive: false,
			};
		});
	}

	onHeaderArchiveEventHandler() {
		this.props.hiddenNote();
		this.setState(() => {
			return {
				noteActive: false,
				archiveActive: true,
			};
		});
	}

	render() {
		let noteActive = this.state.noteActive ? 'active' : 'not-active';
		let archiveActive = this.state.archiveActive ? 'active' : 'not-active';

		return (
			<div className="header-btn">
				<h3 className={noteActive} onClick={this.onHeaderNoteEventHandler}>
					Catatan
				</h3>
				<h3 className={archiveActive} onClick={this.onHeaderArchiveEventHandler}>
					Arsip
				</h3>
			</div>
		);
	}
}

export default HeaderButton;
