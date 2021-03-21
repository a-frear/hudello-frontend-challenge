import { useContext } from 'react'
import { HelloContext } from '../context/context'
import styles from '../styles/Home.module.css'

export default function selectFood() {
    const { addFood } = useContext(HelloContext)
    return (
        <form onSubmit={(e) => addFood(e)} >
        <select className={styles.food} name="food" id="food">
            <option value="Ice creeeeeam">🍦</option>
            <option value="Pizzaaaa">🍕</option>
            <option value="Tacoooos">🌮 </option>
            <option value="Salaaaaad">🥗</option>
            <option value="Dumplingssss">🥟</option>
            <option value="Bagellll">🥯</option>
            <option value="Fruuuuuuit">🍓</option>
        </select>
       <button>Submit</button>
       </form>
    )
}