import './App.css'
import {DiscordFollowCard} from './DiscordFollowCard.jsx'

const users = [
    {
        userName: 'TodoSobreRiver',
        name: 'Todo sobre River',
        isFollowing: false
    },
    {
        userName: 'GallardoEterno',
        name: 'Gracias Muñeco',
        isFollowing: true
    },
    {
        userName: 'riverplate',
        name: 'River Plate Oficial',
        isFollowing: false
    }
]

export function App() {
    return (
        <section className='App'> {/* Esta expresión reemplaza a React.Fragment */} 
           {
           users.map( user => {
            const {userName, name, isFollowing} = user
            return(
                <DiscordFollowCard 
                key={userName}
                userName={userName} 
                initialIsFollowing={isFollowing}>
                    {name}
                </DiscordFollowCard>
            )
           })
            }
        </section>
    )
}
