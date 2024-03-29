import { useContext, useState } from 'react'
import { ChallangesContext } from '../contexts/ChallangesContext'
import { CountDownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallangeBox.module.css'

export function ChallangeBox() {
    

    const { activeChallange, resetChallange, completeChallange } = useContext( ChallangesContext )
    const { resetCountdown } = useContext( CountDownContext )

    function handleCountdownSucceed() {
        completeChallange()
        resetCountdown()
    }

    function handleCountdownFailed() {
        resetChallange(),
        resetCountdown()
    }

    return (
        <div className={ styles.challangeBoxContainer } >
            { activeChallange ? (
                <div className={ styles.challangeActive }>
                    <header>
                        Ganhe { activeChallange.amount } xp
                    </header>

                    <main>
                        <img src={`icons/${ activeChallange.type }.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>
                            { activeChallange.description }
                        </p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={ styles.challangeFailedButton}
                            onClick={ handleCountdownFailed }
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={ styles.challangeSucceededButton}
                            onClick={ handleCountdownSucceed }
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={ styles.challangeNotActive} >
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios
                    </p>
                </div>
            )}
        </div>
    )

}