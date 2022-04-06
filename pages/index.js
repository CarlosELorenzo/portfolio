import Head from "next/head";
import Image from "next/image";
import styles from "../styles/App.module.scss";

import { About, Footer, Header, Skills, Testimonials, Work } from "../containers";
import { Navbar } from "../components";

export default function Home() {
	return (
		<div className={styles.app}>
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Testimonials />
			<Footer />
		</div>
	);
}
