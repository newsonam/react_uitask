import React, { useState } from 'react';
import './style.css';
import Button from '@mui/material/Button';
import CheckDate from './CheckDate';

function Main(props) {
    const [rooms, setRooms] = useState(0);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    return (
        <div>
            <div className='header-wrapper'>
                <h3 className='sampletext'>Samplelogo</h3>
                <p>Need help ? Call 8107344682</p>
            </div>
            <div className='image-wrapper'>
                <img src="https://media.cntraveler.com/photos/53da5aa96dec627b149e509d/master/w_1024,h_768,c_limit/royal-ethiad-suite-jumeirah-abu-dhabi-2.jpg" alt="loading" className='main-img' />

            </div>
            <div className="image-data">
                <div className='date'> <CheckDate /></div>
                <div className='persondata'><p>3 adults - 2 children - 2 rooms</p></div>
                <Button variant="contained" color="warning" style={{ backgroundColor: '#FFDF00', color: 'black', fontWeight: 'bold', marginLeft: '20px' }}>
                    Check Availability
                </Button>
            </div>
            <div className='roomdata'>
                <div className='room'>
                    <div className='roomsdata'> <h5>Rooms</h5> <h6>(Max per rooms)</h6></div>
                    <div><button onClick={() => setRooms(rooms + 1)}>+</button> {rooms} <button onClick={() => setRooms(rooms - 1)}>-</button></div>
                </div>
                <div className='adult'>
                    <div className='adultdata'><h5>Adults</h5><h6>(Max 3 per room)</h6></div>

                    <div><button onClick={() => setAdults(adults + 1)}>+</button> {adults} <button onClick={() => setAdults(adults - 1)}>-</button></div>
                </div>
                <div className='children'>
                    <div className='adultdata'> <h5>Children</h5> <h6>(Max 3 per room)</h6></div>
                    <div><button onClick={() => setChildren(children + 1)}>+</button> {children} <button onClick={() => setChildren(children - 1)}>-</button></div>
                </div>
                <div><Button variant="outlined">Done</Button></div>

            </div>

            <section className='grid-container'>

                <div className='img1'>
                    <img src="https://media.istockphoto.com/id/1164435677/photo/happy-hotel-clerks-are-welcoming-professional-at-counter.jpg?s=612x612&w=0&k=20&c=XNbtAFwGK4AHd7JKKQycDwTQcIXFagIxt9TXLNb0Dd4=" alt="" className='pic1' />
                </div>
                <div className='img2'>
                    <img src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=" alt="loading" />
                </div>
                <div className='img3'>
                    <img src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt="loading" />
                </div>
                <div className='img4'>
                    <img src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" alt="loading" />
                </div>
                <div className='img5'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuhqfgGGecvELsPkLLY8ArjwwctzAB3-z-Hw&usqp=CAU" alt="loading" />
                </div>


            </section>



            <section className='hotel-address'>
                <p className='hotel-title'>Hotel Vishal @ Airport </p>
                <div >
                    <h6 className='address'>104/2/2,National Highway 8 , Mahipalpur ,New  <a href="!" target="_blank" rel="noopener noreferrer">View Map</a></h6>

                    <h6 className='address'>Delhi 110037 New Delhi,India</h6>
                </div>
                <h5 className='contact'>+91-7654564545 , 8107344682</h5>
                <ul className='facilities'>
                    <li>Free Parking</li>
                    <li>Conference Room</li>
                    <li>ATM</li>
                    <li>Conference Room</li>
                    <li>Conference Room</li>

                </ul>
                <p className='address-paragraph'>Located in New Delhi,5.5 km from Rashtrapati Bhawan ,Hotel Vishal Airport provides accomodation with a restaurant ,free private parking and a fitness centre.This 3-star hotel offers an ATM , a conceirge service and free WiFi.The accomodation features a 24-hour front desk,room service and currency exchange for guests.  </p>
            </section>
            <hr className='horizontal' />

            <section className="guidelines">
                <p className='property'>Property Rules</p>
                <h6 className='check'>Check-in:12 PM Check-out:12 PM</h6>
                <div className='list-flex'>

                    <ul className='rules'>
                        <li>Guests with fever are not allowed</li>
                        <li>Guests from containment zones are not allowed</li>
                        <li>Guests below 18 years of age are not allowed at the property</li>
                        <li>PAN Card and Non Govt. IDs are accepted as ID proof</li>
                        <li>Aadhaar ,driving license and Govt. ID are accepted as ID proof(s)</li>
                        <li>Property staff is trained on hygiene guidelines</li>
                        <li>Pets are not allowed</li>
                        <li>Outside food is not allowed</li>
                        <li>Smoking within the premises is not allowed</li>
                        <li>Does not allow private parties or events</li>
                        <li>Quarantine protocols are being followed as per local government authorities</li>
                    </ul>
                    <ul>
                        <li>Pets are not allowed</li>
                        <li>Outside food is not allowed</li>
                        <li>Smoking within the premises is not allowed</li>
                        <li>Does not allow private parties or events</li>
                        <li>Quarantine protocols are being followed as per local government authorities</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Main;