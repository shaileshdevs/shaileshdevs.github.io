const Hamburger = ( props ) => {
	const { isMobile, sidebarOpen, setSidebarOpen } = props;

	const toggleSidebar = () => {
		setSidebarOpen( ! sidebarOpen );
	}

	if ( ! isMobile ) {
		return '';
	}

	return (
		<div className="hamburger-wrapper">
			<button
				className="hamburger"
				id="hamburgerBtn"
				onClick={toggleSidebar}
				>
					{
						sidebarOpen ?
							<svg
								className="close-svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg> :
							<svg
								className="hamburger-svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line x1="3" y1="6" x2="21" y2="6" />
								<line x1="3" y1="12" x2="21" y2="12" />
								<line x1="3" y1="18" x2="21" y2="18" />
							</svg>
					}
			</button>
		</div>
	)
}

export default Hamburger;