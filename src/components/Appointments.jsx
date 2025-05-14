"use client"

import { useState } from "react";
import Calender from "../assets/box.png"
import "/f.css";
import Plus from "../assets/lucide_plus.png";
import Left from "../assets/left-arrow.png";
import Right from "../assets/right-arrow.png"

export default function Appointments() {
  const [currentMonth, setCurrentMonth] = useState("Sep 2024")

  // Initial days of the week
  const initialDays = ["Monday", "Tuesday", "Wednesday", "Thursday"]

  // State to track the current days being displayed
  const [currentDays, setCurrentDays] = useState(initialDays)

  // All possible days in order for navigation
  const allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  // Full 24-hour period
  const hours = [
    "12AM",
    "1AM",
    "2AM",
    "3AM",
    "4AM",
    "5AM",
    "6AM",
    "7AM",
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
    "10PM",
    "11PM",
  ]

  // Sample appointment data with more time slots
  const appointments = [
    // Monday appointments
    { id: 1, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Monday", hour: "10AM", color: "green" },
    { id: 2, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Monday", hour: "10AM", color: "blue" },
    { id: 3, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Monday", hour: "11AM", color: "peach" },
    { id: 4, name: "Lagbaja Tamedo", time: "12:00 - 1:00", day: "Monday", hour: "12PM", color: "purple" },
    { id: 5, name: "Lagbaja Tamedo", time: "12:00 - 1:00", day: "Monday", hour: "12PM", color: "green" },
    { id: 30, name: "Lagbaja Tamedo", time: "2:00 - 3:00", day: "Monday", hour: "2PM", color: "blue" },
    { id: 31, name: "Lagbaja Tamedo", time: "4:00 - 5:00", day: "Monday", hour: "4PM", color: "purple" },
    { id: 32, name: "Lagbaja Tamedo", time: "7:00 - 8:00", day: "Monday", hour: "7PM", color: "green" },
    { id: 45, name: "Lagbaja Tamedo", time: "11:30 - 12:30", day: "Monday", hour: "11PM", color: "peach" },
    { id: 46, name: "Lagbaja Tamedo", time: "12:30 - 1:30", day: "Monday", hour: "12AM", color: "blue" },
    { id: 47, name: "Lagbaja Tamedo", time: "5:30 - 6:30", day: "Monday", hour: "5AM", color: "green" },

    // Tuesday appointments
    { id: 6, name: "Lagbaja Tamedo", time: "1:00 - 2:00", day: "Tuesday", hour: "1PM", color: "peach" },
    { id: 33, name: "Lagbaja Tamedo", time: "8:30 - 9:30", day: "Tuesday", hour: "8AM", color: "green" },
    { id: 34, name: "Lagbaja Tamedo", time: "3:00 - 4:00", day: "Tuesday", hour: "3PM", color: "blue" },
    { id: 35, name: "Lagbaja Tamedo", time: "5:00 - 6:00", day: "Tuesday", hour: "5PM", color: "purple" },
    { id: 48, name: "Lagbaja Tamedo", time: "2:30 - 3:30", day: "Tuesday", hour: "2AM", color: "peach" },
    { id: 49, name: "Lagbaja Tamedo", time: "10:30 - 11:30", day: "Tuesday", hour: "10PM", color: "green" },

    // Wednesday appointments
    { id: 7, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Wednesday", hour: "10AM", color: "peach" },
    { id: 8, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Wednesday", hour: "10AM", color: "blue" },
    { id: 9, name: "Lagbaja Tamedo", time: "12:00 - 1:00", day: "Wednesday", hour: "12PM", color: "green" },
    { id: 10, name: "Lagbaja Tamedo", time: "12:00 - 1:00", day: "Wednesday", hour: "12PM", color: "peach" },
    { id: 11, name: "Lagbaja Tamedo", time: "1:00 - 2:00", day: "Wednesday", hour: "1PM", color: "blue" },
    { id: 36, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Wednesday", hour: "9AM", color: "purple" },
    { id: 37, name: "Lagbaja Tamedo", time: "6:00 - 7:00", day: "Wednesday", hour: "6PM", color: "green" },
    { id: 38, name: "Lagbaja Tamedo", time: "8:00 - 9:00", day: "Wednesday", hour: "8PM", color: "peach" },
    { id: 50, name: "Lagbaja Tamedo", time: "3:30 - 4:30", day: "Wednesday", hour: "3AM", color: "blue" },
    { id: 51, name: "Lagbaja Tamedo", time: "7:30 - 8:30", day: "Wednesday", hour: "7AM", color: "purple" },

    // Thursday appointments
    { id: 12, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Thursday", hour: "10AM", color: "purple" },
    { id: 13, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Thursday", hour: "11AM", color: "green" },
    { id: 14, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Thursday", hour: "11AM", color: "peach" },
    { id: 15, name: "Lagbaja Tamedo", time: "1:00 - 2:00", day: "Thursday", hour: "1PM", color: "green" },
    { id: 39, name: "Lagbaja Tamedo", time: "2:30 - 3:30", day: "Thursday", hour: "2PM", color: "blue" },
    { id: 40, name: "Lagbaja Tamedo", time: "4:30 - 5:30", day: "Thursday", hour: "4PM", color: "purple" },
    { id: 52, name: "Lagbaja Tamedo", time: "1:30 - 2:30", day: "Thursday", hour: "1AM", color: "peach" },
    { id: 53, name: "Lagbaja Tamedo", time: "9:30 - 10:30", day: "Thursday", hour: "9PM", color: "blue" },

    // Friday appointments
    { id: 16, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Friday", hour: "10AM", color: "blue" },
    { id: 17, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Friday", hour: "11AM", color: "green" },
    { id: 41, name: "Lagbaja Tamedo", time: "3:00 - 4:00", day: "Friday", hour: "3PM", color: "peach" },
    { id: 42, name: "Lagbaja Tamedo", time: "7:00 - 8:00", day: "Friday", hour: "7PM", color: "green" },
    { id: 54, name: "Lagbaja Tamedo", time: "4:30 - 5:30", day: "Friday", hour: "4AM", color: "green" },

    // Saturday appointments
    { id: 18, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Saturday", hour: "10AM", color: "purple" },
    { id: 43, name: "Lagbaja Tamedo", time: "5:00 - 6:00", day: "Saturday", hour: "5PM", color: "blue" },
    { id: 55, name: "Lagbaja Tamedo", time: "11:30 - 12:30", day: "Saturday", hour: "11PM", color: "peach" },
    { id: 57, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Saturday", hour: "9AM", color: "peach" },
    { id: 58, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Saturday", hour: "9AM", color: "green" },

    // Sunday appointments
    { id: 19, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Sunday", hour: "11AM", color: "peach" },
    { id: 44, name: "Lagbaja Tamedo", time: "9:00 - 10:00", day: "Sunday", hour: "9PM", color: "purple" },
    { id: 56, name: "Lagbaja Tamedo", time: "6:30 - 7:30", day: "Sunday", hour: "6AM", color: "blue" },
  ]

  const getAppointmentsForCell = (day, hour) => {
    return appointments.filter((app) => app.day === day && app.hour === hour)
  }

  const getNextDay = () => {
    const lastDay = currentDays[currentDays.length - 1]
    const lastDayIndex = allDays.indexOf(lastDay)
    const nextDayIndex = (lastDayIndex + 1) % allDays.length
    return allDays[nextDayIndex]
  }

  const handleNavigation = (direction) => {
    // Get the first or last day in the current view
    const firstDay = currentDays[0]
    const lastDay = currentDays[currentDays.length - 1]

    // Find the index of the first/last day in the allDays array
    const firstDayIndex = allDays.indexOf(firstDay)
    const lastDayIndex = allDays.indexOf(lastDay)

    if (direction === "prev") {
      // For previous, we need to find the day before the first day
      const prevDayIndex = (firstDayIndex - 1 + allDays.length) % allDays.length
      const prevDay = allDays[prevDayIndex]

      // Remove the last day and add the previous day at the beginning
      const newDays = [prevDay, ...currentDays.slice(0, -1)]
      setCurrentDays(newDays)
    } else {
      // For next, we need to find the day after the last day
      const nextDayIndex = (lastDayIndex + 1) % allDays.length
      const nextDay = allDays[nextDayIndex]

      // Remove the first day and add the next day at the end
      const newDays = [...currentDays.slice(1), nextDay]
      setCurrentDays(newDays)
    }
  }

  // Get the next day for preview
  const nextDay = getNextDay()

  return (
    <div className="appointment-container">
      <h2 className="appointment-title">Appointment</h2>

      <div className="appointment-header">
        <div className="date-picker1">
          <span className="calendar-icon">
            <img src={Calender} />
          </span>
          <span className="calender-text">{currentMonth}</span>
        </div>

        <button className="add-new-btn">
          <span className="add-new-btn-text">Add new</span>
          <span className="plus-icon"><img src={Plus} /></span>
        </button>
      </div>

      <div className="calendar-container">
        <div className="calendar-header">
          <div className="left-header">
            <div className="calendar-nav prev" onClick={() => handleNavigation("prev")}>
            <span className="left-arrow"><img src={Left} /></span>
            </div>
          </div>
          {currentDays.map((day) => (
            <div key={day} className="day-header">
              <span className="day-header-text">{day}</span>
            </div>
          ))}
          <div className="right-header">
            <div className="calendar-nav next" onClick={() => handleNavigation("next")}>
              <span className="right-arrow"><img src={Right} /></span>
            </div>
          </div>
        </div>

        <div className="calendar-body">
          <div className="calendar-grid">
            <div className="time-column">
              {hours.map((hour) => (
                <div key={hour} className="time-cell">
                  <span className="hour-text">{hour}</span>
                </div>
              ))}
            </div>
            {currentDays.map((day) => (
              <div key={day} className="day-column">
                {hours.map((hour) => (
                  <div key={`${day}-${hour}`} className="appointment-cell">
                    {getAppointmentsForCell(day, hour).map((appointment) => (
                      <div key={appointment.id} className={`appointment-card ${appointment.color}`}>
                        <div className="appointment-person">
                          <span className="person-icon"></span>
                          <span className="appointment-text">{appointment.name}</span>
                        </div>
                        <div className="appointment-time">{appointment.time}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            <div className="preview-column">
              {hours.map((hour) => (
                <div key={`preview-${hour}`} className="preview-cell">
                  {getAppointmentsForCell(nextDay, hour).map((appointment) => (
                    <div key={appointment.id} className={`preview-appointment-card ${appointment.color}`}>
                      <div className="preview-appointment-person">
                        <span className="person-icon"></span>
                        <span className="appointment-text">{appointment.name}</span>
                      </div>
                      <div className="preview-appointment-time">{appointment.time}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
