import { useState } from 'react';
import Home from './Home';
import About from './About';
import VacationDetails from './vacationstuff/VacationDetails';
import VacationList from './vacationstuff/VacationList';
import HotelDetails from './travelsearch/HotelDetails';
import { Route, Switch, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
    const [reload, setReload] = useState(false)
    const [vacationId, setVacationId] = useState('')
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const _handleReload = (status) => {
        setReload(status => !status ) 
    }

    const _handleVacationId = (vacationId) => {
        setVacationId(vacationId)
    }

    return (
        <>
            <header className="App-header">
                <nav className="Nav-header">
                    <Link to="/">Home⍟</Link>
                    <Link to="/about">About✍︎</Link>
                    {!isAuthenticated && (
                        <Link to="/" onClick={() => loginWithRedirect()}>
                            Login⌘
                        </Link>)}
                    {isAuthenticated && (
                        <Link to="/" onClick={() => logout()}>
                            Logout⌫
                        </Link>)}
                </nav>
                <h1>Mac's Travel Itineraries</h1>
                <p>Map out your perfect getaway with this awesome itinerary builder</p>
            </header>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/vacations">
                    <VacationList />
                </Route>
                <Route path="/vacation/:id" >
                    <VacationDetails handleVacationId={_handleVacationId} reload={reload} />
                </Route>
                <Route path="/vacation/:day" >
                    
                </Route>
                <Route path="/hotel/:hotel_name">
                    <HotelDetails vacationId={vacationId} handleReload={_handleReload} />
                </Route>
            </Switch>
        </>
    )
}

export default NavBar;