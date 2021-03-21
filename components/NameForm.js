import { useContext } from "react";
import { HelloContext } from "../context/context";

export default function NameForm() {
  const { addName } = useContext(HelloContext);

  return (
    <form onSubmit={(e) => addName(e)}>
      <input type="text" id="name" name="name" maxLength="30" required></input>
      <button>Submit</button>
    </form>
  );
}
