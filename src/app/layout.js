import { Inter } from "next/font/google";
import "./globals.css";
import News from "@/component/News";
import Sidebar from "@/component/Sidebar";
import styles from "./RootLayout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Horizon Alliance",
    description: "Generated by RCGroup",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className={styles.container}>
                    <div className={styles.sidebar}>
                        <Sidebar />
                    </div>
                    <div className={styles.content}>{children}</div>
                    <div className={styles.news}>
                        <News />
                    </div>
                </div>
            </body>
        </html>
    );
}
