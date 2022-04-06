import { useState } from "react";
import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "./../../client";
import styles from "./Footer.module.scss";

const Footer = () => {
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });
	const [isFormSubmited, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);
		const contact = {
			_type: "contact",
			name: name,
			email: email,
			message: message,
		};

		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		});
	};

	return (
		<>
			<h2 className="head-text">Take a coffe & chat with me.</h2>
			<div className={styles.app__footer__cards}>
				<div className={styles.app__footer__card}>
					<img src={images.email.src} alt="email" />
					<a href="mailto:ce.lorenzol@gamil.com" className="p-text">
						ce.lorenzol@gmail.com
					</a>
				</div>
				<div className={styles.app__footer__card}>
					<img src={images.mobile.src} alt="mobile" />
					<a href="tel: +34 (635) 88 84 18" className="p-text">
						+34 (635) 88 84 18
					</a>
				</div>
			</div>

			{!isFormSubmited ? (
				<div className={`${styles.app__footer__form} app__flex`}>
					<div className="app__flex">
						<input
							className="p-text"
							type="text"
							placeholder="Your Name"
							name="name"
							value={name}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="app__flex">
						<input
							className="p-text"
							type="email"
							placeholder="Your Email"
							name="email"
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							className="p-text"
							placeholder="Your Message"
							value={message}
							name="message"
							onChange={handleChangeInput}
						/>
					</div>
					<button type="button" className="p-text" onClick={handleSubmit}>
						{!loading ? "Send Message" : "Sending..."}
					</button>
				</div>
			) : (
				<div>
					<h3 className="head-text">Thank you for getting in touch!</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(MotionWrap(Footer, styles.app__footer), "contact", "app__whitebg");
