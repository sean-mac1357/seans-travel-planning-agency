import { Route, Link, useParams } from 'react-router-dom'
import { useState } from 'react';


const HotelSearch = () => {
    const { id } = useParams();
    console.log("at hotelSearch id is: ", id)
    const [hplace, setHPlace] = useState('');
    const [hotels, setHotels] = useState([]);


    const _handleHPlaceChange = (e) => {
        setHPlace(e.target.value);
    }

    const _handleSubmit = async (e) => {
        e.preventDefault();
        console.log('hplace:', hplace);
        const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?radius=10000&language=en&type=lodging&query=hotels+in+${hplace}&key=AIzaSyDKGKZEtAeEqAwLsp7ao4Ppq3pLPhUYHQM`
        const submitResponse = await fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .catch((e) => {
                console.log(e);
            });
        console.log("hotel Data is: ", submitResponse);
        setHotels(submitResponse.results);
    }

    return (
        <>
            <form onSubmit={_handleSubmit}>
                <label>
                    <input 
                    type="text"
                    name="hplace"
                    value={hplace}
                    onChange={_handleHPlaceChange}/>
                </label>
                <button
                type='submit'>
                    Search
                </button>
            </form>
            {!!hotels.length ? (
                <>
                    <Route exact path="/vacation/:id">
                        <ul className="Hotel-list">
                            {hotels.map((hotel, index) => (
                                <li key={index}>
                                    <Link to={`/hotel/${hotel.name}`}>
                                        <h1>{hotel.name}</h1>
                                    </Link>
                                    <p>{hotel.formatted_address}</p>
                                    <p>Rated at: {hotel.rating} <sup>★'s</sup></p>
                                </li>
                            ))}
                        </ul>
                    </Route>
                </>
            ) : (
                <p>No searches have occurred</p>
            )}
        </>
    )
}

export default HotelSearch;