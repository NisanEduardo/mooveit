import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallangesContext'
import styles from '../styles/components/Profile.module.css'

export default function Profile() {

    const { level } = useContext( ChallangesContext )

    return (
        <div className={ styles.profileContainer }>
            <img src="https://github.com/NisanEduardo.png" alt="Eduarrdo Leite"/>
            <div>
                <strong>Eduardo Leite</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }
                </p>
            </div>

        </div>
    )

}