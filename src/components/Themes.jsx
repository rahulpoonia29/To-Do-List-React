import constants from "../constants";

function Themes() {
	const themes = constants.themes;
	function changeTheme(newTheme) {
		document.documentElement.setAttribute("data-theme", newTheme);
	}

	return (
		<div className="dropdown">
			<div
				tabIndex={0}
				role="button"
				className="btn btn-accent px-5 text-accent-content mb-2"
			>
				Themes
			</div>
			<div
				tabIndex={0}
				className="w-40 dropdown-content z-[1] menu p-2 shadow-md bg-base-100 rounded-box [&>li]:text-base-content"
			>
				{themes.map((theme) => (
					<>
						
						<li key={theme} className="mb-2">
							<a
								onClick={(e) => {
									changeTheme(theme);
									localStorage.setItem("theme", theme);
								}}
							>
								{theme[0].toUpperCase() + theme.slice(1)}
							</a>
						</li>
					</>
				))}
			</div>
		</div>
	);
}

export default Themes;