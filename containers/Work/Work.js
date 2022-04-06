import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "./../../client";

import styles from "./Work.module.scss";

const Work = () => {
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

	useEffect(() => {
		const query = '*[_type == "works"]';

		client.fetch(query).then((data) => {
			setWorks(data);
			setFilterWork(data);
		});
	}, []);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (item === "All") {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};
	return (
		<>
			<h2 className="head-text">
				My Creative <span>Portfolio</span> section
			</h2>
			<div className={styles.app__work__filter}>
				{["UI/UX", "Web App", "Mobile App", "ReactJS", "All"].map((item, index) => (
					<div
						key={index}
						onClick={() => handleWorkFilter(item)}
						className={`${styles.app__work__filter__item} app__flex p-text ${
							activeFilter === item ? styles.item__active : ""
						}`}>
						{item}
					</div>
				))}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className={styles.app__work__portfolio}>
				{filterWork.map((work, index) => (
					<div className={`${styles.app__work__item} app__flex`} key={index}>
						<div className={`${styles.app__work__img} app__flex`}>
							<img src={urlFor(work.imgUrl)} alt={work.name} />
							<motion.div
								whileHover={{ opacity: [0, 1] }}
								transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
								className={`${styles.app__work__hover} app__flex`}>
								<a href={work.projectLink} target="_blank">
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex">
										<AiFillEye />
									</motion.div>
								</a>
								<a href={work.codeLink} target="_blank">
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex">
										<AiFillGithub />
									</motion.div>
								</a>
							</motion.div>
						</div>
						<div className={`${styles.app__work__content} app__flex`}>
							<h4 className="bold-text">{work.title}</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{work.description}
							</p>

							<div className={`${styles.app__work____tag} app__flex`}>
								<p className="p-text">{work.tags[0]}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</>
	);
};

export default AppWrap(MotionWrap(Work, styles.app__works), "work", "app__primarybg");
