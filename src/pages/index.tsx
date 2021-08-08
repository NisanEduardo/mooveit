import { GetServerSideProps } from 'next'
import { createContext } from 'react';

import { ChallangeBox } from "../components/ChallangeBox";
import CompletedChallangers from "../components/CompletedChallanges";
import { Countdown } from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import { ChallangesProvider } from '../contexts/ChallangesContext';
import { CountDownContext, CountDownContextProvider } from "../contexts/CountdownContext";

import styles from '../styles/pages/Home.module.css'

export default function Home( props ) {
    return (
        <ChallangesProvider
            level={ props.level }
            currentExperience={ props.currentExperience }
            challangesCompleted={ props.challangesCompleted }
        >
            <div className={ styles.container }>    
                <ExperienceBar/>

                <CountDownContextProvider>
                    <section>
                            <div>
                                <Profile />
                                <CompletedChallangers />
                                <Countdown />
                            </div>

                            <div>
                                <ChallangeBox />
                            </div>
                    </section>
                </CountDownContextProvider>
            </div>
        </ChallangesProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async ( ctx ) => {

    const { level, currentExperience, challangesCompleted } = ctx.req.cookies

    return {
        props: {
            level: Number( level ),
            currentExperience: Number( currentExperience ),
            challangesCompleted: Number( challangesCompleted )
        }
    }

}