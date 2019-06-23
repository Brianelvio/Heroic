import React from 'react'

interface Interface {
	header?: string,
	subheader?: string,
	children: any
}

export default ({ children, header, subheader }: Interface) => (
	<div className="heroic-card h-100 no-margin">
		{
			header
				? (
					<div className="heroic-card-header">
						<span className="header">{header}</span>
						<span className="description">{subheader}</span>
					</div>
				)
				: null
		}
		<div className="heroic-card-content flex">
			{children}
		</div>
	</div>
)
