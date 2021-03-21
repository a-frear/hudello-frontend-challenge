import { useContext } from 'react'
import { HelloContext } from '../context/context'
import NameForm from './NameForm'
import SelectDate from './SelectDate'
import SelectPronouns from './SelectPronouns'
import SelectFood from './SelectFood'
import styles from '../styles/Home.module.css'

export default function Question() {

    const { count } = useContext(HelloContext)
    const { name } = useContext(HelloContext)

    const i = count
 
    
    const questions = [
        {
            questionText: `What's your name?`,
            form: <NameForm />
        },
        {
            questionText: `When's your birthday?`,
            form: <SelectDate />
        },
        {
            questionText: `What are your pronouns?`,
            form: <SelectPronouns />
        },
        {
            questionText: `Choose your favorite:`,
            form: <SelectFood />
        },
        {
            questionText: `Thanks, ${name}!`,
            form: ''

        }
    ]
    return (
        <>
        <h2 className={styles.question}>{questions[i].questionText}</h2>
        {questions[i].form}
        </>

    )
}