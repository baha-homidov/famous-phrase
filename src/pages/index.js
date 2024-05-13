import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import BlackButton from "@/components/BlackButton";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className={styles.index}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <h2>Добро Пожаловать</h2>
            <div className={styles.logo}>
              <h1>Famous</h1>
              <h1>Phrase</h1>
            </div>
          </div>
          <Link href="/main">
            <BlackButton buttonName="Начать" />
          </Link>
        </div>
        <div className={styles.sign}>
          Made with ❤️ by <Link href="https://bahahomidov.com">Baha</Link>
        </div>
      </div>
    </Layout>
  );
}
