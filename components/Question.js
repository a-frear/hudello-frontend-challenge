import { useContext } from "react";
import { HelloContext } from "../context/context";
import NameForm from "./NameForm";
import SelectDate from "./SelectDate";
import SelectPronouns from "./SelectPronouns";
import SelectFood from "./SelectFood";
import styles from "../styles/Home.module.css";

export default function Question() {
  const { count } = useContext(HelloContext);
  const { name } = useContext(HelloContext);

  const i = count;

  const questions = [
    {
      text: `What's your name?`,
      form: <NameForm />,
    },
    {
      text: `When's your birthday?`,
      form: <SelectDate />,
    },
    {
      text: `What are your pronouns?`,
      form: <SelectPronouns />,
    },
    {
      text: `Choose your favorite:`,
      form: <SelectFood />,
    },
    {
      text: `Thanks, ${name}!`,
      form: "",
    },
  ];
  return (
    <>
      <h2 className={styles.question}>{questions[i].text}</h2>
      {questions[i].form}
    </>
  );
}
