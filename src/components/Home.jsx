import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <>
            {!isAuthenticated ? (
                <>
                    <h1>Home page will go here</h1>
                    <p>Please Login in or register in order to start planning your dream trip</p>
                </>
            ) : (
                <Profile />
            )}   
        </>
    )
}

export default Home;