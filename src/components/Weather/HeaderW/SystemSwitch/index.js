import React from 'react';

function SystemSwitch(props) {
	return (
		<label className="switch">
			<input readOnly type="checkbox" checked={props.checked} />
			<span className="slider round"></span>
		</label>
	);
}

export default SystemSwitch;
