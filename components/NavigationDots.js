import React from "react";
import Link from "next/link";

const NavigationDots = ({ active }) => {
	return (
		<div className="app__navigation">
			{["home", "about", "work", "skills", "testimonials", "contact"].map((item) => (
				<Link key={`link-mob-${item}`} href={`#${item}`}>
					<a className="app__navigation-dot" style={active === item ? { backgroundColor: "#313BAC" } : {}} />
				</Link>
			))}
		</div>
	);
};

export default NavigationDots;
