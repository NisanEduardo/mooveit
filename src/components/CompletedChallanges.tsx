import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallangesContext'
import styles from '../styles/components/CompletedChallangers.module.css'

export default function CompletedChallangers() {
    const { challangesCompleted } = useContext( ChallangesContext )
    return (
        <div className={ styles.completedChallangersContainer } >
            <span>Desafios completos</span>
            <span>{ challangesCompleted }</span>
        </div>
    )
}