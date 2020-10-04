import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Tag = () => {
	const router = useRouter();
	const [tag, setTag] = useState("DiscordProfile");

	useEffect(() => {
		if (router.query.tag) {
			const username = router.query.tag;
			const discrim = window.location.hash || "";
			const user = username + discrim;

			setTag(user);

			if (
				!user.split("#")[0] ||
				user.split("#")[0].length < 2 ||
				user.split("#")[0].length > 32 ||
				!user.split("#")[1] ||
				isNaN(user.split("#")[1]) ||
				user.split("#")[1].length !== 4
			)
				return router.push("/");
		}
	}, [router.query.tag]);

	return (
		<div className={styles.container}>
			<Head>
				<title>{tag}</title>
				<link rel="icon" href="/logo.png" />
			</Head>

			<main className={styles.main}>hello {tag}</main>

			<a href="https://ejer.ga">
				<footer className={styles.footer}>Made by ejer</footer>
			</a>
		</div>
	);
};

export default Tag;
