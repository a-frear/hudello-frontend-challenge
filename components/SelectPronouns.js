import { useContext } from "react";
import { HelloContext } from "../context/context";

export default function selectPronouns() {
  const { addPronouns } = useContext(HelloContext);
  return (
    <form onSubmit={(e) => addPronouns(e)}>
      <select name="pronouns" id="pronouns">
        <option value="They/them">They/Them</option>
        <option value="She/her">She/Her</option>
        <option value="He/him">He/Him</option>\
      </select>
      <button>Submit</button>
    </form>
  );
}
