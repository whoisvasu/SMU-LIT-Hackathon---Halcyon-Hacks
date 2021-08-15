import React from 'react'
import './Profiles.css'
import Profile from './Profiles';
import { Avatar } from "@material-ui/core"
import { Button } from "@material-ui/core"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';   
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

function Teo() {

    var min = localStorage.getItem("min");
    var max = localStorage.getItem("max");

    var query = localStorage.getItem("query");

    var elem = localStorage.getItem("elem");
    var lang = localStorage.getItem("lang");

    return (

        <div className='profilee'>

            <div>
                
                <img 
                    src="https://i.imgur.com/Xsh6zjo.jpeg" 
                    alt='' 
                    className='fancy'
                />

                <Button onClick={() => window.location.href = "/"} id='ret'>
                    <KeyboardReturnIcon /> Return to Home Page
                </Button>

            </div>


            <Profile
                img="https://i.imgur.com/ORVeADW.png"
                years="Year admitted to the Bar: 1997"
                name="Teo"
                description="I specialise in criminal defence, family maters and employment matters."
                languages='Languages: English, Bahasa Indonesia, Burmese'
                company='Teo LLP'
                tag1='Crime'
                tag2='Family'
                tag3='Employment'
                price="$320/hour"
                reviews="2"
            />

            <h2> Reviews</h2>

            <div className='reviews'>
                <Avatar id='pic'/>
                <p> 
                    <h3>Ding Kok Soon</h3>
                    <h5>Teo represented me as my criminal defence lawyer and my sentence was lowered from custodial to fine only.</h5>
                    <div className='rts'>
                        <Button>Crime</Button>
                    </div>
                </p>
                <ThumbUpIcon id='tu'/>
            </div>

            <div className='reviews'>
                <Avatar id='pic'/>
                <p> 
                    <h3>Chu Si Wen</h3>
                    <h5>Teo was too aggresive and combatively in dealing with my ex and his lawyer, which led to worsened hostility between me and my ex, and even greater demands by him in relation to our divorce.</h5>
                    <div className='rts'>
                        <Button>Family</Button>
                    </div>
                </p>
                <ThumbDownIcon id='td'/>
            </div>
        
            <p className='bott'>Budget: From ${min} to ${max} · Queried Tags: {query} · Additional Tags: {elem} · Languages: {lang}</p>
        </div>
    )
}

export default Teo