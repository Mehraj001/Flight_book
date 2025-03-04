
import React from 'react';
import Sidebar from './Sidebar'; // Import Sidebar
import './Conclusion.css'
import { Link } from 'react-router-dom';

function FlightSearch() {
        return (
                <div className="flight-search-container">
                        <Sidebar />
                        <div className="flight-search baccccc">
                                <div className="containor">
                                        <div className="heading">
                                                <h1>Conclusion</h1>
                                        </div>
                                        <div className="conclusion">
                                        Wow, what a whirlwind adventure we had with Digi Yatra! This awesome app taught us all about the magic of AI, from making our boarding passes to recognizing our faces at the airport. Let's relive our journey and see what amazing things we discovered!
                                        <br />
                                        <br />
                                        <h4>Our Incredible Journey:</h4>
                                        When we used Digi Yatra, we felt like we had a real-life wizard helping us out. First, AI worked its magic to create our boarding passes for the big trip. It was like having a super speedy assistant who knew just what we needed!
                                        <br />
                                        Then, when we arrived at the airport, we stepped up to a mysterious-looking machine with a camera. We were a little nervous at first, but when we stood in front of it, something amazing happened. The machine recognized our faces, just like that! It was like having a friend who could spot us in a crowded room.
                                        And not only did it recognize us, but it also showed our names on the screen! It felt like we were in a magical storybook, where everything knows who we are.
                                        <br />
                                        <br />
                                        <h4>What We Learned:</h4>
                                        Through our adventure, we realized that AI isn't just some fancy technology. It's like having a wise friend who can do all sorts of incredible things, like making sure we have our boarding passes ready and helping us breeze through airport security.
                                        We also learned that AI isn't perfect. Sometimes, it might get a little mixed up or not recognize us right away. But that's okay! We can help teach it and make it even better, just like helping a friend learn something new.
                                        <br />
                                        <br />
                                       <h4> Dreaming of More Adventures:</h4>
                                        As we head home from our journey, we can't help but dream of more adventures with AI by our side. With its help, we can explore new places, discover new things, and make memories that will last a lifetime. Who knows what magical adventures await us next time!
                                </div>
                                </div>
                                <button className='btn'><Link to={'/self-check-in'}>Previous</Link></button>
                        </div>
                </div>
        );
}

export default FlightSearch;