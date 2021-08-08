import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallangesContext } from "./ChallangesContext";

interface CountDownContextData {
    minutes: number
    seconds: number
    hasFinished: boolean
    isActive: boolean
    startCountdown: () => void
    resetCountdown: () => void
}

interface CountDownProviderProps {
    children: ReactNode
}

export const CountDownContext = createContext({} as CountDownContextData )

let countdownTimeout: NodeJS.Timeout

export function CountDownContextProvider({ children } : CountDownProviderProps) {

    const { startNewChallange } = useContext( ChallangesContext )

    const [time, setTime] = useState(0.05 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(0.05 * 60)
        setHasFinished( false )
    }

    useEffect(() => {

        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);

        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallange()
        }
    }, [isActive, time])

    return (
        <CountDownContext.Provider
            value={{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCountdown,
                resetCountdown,
            }}
        > 
            { children }
        </CountDownContext.Provider>
    )
}