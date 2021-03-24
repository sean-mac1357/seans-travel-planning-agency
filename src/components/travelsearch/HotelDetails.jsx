import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardHeaderTitle,
    CardHeaderIcon,
    Icon,
    CardImage,
    CardContent,
    Media,
    MediaLeft,
    MediaContent,
    Content,
    Title
} from 'bloomer';



const HotelDetails = ({vacationId, handleReload}) => {
    const history = useHistory();
    const { hotel_name } = useParams();
    const [hotel, setHotel] = useState([]);
    const [hotelAddress, setHotelAddress] = useState('');
    const [hotelLon, setHotelLon] = useState('')
    const [hotelLat, setHotelLat] = useState('')

    useEffect(() => {
        (async () => {
            const apiUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${hotel_name}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDKGKZEtAeEqAwLsp7ao4Ppq3pLPhUYHQM`
            const hotelData = await fetch(apiUrl, {
                method: "GET",
                headers: { "content-type": "application/json" },
            })
                .then((response) => response.json())
                .catch((e) => {
                    console.log(e)
                });
            setHotel(hotelData.candidates)
            setHotelAddress(hotelData.candidates[0].formatted_address)
            setHotelLon(hotelData.candidates[0].geometry.location.lng)
            setHotelLat(hotelData.candidates[0].geometry.location.lat)
        })();
    }, [hotel_name, hotelLat, hotelLon])

    const _handleSaveHotel = async (e) => {
        e.preventDefault()
        const apiUrl = 'http://127.0.0.1:3000/vacations/update'
        const submitResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: vacationId, name_hotel: hotel_name, address_hotel: hotelAddress, hotel_lat: hotelLat, hotel_lon: hotelLon })
        }).then(
            (response) => response
        );
        console.log("submit response is: ", submitResponse)

        if (submitResponse.status === 200) {
            console.log("submit response is 200")
            handleReload(true);
            history.goBack();
        }
    }

    return (
        <>
            {!!hotel.length ? (
                <>
                    {hotel.map((hotel, index) => (
                        <form onSubmit={_handleSaveHotel}>
                            <div className="Hotel-details">
                                <Card>
                                    <CardHeader isDisplay="flex">
                                        <CardHeaderTitle className="Hotel-details-h1" key={index}>
                                            {hotel.name}
                                        </CardHeaderTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Media>
                                            
                                            <MediaContent>
                                                <Title isSize={4}>
                                                    {hotel.formatted_address}
                                                </Title>
                                                <img src={hotel.photos[0].html_attributions} alt={hotel.name}/>
                                            </MediaContent>
                                        </Media>
                                        <Content>
                                        This Hotel has a rating of {hotel.rating} <sup>★'s</sup>
                                        <hr/>
                                        <small>Would you like to base your vacation from this hotel?</small>
                                        <br/>
                                        <button
                                        type="submit">
                                            Yes
                                        </button>
                                        </Content>
                                    </CardContent>
                                </Card>
                            </div>
                        </form>
                    ))}
                </>
            ) : (
                <p>No hotel Selected yet</p>
            )}
        </>
    )
}

export default HotelDetails;