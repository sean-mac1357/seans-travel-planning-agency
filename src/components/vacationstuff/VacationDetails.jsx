import { useParams } from 'react-router-dom';
import HotelSearch from '../travelsearch/HotelSearch';
import ActivitySearch from '../travelsearch/ActivitySearch';
import ActivityPlanner from '../travelsearch/ActivityPlanner';
import { useEffect, useState } from 'react';


const VacationDetails = ({reload, handleVacationId}) => {

    const { id } = useParams();
    const [vacation, setVacation] = useState([]);
    const [hotelStatus, setHotelStatus] = useState('');
    const [vacationDays, setVacationDays] = useState();

    useEffect(() => {
        (async () => {
            const vacationData = await fetch(`http://127.0.0.1:3000/itinerary/${id}`).then(response => response.json());
            console.log('at vacation details hotel name: ', vacationData[0].name_hotel)
            setHotelStatus(vacationData[0].name_hotel)
            setVacationDays(vacationData[0].days)
            setVacation(vacationData)
            handleVacationId(id)
        })();

    },[id, reload, handleVacationId])

    return (
        <>
            {hotelStatus === null ? (
                <div className="Vacation-details">
                    <h1>
                        lets start with where you would like to visit.
                    </h1>
                    <p>Please enter a location so we can supply you with a list of hotels to choose from</p>
                    <HotelSearch vacation={vacation}/>
                </div>
            ) : (
                <>
                </>
            )}
            {vacationDays !== 0 && hotelStatus !== null? (
                <div className="Activity-details">
                    <h1>
                        lets setup which day you want to have activities for
                    </h1>
                    <ActivitySearch vacation={vacation} />
                </div>
            ) : (
                <>
                </>
            )}
            {vacationDays === 0 && hotelStatus !== null ? (
                <div className="Activity-planner">
                    <h1>
                        lets setup the activities
                    </h1>
                    <ActivityPlanner vacation={vacation} />
                </div>
            ) : (
                <>
                </>
            )}
        </>
    )
}
export default VacationDetails;