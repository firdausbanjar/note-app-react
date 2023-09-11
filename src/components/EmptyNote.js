import React from 'react';

function EmptyNote({ description }) {
	return (
		<div className="empty-note">
			<p>Tidak Ada {description}</p>
		</div>
	);
}

export default EmptyNote;
