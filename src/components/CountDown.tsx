import { useContext } from 'react';
import { CountdownContext } from '../contexts/CoundownContext';
import styles from '../styles/components/CountDown.module.css';

export function CountDown() {

    const {minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown} = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    
    return (
        <div>
            <div className= { styles.countdownContainer }>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                disabled
                className={styles.countdownButton}>
                    Ciclo encerrado
                    <img src="icons/check_circle.svg"/>
                </button>
            ) : (
                <>
                { isActive ?
                    <button
                    type="button"
                    className={ `${styles.countdownButton} ${styles.coundownButtonActive}` }
                    onClick={ resetCountdown }>
                        Abandonar Ciclo
                        <img src="icons/close.svg"/>
                    </button>
                    :
                    <button
                    type="button"
                    className={ styles.countdownButton }
                    onClick={startCountdown}>
                        Iniciar um ciclo
                    </button>
                }
                </>
            )}
        </div>
    );
}