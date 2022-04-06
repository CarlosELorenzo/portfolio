import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

import styles from "./Header.module.scss";
import MotionWrap from "./../../wrapper/MotionWrap";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

const Header = () => {
	return (
		<div className={styles.home + " app__flex " + styles.app__header}>
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className={styles.app__header__info}>
				<div className={styles.app__header__badge}>
					<div className={styles.badge_cmp + " app__flex"}>
						<span>👋</span>
						<div>
							<p className="p-text">Hello, I am</p>
							<h1 className="head-text">Carlos</h1>
						</div>
					</div>

					<div className={styles.tag_cmp + " app__flex"}>
						<div>
							<p className="p-text">Web Developer</p>
							<p className="p-text">Student</p>
						</div>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className={styles.app__header__img}>
				<img className={styles.profile__img} src={images.profile.src} alt="profile_bg" />
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					src={images.circle.src}
					alt="profile_circle"
					className={styles.overlay_circle}
				/>
			</motion.div>

			<motion.div
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className={styles.app__header__circles}>
				{[images.flutter.src, images.redux.src, images.sass.src].map((circle, index) => (
					<div className="circle-cmp app__flex" key={`circle-${index}`}>
						<img src={circle} alt="profile_bg" />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrap(MotionWrap(Header, styles.app__header), "home");
