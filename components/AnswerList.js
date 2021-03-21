import { useContext } from "react";
import { HelloContext } from "../context/context";
import styles from "../styles/Home.module.css";

export default function AnswerList() {
  const { name } = useContext(HelloContext);
  const { birthday } = useContext(HelloContext);
  const { pronouns } = useContext(HelloContext);
  const { food } = useContext(HelloContext);

  const response = [];

  if (name !== "") {
    response.push({
      id: 1,
      text: `Nice to meet you, ${name}! 😎`,
    });
  }

  if (birthday !== "") {
    response.push({
      id: 2,
      text: `${birthday}. Great day. 🌈`,
    });
  }

  if (pronouns !== "") {
    response.push({
      id: 3,
      text: `Got it. ${pronouns}. ✅`,
    });
  }

  if (food !== "") {
    response.push({
      id: 4,
      text: `${food}. 🤤`,
    });
  }

  return response.map((r) => (
    <li className={styles.answerListItem} key={r.id}>
      {r.text}
    </li>
  ));
}
