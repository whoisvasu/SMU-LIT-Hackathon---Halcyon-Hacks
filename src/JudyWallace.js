import React from 'react'
import './Profiles.css'
import Profile from './Profiles';
import { Avatar } from "@material-ui/core"
import { Button } from "@material-ui/core"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';   
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

function JudyWallace() {

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
                img="https://i.imgur.com/0ay1BHA.png"
                years="Year admitted to the Bar: 2009"
                name="Judy Wallace"
                description="I assist clients with issues relating to property and housing, non-contentious commercial and corporate as well as incapacity and inheritance."
                languages='Languages: English, Spanish, Mandarin Chinese'
                company='Judy Wallace LLP'
                tag1='Property and Housing'
                tag2='Non Contentious Commercial Corporate Advisory'
                tag3='Incapacity and Inheritance'
                price="$200/hour"
                reviews="2"
            />

            <h2> Reviews</h2>

            <div className='reviews'>
                <Avatar id='pic'/>
                <p> 
                    <h3>Yeo De Ming</h3>
                    <h5>Judy helped to resolve a payment dispute I had with my landlady. She's prompt and helped to get this over with as quickly as possible.</h5>
                    <div className='rts'>
                        <Button>Property and Housing</Button>
                    </div>
                </p>
                <ThumbUpIcon id='tu'/>
            </div>

            <div className='reviews'>
                <Avatar id='pic'/>
                <p> 
                    <h3>Fang Yi Hao</h3>
                    <h5>I had to ask Judy to revise my draft will a few times because she had missed points from our previous discussion.</h5>
                    <div className='rts'>
                        <Button>Incapacity and Inheritance</Button>
                    </div>
                </p>
                <ThumbDownIcon id='td'/>
            </div>
        
            <p className='bott'>Budget: From ${min} to ${max} · Queried Tags: {query} · Additional Tags: {elem} · Languages: {lang}</p>
        </div>
    )
}

export default JudyWallace