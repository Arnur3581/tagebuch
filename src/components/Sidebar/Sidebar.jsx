import styles from "./Sidebar.module.css";

export const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<h1>Mein Tagebuch</h1>
			<button>+ Erstellen</button>
			<ul></ul>
		</div>
	);
};
