import { useState } from 'react';
import {
    Dropdown,
    DropdownTrigger,
    Button,
    span,
    Icon,
    DropdownMenu,
    DropdownContent,
    DropdownItem
} from 'bloomer';

const ActivityPlanner = ({vacation}) => {
    console.log("activityPlanner : ", vacation);
    const [breakfastChoices, setBreakfastChoices] = useState([]);
    const [breakfast, setBreakfast] = useState([]);
    let [breakfastActivity, setBreakfastActivity] = useState('');
    const [morningAChoices, setMorningAChoices] = useState([]);
    const [morningA, setMorningA] = useState([]);
    let [morningActivity, setMorningActivity] = useState('');
    const [lunchChoices, setLunchChoices] = useState([]);
    const [lunch, setLunch] = useState([]);
    let [lunchActivity, setLunchActivity] = useState('');
    const [afternoonAChoices, setAfternoonAChoices] = useState([]);
    const [afternoonA, setAfternoonA] = useState([]);
    let [afternoonActivity, setAfternoonActivity] = useState('');
    const [dinnerChoices, setDinnerChoices] = useState([]);
    const [dinner, setDinner] = useState([]);
    let [dinnerActivity, setDinnerActivity] = useState('');
    const [eveningAChoices, setEveningAChoices] = useState([]);
    const [eveningA, setEveningA] = useState([]);
    let [eveningActivity, setEveningActivity] = useState('');
    console.log("breakfast is: ", breakfast)

    const _handleSubmitBreakfastChoices = async (e) => {
        e.preventDefault();
        console.log("submitted breakfast");
        const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${vacation[0].hotel_lat}, ${vacation[0].hotel_lon}&radius=15000&type=${breakfast}&keyword=${vacation[0].name_hotel}&key=AIzaSyDKGKZEtAeEqAwLsp7ao4Ppq3pLPhUYHQM`
        console.log(apiUrl)
        const submitResponse = await fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .catch((e) => {
                console.log(e);
            });
        console.log("breakfast Data is", submitResponse)
        setBreakfastChoices(submitResponse.results)
    }
    const _handleBreakfastChange = async (e) => {
        setBreakfast(e.target.value)
    }
    const _handleClickBreakfast = async (e) => {
        setBreakfastActivity(e.target.value)
        console.log("breakfast activity is: ", breakfastActivity)
    }
    const _handleSubmitMorningAChoices = async (e) => {
        e.preventDefault();
        console.log();
        const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${vacation[0].hotel_lat}, ${vacation[0].hotel_lon}&radius=15000&type=${morningA}&keyword=${vacation[0].name_hotel}&key=AIzaSyDKGKZEtAeEqAwLsp7ao4Ppq3pLPhUYHQM`
        const submitResponse = await fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .catch((e) => {
                console.log(e);
            });
        console.log("Morning Activities are: ", submitResponse)
        setMorningAChoices(submitResponse.results)
    }
    const _handleMorningAChange = async (e) => {
        setMorningA(e.target.value)
    }
    const _handleClickMorningA = async (e) => {
        setMorningActivity(e.target.value)
        console.log("breakfast activity is: ", morningActivity)
    }
    const _handleSubmitLunchChoices = async (e) => {
        e.preventDefault();
        console.log();
        const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${vacation[0].hotel_lat}, ${vacation[0].hotel_lon}&radius=15000&type=${lunch}&keyword=${vacation[0].name_hotel}&key=AIzaSyDKGKZEtAeEqAwLsp7ao4Ppq3pLPhUYHQM`
        const submitResponse = await fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .catch((e) => {
                console.log(e);
            });
        console.log("lunch: ", submitResponse)
        setLunchChoices(submitResponse.results)
    }
    const _handleLunchChange = async (e) => {
        setLunch(e.target.value)
    }
    const _handleClickLunch = async (e) => {
        setLunchActivity(e.target.value)
        console.log("breakfast activity is: ", lunchActivity)
    }
    const _handleSubmitAfternoonAChoices = async (e) => {
        e.preventDefault();
        console.log();
        const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${vacation[0].hotel_lat}, ${vacation[0].hotel_lon}&radius=15000&type=${afternoonA}&keyword=${vacation[0].name_hotel}&key=AIzaSyDKGKZEtAeEqAwLsp7ao4Ppq3pLPhUYHQM`
        const submitResponse = await fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .catch((e) => {
                console.log(e);
            });
        console.log("afternoonA: ", submitResponse)
        setAfternoonAChoices(submitResponse.results)
    }
    const _handleAfternoonAChange = async (e) => {
        setAfternoonA(e.target.value)
    }
    const _handleClickAfternoonA = async (e) => {
        setAfternoonActivity(e.target.value)
        console.log("breakfast activity is: ", afternoonActivity)
    }
    const _handleSubmitDinnerChoices = async (e) => {
        e.preventDefault();
        console.log();
        const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${vacation[0].hotel_lat}, ${vacation[0].hotel_lon}&radius=15000&type=${dinner}&keyword=${vacation[0].name_hotel}&key=AIzaSyDKGKZEtAeEqAwLsp7ao4Ppq3pLPhUYHQM`
        const submitResponse = await fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .catch((e) => {
                console.log(e);
            });
        console.log("dinner: ", submitResponse)
        setDinnerChoices(submitResponse.results)
    }
    const _handleDinnerChange = async (e) => {
        setDinner(e.target.value)
    }
    const _handleClickDinner = async (e) => {
        setDinnerActivity(e.target.value)
        console.log("breakfast activity is: ", dinnerActivity)
    }
    const _handleSubmitEveningAChoices = async (e) => {
        e.preventDefault();
        console.log();
        const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${vacation[0].hotel_lat}, ${vacation[0].hotel_lon}&radius=15000&type=${eveningA}&keyword=${vacation[0].name_hotel}&key=AIzaSyDKGKZEtAeEqAwLsp7ao4Ppq3pLPhUYHQM`
        const submitResponse = await fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .catch((e) => {
                console.log(e);
            });
        console.log("eveningA: ", submitResponse)
        setEveningAChoices(submitResponse.results)
    }
    const _handleEveningAChange = async (e) => {
        setEveningA(e.target.value)
    }
    const _handleClickEveningA = async (e) => {
        setEveningActivity(e.target.value)
        console.log("breakfast activity is: ", eveningActivity)
    }
    const _handleFormSubmit = async (e) => {
        e.preventDefault()
        console.log("breakfast activity is: ", breakfastActivity)
    }
       
    return (
        <>
            {breakfastActivity === '' ? (
                <>
                <div className="Breakfast-choices">
                    <form onSubmit={_handleSubmitBreakfastChoices}>
                        <p>for you breakfast</p>
                        <select onChange={_handleBreakfastChange}>
                            <option value="">Please choose</option>
                            <option value="bakery">Bakery</option>
                            <option value="cafe">Cafe</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="meal_delivery">Meal Delivery</option>
                            <option value="meal_takeaway">Take Out</option>
                        </select>
                        <input 
                        type="hidden"
                        value={breakfast}/>
                        <button
                            type="submit">
                            submit
                        </button>
                    </form>
                </div>
                {!!breakfastChoices.length ? (
                    <ul className="Breakfast-list">
                        {breakfastChoices.map((choice, index) => (
                            <li key={index}>
                                <a value={choice.name} onClick={_handleClickBreakfast}>{choice.name}</a>
                            </li>
                        ))}
                    </ul>
                ): (
                    <>
                    </>
                )}
                </>
            ) : (
                <>
                </>
            )}
            {breakfastActivity !== '' && morningActivity === '' ? (
                <>
                <div className="MorningA-choices">
                    <form onSubmit={_handleSubmitMorningAChoices}>
                        <p>for your morning activity</p>
                        <select onChange={_handleMorningAChange}>
                            <option value="">Please Choose</option>
                            <option value="aquarium">Aquarium</option>
                            <option value="amusement_park">Amusement Park</option>
                            <option value="art_gallery">Art Gallery</option>
                            <option value="beauty_salon">Beauty Salon</option>
                            <option value="bicycle_store">Bicycle Store</option>
                        </select>
                        <button
                            type="submit">
                            submit
                        </button>
                    </form>
                </div>
                {!!morningAChoices.length ? (
                    <ul className="Breakfast-list">
                        {morningAChoices.map((choice, index) => (
                            <li key={index}>
                                <a value={choice.name} onClick={_handleClickMorningA}>{choice.name}</a>
                            </li>
                        ))}
                    </ul>
                ): (
                    <>
                    </>
                )}
                </>
            ) : (
                <>
                </>
            )}
            { lunchActivity === '' && morningActivity !== '' ? (
                <>
                <div className="Lunch-choices">
                    <form onSubmit={_handleSubmitLunchChoices}>
                        <p>for lunch</p>
                        <select onChange={_handleLunchChange}>
                            <option value="">Please choose</option>
                            <option value="bakery">Bakery</option>
                            <option value="cafe">Cafe</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="meal_delivery">Meal Delivery</option>
                            <option value="meal_takeaway">Take Out</option>
                        </select>
                        <button
                            type="submit">
                            submit
                        </button>
                    </form>
                </div>
                {!!lunchChoices.length ? (
                    <ul className="Breakfast-list">
                        {lunchChoices.map((choice, index) => (
                            <li key={index}>
                                <a value={choice.name} onClick={_handleClickLunch}>{choice.name}</a>
                            </li>
                        ))}
                    </ul>
                ): (
                    <>
                    </>
                )}
                </>
            ) : (
                <>
                </>
            )}
            {afternoonActivity === '' && lunchActivity !== '' ? (
                <>
                <div className="AfternoonA-choices">
                    <form onSubmit={_handleSubmitAfternoonAChoices}>
                        <p>for your afternoon activity</p>
                        <select onChange={_handleAfternoonAChange}>
                            <option value="">Please choose</option>
                            <option value="aquarium">Aquarium</option>
                            <option value="amusement_park">Amusement Park</option>
                            <option value="art_gallery">Art Gallery</option>
                            <option value="beauty_salon">Beauty Salon</option>
                            <option value="bicycle_store">Bicycle Store</option>
                            <option value="bowling_alley">Bowling</option>
                            <option value="campground">Campground</option>
                            <option value="casino">Casino</option>
                            <option value="clothing_store">Clothing Store</option>
                            <option value="gym">Gym</option>
                            <option value="jewelry_store">Jewelry Store</option>
                            <option value="shopping_mall">Mall</option>
                            <option value="museum">Museum</option>
                            <option value="park">Park</option>
                            <option value="rv_park">Rv Park</option>
                            <option value="spa">Spa</option>
                            <option value="stadium">Stadium</option>
                            <option value="zoo">Zoo</option>
                        </select>
                        <button
                            type="submit">
                            submit
                        </button>
                    </form>
                </div>
                {!!afternoonAChoices.length ? (
                    <ul className="Breakfast-list">
                        {afternoonAChoices.map((choice, index) => (
                            <li key={index}>
                                <a value={choice.name} onClick={_handleClickAfternoonA}>{choice.name}</a>
                            </li>
                        ))}
                    </ul>
                ): (
                    <>
                    </>
                )}
                </>
            ) : (
                <>
                </>
            )}
            {dinnerActivity === '' && afternoonActivity !== '' ? (
                <>
                <div className="Dinner-choices">
                    <form onSubmit={_handleSubmitDinnerChoices}>
                        <p>for dinner</p>
                        <select onChange={_handleDinnerChange}>
                            <option value="">Please choose</option>
                            <option value="bakery">Bakery</option>
                            <option value="cafe">Cafe</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="meal_delivery">Meal Delivery</option>
                            <option value="meal_takeaway">Take Out</option>
                        </select>
                        <button
                            type="submit">
                            submit
                        </button>
                    </form>
                </div>
                {!!dinnerChoices.length ? (
                    <ul className="Breakfast-list">
                        {dinnerChoices.map((choice, index) => (
                            <li key={index}>
                                <a value={choice.name} onClick={_handleClickDinner}>{choice.name}</a>
                            </li>
                        ))}
                    </ul>
                ): (
                    <>
                    </>
                )}
                </>
            ) : (
                <>
                </>
            )}
            {eveningActivity === '' && dinnerActivity !== '' ? (
                <>
                <div className="EveningA-choices">
                    <form onSubmit={_handleSubmitEveningAChoices}>
                        <p>for your evening activity</p>
                        <select onChange={_handleEveningAChange}>
                            <option value=""></option>
                            <option value="art_gallery">Art Gallery</option>
                            <option value="bar">Bar</option>
                            <option value="bowling_alley">Bowling</option>
                            <option value="campground">Campground</option>
                            <option value="casino">Casino</option>
                            <option value="gym">Gym</option>
                            <option value="jewelry_store">Jewelry Store</option>
                            <option value="liquor_store">Liquor Store</option>
                            <option value="shopping_mall">Mall</option>
                            <option value="movie_theater">Movie Theater</option>
                            <option value="museum">Museum</option>
                            <option value="night_club">Night Club</option>
                            <option value="park">Park</option>
                            <option value="rv_park">Rv Park</option>
                            <option value="spa">Spa</option>
                            <option value="stadium">Stadium</option>
                        </select>
                        <button
                            type="submit">
                            submit
                        </button>
                    </form>
                </div>
                {!!eveningAChoices.length ? (
                    <ul className="Breakfast-list">
                        {eveningAChoices.map((choice, index) => (
                            <li key={index}>
                                <a value={choice.name} onClick={_handleClickEveningA}>{choice.name}</a>
                            </li>
                        ))}
                    </ul>
                ): (
                    <>
                    </>
                )}
                </>
            ) : (
                <>
                </>
            )}
            <form onSubmit={_handleFormSubmit}>
                <input type="hidden" value={breakfastActivity}/>
            <button
                type="submit">
            </button>
            </form>
        </>
    )
}

export default ActivityPlanner;