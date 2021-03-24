import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import {
    Menu,
    MenuLabel,
    MenuList,
    MenuLink
} from 'bloomer';
import NewVacationForm from './vacationstuff/NewVacationForm';
import VacationList from './vacationstuff/VacationList';
import { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';


const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const [reload, setReload] = useState(false);
    const history = useHistory();

    const handleReload = (status) => {
      setReload(status);
    }
    return (
        isAuthenticated && (
            <>
            <div className="container-prof">
                <div className="lft-menu">
                    <Menu isDisplay={'inline-block'}>
                        <MenuLabel>General</MenuLabel>
                        <MenuList>
                            <li><MenuLink>Dashboard</MenuLink></li>
                            <li><MenuLink></MenuLink></li>
                        </MenuList>
                        <MenuLabel>Manage Your Vacations</MenuLabel>
                        <MenuList>
                            <li><MenuLink>Dates</MenuLink></li>
                            <li><MenuLink>Vacations</MenuLink></li>
                            <li><MenuLink>Hotels</MenuLink></li>
                            <li><MenuLink></MenuLink></li>
                        </MenuList>
                    </Menu>
                </div>
                <div className="Picture-prof">
                    <img src={user.picture} alt={user.name} />
                </div>
                <div className="Name-prof">
                    <h2>{user.name}</h2>         
                </div>
                <NewVacationForm handleReload={handleReload} />
            </div>
            <Route>
                <VacationList reload={reload}/>
                <button
                    type="button" onClick={() => history.goBack()}>Go Back</button>
            </Route>

            {/* <JSONPretty data={user} /> */}
            </>
        )
    )
}

export default Profile;