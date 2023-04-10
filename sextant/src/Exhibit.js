import React from "react";

const Exhibit = ({ title, children }) => {
	return (
		<div className="exhibit">
			<h2 className="exhibit-title">{title}</h2>
			<div className="exhibit-content">
				{React.Children.map(children, (child, index) => (
					<div className="exhibit-card" key={index}>{child}</div>
				))}
			</div>
		</div>
	);
};

export default Exhibit;
