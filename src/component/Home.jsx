import React, { useEffect } from 'react'
import gym_img from '../assets/gym2.png'
import '../component/home-style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

let Home = () => {
   
    useEffect(()=>{
        AOS.init();

    },[])


    let ScheduleBtn = () => {
       return(  <div><p>Lets start</p></div>
       )
          
        
    }
    
    return (

        <div className='homeSection' id="home">

            <div className=" mainContainer row">
                <div className="col-6">
                    <img className='gymImg1' src={gym_img} alt="gym_img" />
                </div>
                <div className="col para">
                    <h2 className='heading' data-aos="zoom-out">
                        Fitness Is Not A Destination ... Fitness Is Life
                    </h2>
                    <p>
                        Welcome to Fitness Hub, your ultimate destination for a diverse and dynamic fitness journey. With over 45,000 square feet of state-of-the-art cardio and weight equipment, as well as an array of premium fitness tools, we provide endless ways for you to achieve and maintain your peak fitness.<br /><br />
                        Our goal is to offer more than just a workout – it's a transformative experience. Join our close-knit community and discover the strength, confidence, and passion required to conquer any challenge life throws your way. Find Your Fitness at Fitness Hub.
                    </p>
                    <button className=" btn-secondary btn-lg btn btn-success" type='button' onClick={ScheduleBtn}>Get Started</button>

                </div>
            </div>
            
        </div>
    )
}

export default Home