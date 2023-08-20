import { useState } from "react";

export function DiscordFollowCard ({children, userName, initialIsFollowing}) {
    
    /* State devuelve un array con dos valores: en la primera posición el valor del estado (isFollowing), y en la segunda posición una función que nos permite actualizar el estado (setIsFollowing) */
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    /* const state = useState(false)
    const isFollowing = state[0]
    const setIsFollowing = state [1] */

    const text = isFollowing ? 'Siguiendo' : 'Seguir' /* Si estoy siguiendo -> ver el primer texto SINO ver el segundo */
    const buttonClassName = isFollowing
    ? 'ds-followCard-button is-following'
    : 'ds-followCard-button'

    const handleClick = () => { /* Al hacer click en el botón */
        setIsFollowing(!isFollowing) /* Invertimos el valor de isFollowing */
    }

    return (
        <article className='ds-profileCard'>
            <header className='ds-profileCard-header'>
                <img 
                className='ds-followCard-avatar' 
                alt='Avatar de canal recomendado'
                src={`https://unavatar.io/twitter/${userName}`}/>
                <div className='ds-followCard-info'>
                    <strong>{children}</strong>
                    <span className='ds-followCard-infoUsername'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="ds-followCard-text">{text}</span>
                    <span className="ds-followCard-stop">Salir del canal</span>
                </button>
            </aside>
        </article>
    )
}