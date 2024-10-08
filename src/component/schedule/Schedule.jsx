import React from 'react'
import '../schedule/schedule.css'
import Benefits from '../schedule/Benefits'

function Schedule() {
  return (
    <div className='scheduleContainer' id="schedule">
      <div className="mainheading">
        <h3>Benefits of <span>Exercise</span></h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est corrupti,<br /> repudiandae id voluptatem voluptatibus recusandae magni pariatur dolore reiciendis </p>
      </div>
       <div>
        <Benefits/>
       </div>
      
    </div>
  )
}

export default Schedule