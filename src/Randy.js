import React from 'react'
import './Profiles.css'
import Profile from './Profiles';
import { Avatar } from "@material-ui/core"
import { Button } from "@material-ui/core"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';   
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

function Randy() {

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
                img="https://i.imgur.com/hBRwsrg.png"
                years="Year admitted to the Bar: 2001"
                name="Randy"
                description="I specialise in IP, civil claims and non-contentious commercial and corporate matters."
                languages='Languages: English, Hebrew, Thai'
                company='Randy LLP'
                tag1='Intellectual Property'
                tag2='Non Contentious Commercial Corporate Advisory'
                tag3='Civil claims'
                price="$280/hour"
                reviews="2"
            />

            <h2> Reviews</h2>

            <div className='reviews'>
                <Avatar id='pic'/>
                <p> 
                    <h3>Xu Jia Jia</h3>
                    <h5>SofRandy created our company's user agreements and other documents.</h5>
                    <div className='rts'>
                        <Button>Non Contentious Commercial Corporate Advisory</Button>
                    </div>
                </p>
                <ThumbUpIcon id='tu'/>
            </div>

            <div className='reviews'>
                <Avatar id='pic'/>
                <p> 
                    <h3>Hu Rui En</h3>
                    <h5>Randy was not thorough in his search on similar trade marks.</h5>
                    <div className='rts'>
                        <Button>Intellectual Property</Button>
                    </div>
                </p>
                <ThumbDownIcon id='td'/>
            </div>
        
            <p className='bott'>Budget: From ${min} to ${max} · Queried Tags: {query} · Additional Tags: {elem} · Languages: {lang}</p>
        </div>
    )
}

export default Randy