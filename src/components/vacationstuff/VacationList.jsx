import { useEffect, useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


const VacationList = ({reload}) => {
    const { user } = useAuth0();
    const guest_name = user.name;
    const [vacationDates, setVacationDates] = useState([]);


    useEffect(() => {
        (async () => {
            const vacationData = await fetch(`http://127.0.0.1:3000/vacations/${guest_name}`).then(response => response.json());
            console.log("at vacationList vacationData is: ", vacationData)
            setVacationDates(vacationData);
        })();
    },[reload, guest_name])

    return (
        <>
            {!!vacationDates.length ? (
                <>
                    <Route exact path="/">
                        <div className="Vacaction-prof-list">
                        <ul >
                            {vacationDates.map((vacation, index) => (
                                <li key={index}>
                                    <Link to={`/vacation/${vacation.id}`}>{vacation.v_name}</Link>
                                </li>
                            ))}
                        </ul>
                        </div>
                    </Route>
                </>
        ) : (
            <p>Loading Vacations list ....</p>
        )}
        </>
    )
}

export default VacationList;