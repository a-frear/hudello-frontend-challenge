import { useContext } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { HelloContext } from "../context/context";
import Question from "../components/Question";
import AnswerList from "../components/AnswerList";

export default function Home() {
  const { count } = useContext(HelloContext);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        />
        <title>Hello!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p className={styles.robothead}>🤖</p>
        <section className={styles.speechbubble}>
          <h1 className={styles.title}>Hey there!</h1>
          <p className={styles.robotvoice}>
            My name is Hudello Bot.
          </p>
          <ul className={styles.answerList}>
            <AnswerList />
          </ul>
          <section className={count === 0 ? styles.show : styles.hide}>
            <Question />
          </section>
          <section className={count === 1 ? styles.show : styles.hide}>
            <Question />
          </section>
          <section className={count === 2 ? styles.show : styles.hide}>
            <Question />
          </section>
          <section className={count === 3 ? styles.show : styles.hide}>
            <Question />
          </section>
          <section className={count === 4 ? styles.show : styles.hide}>
            <Question />
          </section>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
