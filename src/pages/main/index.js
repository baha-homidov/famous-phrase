import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Main.module.css";
import Layout from "@/components/Layout";
import quotes from "@/lib/data";
import { useState } from "react";
import BlackButton from "@/components/BlackButton";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
export default function Home() {
  const [currentLang, setCurrentLang] = useState("en");
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <Layout>
      <div className={styles.index}>
        <div className={styles.container}>
          <div className={styles.quoteContainer}>
            <div className={styles.languageSelector}>
              <button
                className={currentLang == "ru" ? styles.active : ""}
                onClick={() => {
                  setCurrentLang("ru");
                }}
              >
                РУС
              </button>
              <button
                className={currentLang == "en" ? styles.active : ""}
                onClick={() => {
                  setCurrentLang("en");
                }}
              >
                ENG
              </button>
            </div>
            <div className={styles.text}>
              {currentLang == "en"
                ? quotes[currentIndex].textEn
                : quotes[currentIndex].textRu}
            </div>
            <div className={styles.author}>
              {currentLang == "en"
                ? quotes[currentIndex].nameEn
                : quotes[currentIndex].nameRu}
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <BlackButton
              onClick={() => {
                console.log(currentIndex);
                if (currentIndex > 0) {
                  setCurrentIndex(currentIndex - 1);
                } else {
                  setCurrentIndex(quotes.length - 1);
                }
              }}
              buttonName="◀"
            />
            <BlackButton
              onClick={() => {
                console.log(currentIndex);

                if (currentIndex < quotes.length - 1) {
                  setCurrentIndex(currentIndex + 1);
                } else {
                  setCurrentIndex(0);
                }
              }}
              buttonName="Следующая цитата"
            />
          </div>
        </div>
        <div className={styles.sign}>
          Made with ❤️ by <Link href="https://bahahomidov.com">Baha</Link>
        </div>
      </div>
    </Layout>
  );
}
