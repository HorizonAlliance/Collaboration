import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    HomePage
                </p>
            </div>

            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/RC.png"
                    alt="Next.js Logo"
                    width={280}
                    height={280}
                    style={{ borderRadius: '50%' }}
                    priority
                />
            </div>
        </main>
    );
}
