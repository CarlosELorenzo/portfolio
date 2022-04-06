import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className={styles.app__navbar}>
			<div className={styles.app__navbar__logo}>
				<img src={images.logo.src} alt="logo" />
			</div>
			<ul className={styles.app__navbar__links}>
				{["home", "about", "work", "skills", "contact"].map((item) => (
					<li className="app__flex p-text" key={`link-${item}`}>
						<div />
						<Link href={`#${item}`}>
							<a>{item}</a>
						</Link>
					</li>
				))}
			</ul>

			<div className={styles.app__navbar__menu}>
				<HiMenuAlt4 onClick={() => setToggle(true)} />
				{toggle && (
					<motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.5, ease: "easeInOut" }}>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{["home", "about", "work", "skills", "contact"].map((item) => (
								<li className="app__flex p-text" key={`link-mob-${item}`}>
									<Link href={`#${item}`}>
										<a onClick={() => setToggle(false)}>{item}</a>
									</Link>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
