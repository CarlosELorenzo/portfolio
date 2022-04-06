import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "./../../client";

import styles from "./Skills.module.scss";
import ReactTooltip from "react-tooltip";

const Work = ({ work }) => {
	const [hideTooltip, setHideTooltip] = useState(true);
	return (
		<React.Fragment key={"experience-" + work.name}>
			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className={`${styles.app__skills__exp__work} app__flex`}
				onMouseEnter={() => setHideTooltip(false)}
				onMouseLeave={() => setHideTooltip(true)}
				data-tip
				data-for={work.name}>
				<h4 className="bold-text"> {work.name}</h4>
				<p className="p-text"> {work.company}</p>
			</motion.div>
			<div style={{ opacity: hideTooltip ? 0 : 1, transition: "0.5s ease" }}>
				<ReactTooltip id={work.name} effect="solid" arrowColor="#fff" className={styles.skills__tooltip}>
					{work.desc}
				</ReactTooltip>
			</div>
		</React.Fragment>
	);
};

const Skills = () => {
	const [experience, setExperience] = useState([]);
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		const query = '*[_type == "experiences"]';
		const skillsQuery = '*[_type == "skills"]';

		client.fetch(query).then((data) => {
			setExperience(data);
			console.log(data);
		});
		client.fetch(skillsQuery).then((data) => {
			setSkills(data);
		});
	}, []);

	return (
		<>
			<h2 className="head-text">Skills & Experience</h2>

			<div className={styles.app__skills__container}>
				<motion.div className={styles.app__skills__list}>
					{skills.map((skill) => (
						<motion.div
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className={`${styles.app__skills__item} app__flex`}
							key={skill.name}>
							<div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
								<img src={urlFor(skill.icon)} alt={skill.name} />
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>
				<motion.div className={styles.app__skills__exp}>
					{experience.map((experience) => (
						<motion.div className={styles.app__skills__exp__item} key={experience.year}>
							<div className={styles.app__skills__exp__year}>
								<p className="bold-text">{experience.year}</p>
							</div>
							<motion.div className={styles.app__skills__exp__works}>
								{experience?.works?.map((work) => (
									<Work work={work} />
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default AppWrap(MotionWrap(Skills, styles.app__skills), "skills", "app__whitebg");
