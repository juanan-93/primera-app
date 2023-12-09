
import { useState } from "react"
export function TwitterFollowCard({ userName, name}) {

    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    
    const handleClick = () => setIsFollowing(!isFollowing)

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>

                <img className='tw-followCard-avatar' alt='El avatar de juanan' src={`https://unavatar.io/${userName}`} />

                <div className='tw-followCard-info'>

                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUsername'>@{userName}</span>

                </div>

            </header>

            <aside>

                <button onClick={handleClick} className={buttonClassName}>
                    {text}
                </button>

            </aside>

        </article>
    )
}