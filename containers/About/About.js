import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

import { images } from "../../constants";
import styles from "./About.module.scss";

const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"]';

		client.fetch(query).then((data) => {
			setAbouts(data);
		});
	}, []);
	/*const abouts = [
		{ title: "Web Development", description: "I am a good developer", imgUrl: images.about01.src },
		{ title: "Web Design", description: "I am a good developer", imgUrl: images.about02.src },
		{ title: "UI/UX", description: "I am a good developer", imgUrl: images.about03.src },
		{ title: "Web Animations", description: "I am a good developer", imgUrl: images.about04.src },
	];*/
	return (
		<>
			<h2 className="head-text">
				I Know that <span>Good Apps</span>
				<br />
				means <span>Good Bussiness</span>
			</h2>

			<div className={styles.app__profiles}>
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opaciy: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: "tween" }}
						className={styles.app__profiles__item}
						key={about.title + index}>
						<img src={urlFor(about.imgUrl)} alt={about.title} />
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(MotionWrap(About, styles.app__about), "about", "app__whitebg");
