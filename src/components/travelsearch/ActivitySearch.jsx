import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ActivitySearch = ({vacation}) => {
    console.log("vacation at activitySearch: ", vacation)
    const { id } = useParams();
    const [day, setDay] = useState();
    const [days, setDays] = useState();

    const _handleDayChange = (e) => {
        setDay(e.target.value);
        setDays(vacation[0].days-1)
    }

    const _handleSubmitDay = async (e) => {
        e.preventDefault()
        const apiUrl = 'http://127.0.0.1:3000/itinerary/add'
        const submitResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ day: day, vacation_id: id })
        }).then(
            (response) => response
        );
        if (submitResponse.status === 200) {
            const apiUrl2 = 'http://127.0.0.1:3000/itinerary/updateDays'
            await fetch(apiUrl2, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, days: days })
        }).then(
            (response) => response
        );
        }
        setDay('');
    }


    return (
        <div className="Activity-form">
            <h1>
                Which day are we going to start scheduling for?
            </h1>
            <form onSubmit={_handleSubmitDay}>
                <>
                    <label>
                        <input 
                        type="number"
                        name="day"
                        value={day}
                        onChange={_handleDayChange}
                        required/>
                    </label>
                    <button 
                        type="submit">
                        Submit
                    </button>
                </>
            </form>
        </div>
    )
}

export default ActivitySearch;