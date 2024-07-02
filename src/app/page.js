import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className="welcome-banner">
                <h1>Welcome Back</h1>
                <p>Select some topics to help personalize your experience on X, starting by finding others to follow.</p>
                <button className="start-button">Start</button>
            </div>
            <div className="post">
                <p><strong>sir. zl | bpkoo</strong></p>
                <p>“mas galon”</p>
                <p>jhdfjksahfjkahsdlkfjhlkaskjvjkvbkjdbfjkbsadjfkksabnjkasfsafioashfioashfioshadiofh</p>
                <div className="post-images">
                    <Image src="" alt="Chat Screenshot 1" />
                    <Image src="" alt="Chat Screenshot 1" />
                </div>
            </div>
        </main>
    );
}
