import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const NewVacationForm = ({ handleReload }) => {
    const { user } = useAuth0();
    const [guestName, setGuestName] = useState('');
    const [vName, setVName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    
    const _handleVNameChange = (e) => {
        setVName(e.target.value);
    }
    const _handleStartDateChange = (e) => {
        setStartDate(e.target.value)
        setGuestName(user.name);
    }
    const _handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    }

    const _handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = 'http://127.0.0.1:3000/vacations/add'
        const submitResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ v_name: vName, guest_name: guestName, start_date: startDate, end_date: endDate })
        }).then(
            (response) => response
        );
        setGuestName('');
        setStartDate('');
        setEndDate('');

        if (submitResponse.status === 200) {
            handleReload(true)
        }
    }
    return (
        <div className="Vacation-list">
            <h1>
                Lets start planning out that vacation you have been longing for
            </h1>
            <form className="Vacation-list-form" onSubmit={_handleSubmit}>
                <>
                <label className="VL-label-1">
                    Name your Itinerary
                    <input 
                    type="text"
                    name="v_name"
                    value={vName}
                    onChange={_handleVNameChange} 
                    required/>
                </label>
                </>
                <label className="VL-label-2">
                    Start Date yyyy-mm-dd
                    <input 
                    type="date"
                    name="start_date"
                    value={startDate}
                    onChange={_handleStartDateChange} 
                    required/>
                </label>
                <label className="VL-label-3">
                    End Date yyyy-mm-dd
                    <input 
                    type="date"
                    name="end_date"
                    value={endDate}
                    onChange={_handleEndDateChange} 
                    required/>
                </label>
                <button
                    type="submit">
                    Start
            </button>
            </form>
        </div>
    )
}
export default NewVacationForm;