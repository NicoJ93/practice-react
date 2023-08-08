import './App.css'

export function App() {
    return (
        <article className='ds-profileCard'>
            <header className='ds-profileCard-header'>
                <img 
                className='ds-followCard-avatar' 
                alt='Avatar de canal recomendado'
                src='https://unavatar.io/twitter/kikobeats'/>
                <div className='ds-followCard-info'>
                    <strong>Todo sobre River</strong>
                    <span className='ds-followCard-infoUsername'>@TodoRiver</span>
                </div>
            </header>
            <aside>
                <button>
                    Unirse
                </button>
            </aside>
        </article>
        
    )
}
