import { createContext, useState } from "react";

const HelloContext = createContext();

const HelloProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [food, setFood] = useState("");

  const addName = (e) => {
    e.preventDefault();
    const answer = e.target["name"].value;
    setName(answer);
    setCount(count + 1);
  };

  const addBirthday = (e) => {
    e.preventDefault();
    const answer = e.target["birthday"].value;
    setBirthday(answer);
    setCount(count + 1);
  };
  const addPronouns = (e) => {
    e.preventDefault();
    const answer = e.target["pronouns"].value;
    setPronouns(answer);
    setCount(count + 1);
  };

  const addFood = (e) => {
    e.preventDefault();
    const answer = e.target["food"].value;
    setFood(answer);
    setCount(count + 1);
  };

  return (
    <HelloContext.Provider
      value={{
        count,
        name,
        setName,
        birthday,
        setBirthday,
        pronouns,
        setPronouns,
        food,
        setFood,
        addName,
        addBirthday,
        addPronouns,
        addFood,
      }}
    >
      {children}
    </HelloContext.Provider>
  );
};

module.exports = { HelloProvider, HelloContext };
