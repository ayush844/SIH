import React from 'react'
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import '../styles/Calender.css'


const Calender = () => {
  return (
    <div className='calender-body'>

      <div className="page-heading">
        <h1>events calender</h1>
      </div>

    <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        width={"90vw"}
        height={"90vh"}
    />
      
    </div>
  )
}

export default Calender
