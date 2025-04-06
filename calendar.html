<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Schedule Your Call</title>
    <meta name="description" content="Choose a date and time for your call.">
    <meta name="robots" content="index, follow">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        :root {
            --primary: #0095F6;
            --primary-dark: #0081D6;
            --background: #0F172A;
            --text: #F8FAFC;
            --text-light: #94A3B8;
            --success: #10B981;
            --success-dark: #059669;
            --danger: #EF4444;
            --danger-dark: #DC2626;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Montserrat', sans-serif;
        }

        body {
            background: var(--background);
            color: var(--text);
            line-height: 1.5;
            font-size: 16px;
        }

        .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .content {
            margin: 0 auto;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            max-width: 800px;
            padding: 2rem 1.25rem 2rem;
        }

        .callout {
            background: var(--primary);
            color: var(--text);
            padding: 0.625rem;
            font-weight: 700;
            font-size: 0.875rem;
            text-transform: uppercase;
            width: 100%;
            text-align: center;
            margin-bottom: 1rem;
            letter-spacing: 0.02em;
        }

        .headline {
            font-size: 2.25rem;
            font-weight: 700;
            line-height: 1.2;
            color: var(--text);
            margin: 0;
            max-width: 800px;
            letter-spacing: -0.01em;
        }

        .subheadline {
            font-size: 1.125rem;
            color: var(--text);
            line-height: 1.5;
            max-width: 650px;
            margin: 0 auto;
        }

        .section-divider {
            border-top: 1px solid rgba(148, 163, 184, 0.2);
            margin: 1rem 0;
            width: 100%;
        }

        .calendar-container {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 4px;
            padding: 1.5rem;
        }

        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .month-nav {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .month-title {
            font-size: 1.125rem;
            font-weight: 600;
        }

        .nav-button {
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: var(--text);
            width: 36px;
            height: 36px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }

        .nav-button:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .calendar-day-header {
            text-align: center;
            font-size: 0.8125rem;
            font-weight: 500;
            color: var(--text-light);
            padding: 0.5rem 0;
        }

        .calendar-day {
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            font-size: 0.9375rem;
            cursor: pointer;
            transition: background-color 0.2s ease;
            background: rgba(255, 255, 255, 0.05);
            position: relative;
        }

        .calendar-day:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .calendar-day.active {
            background: var(--primary);
            color: white;
        }

        .calendar-day.disabled {
            opacity: 0.3;
            cursor: not-allowed;
            background: rgba(255, 255, 255, 0.02);
        }

        .calendar-day.different-month {
            opacity: 0.3;
            background: rgba(255, 255, 255, 0.02);
        }

        .calendar-day.has-availability::after {
            content: "";
            position: absolute;
            bottom: 4px;
            width: 4px;
            height: 4px;
            background: var(--primary);
            border-radius: 50%;
        }

        .calendar-day.active.has-availability::after {
            background: white;
        }

        .time-slots-container {
            display: none;
            margin-top: 1.5rem;
        }

        .time-slots-container.visible {
            display: block;
        }

        .time-slots-header {
            text-align: left;
            margin-bottom: 1rem;
            font-size: 1rem;
            font-weight: 600;
            color: var(--text);
        }

        .time-slots-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.75rem;
        }

        .time-slot {
            padding: 0.75rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(148, 163, 184, 0.1);
            border-radius: 4px;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .time-slot:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .time-slot.active {
            background: var(--primary);
            border-color: var(--primary-dark);
        }

        .booking-details {
            margin-top: 2rem;
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(148, 163, 184, 0.1);
            border-radius: 4px;
            text-align: left;
            display: none; /* Always hidden since we're skipping confirmation */
        }

        .booking-details.visible {
            display: none;
        }

        .booking-details-header {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .booking-details-header i {
            color: var(--success);
        }

        .booking-info {
            margin-bottom: 1.5rem;
        }

        .booking-info-item {
            display: flex;
            margin-bottom: 0.75rem;
        }

        .booking-info-label {
            width: 150px;
            color: var(--text-light);
            font-size: 0.9375rem;
        }

        .booking-info-value {
            flex: 1;
            font-size: 0.9375rem;
            font-weight: 500;
        }

        .confirm-booking-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.875rem 2rem;
            background: var(--success);
            color: var(--text);
            border: 1px solid var(--success-dark);
            border-radius: 4px;
            font-size: 1.125rem;
            font-weight: 700;
            margin: 1rem 0 0;
            cursor: pointer;
            transition: background-color 0.2s ease;
            width: 100%;
        }

        .confirm-booking-button:hover {
            background: var(--success-dark);
        }

        .booking-buttons {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }

        .back-button {
            flex: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.875rem 2rem;
            background: rgba(255, 255, 255, 0.05);
            color: var(--text);
            border: 1px solid rgba(148, 163, 184, 0.1);
            border-radius: 4px;
            font-size: 1.125rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }

        .back-button:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .confirm-button {
            flex: 2;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.875rem 2rem;
            background: var(--success);
            color: var(--text);
            border: 1px solid var(--success-dark);
            border-radius: 4px;
            font-size: 1.125rem;
            font-weight: 700;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }

        .confirm-button:hover {
            background: var(--success-dark);
        }
        
        .form-section-header {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
            margin-top: 0;
            text-align: left;
        }

        .form-section-header span {
            font-size: 0.75rem;
            color: var(--text-light);
            font-weight: 600;
            margin-right: 1rem;
            white-space: nowrap;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .form-section-header::after {
            content: "";
            flex-grow: 1;
            height: 1px;
            background: rgba(148, 163, 184, 0.2);
        }

        .legal {
            margin-top: 2.5rem;
            padding: 1.25rem 0 0;
            border-top: 1px solid rgba(148, 163, 184, 0.2);
            font-size: 0.75rem;
            color: var(--text-light);
            text-align: center;
            max-width: 800px;
            margin: 2.5rem auto 0;
            line-height: 1.6;
        }

        .legal p {
            margin-bottom: 0.5rem;
        }

        .legal a {
            color: var(--text-light);
            text-decoration: none;
            padding: 0.25rem;
        }

        .legal a:hover {
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            body {
                font-size: 15px;
            }
            
            .callout {
                font-size: 0.8125rem;
            }
            
            .content {
                gap: 1rem;
                padding: 2rem 1rem 1.5rem;
            }
            
            .headline {
                font-size: 1.625rem;
                margin-bottom: 0.25rem;
            }
            
            .subheadline {
                font-size: 1rem;
            }
            
            .calendar-container {
                padding: 1rem;
            }
            
            .time-slots-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .booking-buttons {
                flex-direction: column;
            }
            
            .legal {
                margin-top: 2rem;
                padding-top: 1rem;
            }
        }

        .timezone-display {
            font-size: 0.85rem;
            color: var(--text-light);
            margin-bottom: 1rem;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <h1 class="headline">Congrats, You Qualify!</h1>
            <p class="subheadline">Pick a day and time for your call with Asher.</p>

            <div class="calendar-container">
                <div class="form-section-header">
                    <span>Select Date & Time</span>
                </div>
                
                <div class="calendar-header">
                    <div class="month-nav">
                        <button class="nav-button" id="prev-month">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div class="month-title" id="current-month">June 2024</div>
                        <button class="nav-button" id="next-month">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                
                <div id="calendar-grid" class="calendar-grid">
                    <!-- Calendar days will be generated by JavaScript -->
                </div>
                
                <div id="time-slots-container" class="time-slots-container">
                    <div class="time-slots-header">Select a time on <span id="selected-date-display">Thursday, June 13</span></div>
                    <div id="timezone-display" class="timezone-display"></div>
                    <div id="time-slots-grid" class="time-slots-grid">
                        <!-- Time slots will be generated by JavaScript -->
                    </div>
                </div>
                
                <div id="booking-details" class="booking-details">
                    <div class="booking-details-header">
                        <i class="fas fa-check-circle"></i>
                        <span>Your Appointment Details</span>
                    </div>
                    
                    <div class="booking-info">
                        <div class="booking-info-item">
                            <div class="booking-info-label">Date:</div>
                            <div id="booking-date" class="booking-info-value">Thursday, June 13, 2024</div>
                        </div>
                        <div class="booking-info-item">
                            <div class="booking-info-label">Time:</div>
                            <div id="booking-time" class="booking-info-value">10:00 AM (30 minutes)</div>
                        </div>
                        <div class="booking-info-item">
                            <div class="booking-info-label">Name:</div>
                            <div id="booking-name" class="booking-info-value">John Smith</div>
                        </div>
                        <div class="booking-info-item">
                            <div class="booking-info-label">Email:</div>
                            <div id="booking-email" class="booking-info-value">john@example.com</div>
                        </div>
                        <div class="booking-info-item">
                            <div class="booking-info-label">Phone:</div>
                            <div id="booking-phone" class="booking-info-value">+1 (555) 123-4567</div>
                        </div>
                        <div class="booking-info-item">
                            <div class="booking-info-label">Weight Goal:</div>
                            <div id="booking-weight-goal" class="booking-info-value">10-25 lbs</div>
                        </div>
                    </div>
                    
                    <div class="booking-buttons">
                        <button class="back-button" id="back-to-calendar">
                            <i class="fas fa-arrow-left"></i>&nbsp; Back
                        </button>
                        <button class="confirm-button" id="confirm-booking">
                            Confirm Appointment
                        </button>
                    </div>
                </div>
            </div>

            <div class="legal">
                <p>This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
                <p>Individual results may vary. The testimonials and examples used are exceptional results, which do not apply to the average purchaser, and are not intended to represent or guarantee that anyone will achieve the same or similar results.</p>
                <p>© 2024 All Rights Reserved</p>
                <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Disclaimer</a></p>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Detect user's timezone
            const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const userTimeZoneAbbr = getUserTimeZoneAbbreviation(userTimeZone);
            
            // Function to get timezone abbreviation
            function getUserTimeZoneAbbreviation(timeZone) {
                try {
                    const options = { timeZoneName: 'short' };
                    // Get the timezone abbreviation from the date string
                    const timeZoneAbbr = new Intl.DateTimeFormat('en-US', options)
                        .formatToParts(new Date())
                        .find(part => part.type === 'timeZoneName').value;
                    return timeZoneAbbr;
                } catch (e) {
                    // Fallback to GMT offset if there's an error
                    const offset = new Date().getTimezoneOffset();
                    const hours = Math.abs(Math.floor(offset / 60));
                    const minutes = Math.abs(offset % 60);
                    const sign = offset < 0 ? '+' : '-';
                    return `GMT${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                }
            }

            // Check if user data exists in localStorage
            const firstName = localStorage.getItem('firstName') || '';
            const lastName = localStorage.getItem('lastName') || '';
            const email = localStorage.getItem('email') || '';
            const phone = localStorage.getItem('phone') || '';
            const weightGoal = localStorage.getItem('weightGoal') || '';
            
            // Update booking details with user information
            document.getElementById('booking-name').textContent = firstName + ' ' + lastName;
            document.getElementById('booking-email').textContent = email;
            document.getElementById('booking-phone').textContent = phone;
            document.getElementById('booking-weight-goal').textContent = weightGoal;
            
            // Calendar initialization
            const today = new Date();
            let currentMonth = today.getMonth();
            let currentYear = today.getFullYear();
            
            // Automatically move to next month if we're past the 25th
            if (today.getDate() > 25) {
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
            }
            
            let selectedDate = null;
            let selectedTimeSlot = null;
            
            // Initialize the calendar
            updateCalendar();
            
            // Auto-select the first available date after calendar loads
            autoSelectFirstAvailableDate();
            
            // Function to automatically select the first available date
            function autoSelectFirstAvailableDate() {
                // Get all calendar days that have availability
                const availableDays = document.querySelectorAll('.calendar-day.has-availability:not(.disabled)');
                
                // If there are available days, select the first one
                if (availableDays.length > 0) {
                    const firstAvailableDay = availableDays[0];
                    
                    // Trigger a click on the first available day
                    firstAvailableDay.click();
                }
            }
            
            // Event listeners for navigation buttons
            document.getElementById('prev-month').addEventListener('click', function() {
                currentMonth--;
                if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear--;
                }
                updateCalendar();
                // Auto-select first available date after changing month
                autoSelectFirstAvailableDate();
            });
            
            document.getElementById('next-month').addEventListener('click', function() {
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
                updateCalendar();
                // Auto-select first available date after changing month
                autoSelectFirstAvailableDate();
            });
            
            // Back to calendar button
            document.getElementById('back-to-calendar').addEventListener('click', function() {
                document.getElementById('booking-details').classList.remove('visible');
                document.getElementById('time-slots-container').classList.add('visible');
            });
            
            // Confirm booking button
            document.getElementById('confirm-booking').addEventListener('click', function() {
                // In a real implementation, you would send this data to your server
                localStorage.setItem('appointmentDate', document.getElementById('booking-date').textContent);
                localStorage.setItem('appointmentTime', document.getElementById('booking-time').textContent);
                localStorage.setItem('appointmentTimeZone', userTimeZone);
                localStorage.setItem('appointmentTimeZoneAbbr', userTimeZoneAbbr);
                
                // Redirect to thank you page
                window.location.href = 'thank-you.php';
            });
            
            // Function to update the calendar display
            function updateCalendar() {
                const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                
                // Update month and year display
                document.getElementById('current-month').textContent = `${monthNames[currentMonth]} ${currentYear}`;
                
                // Clear existing calendar
                const calendarGrid = document.getElementById('calendar-grid');
                calendarGrid.innerHTML = '';
                
                // Add day headers
                const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                for (let i = 0; i < 7; i++) {
                    const dayHeader = document.createElement('div');
                    dayHeader.className = 'calendar-day-header';
                    dayHeader.textContent = dayNames[i];
                    calendarGrid.appendChild(dayHeader);
                }
                
                // Get the first day of the month
                const firstDay = new Date(currentYear, currentMonth, 1);
                // Get the last day of the month
                const lastDay = new Date(currentYear, currentMonth + 1, 0);
                
                // Get the day of the week for the first day (0-6, where 0 is Sunday)
                const firstDayOfWeek = firstDay.getDay();
                
                // Calculate how many days from the previous month to show
                const daysFromPrevMonth = firstDayOfWeek;
                
                // Get the last day of the previous month
                const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
                
                // Add days from the previous month
                for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
                    const day = prevMonthLastDay - i;
                    const dayElement = createDayElement(day, true);
                    calendarGrid.appendChild(dayElement);
                }
                
                // Add days for the current month
                for (let day = 1; day <= lastDay.getDate(); day++) {
                    const date = new Date(currentYear, currentMonth, day);
                    
                    // Check if this day is in the past
                    const isPast = date < new Date(today.setHours(0, 0, 0, 0));
                    
                    // Check if it's a weekend
                    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                    
                    const dayElement = createDayElement(day, false, isPast || isWeekend);
                    
                    // If it's within the 48-hour booking window and not disabled, it has available slots
                    if (!isPast && !isWeekend) {
                        dayElement.classList.add('has-availability');
                    }
                    
                    calendarGrid.appendChild(dayElement);
                }
                
                // Calculate how many days from the next month to show to make a complete grid
                const totalDaysShown = daysFromPrevMonth + lastDay.getDate();
                const daysFromNextMonth = Math.ceil(totalDaysShown / 7) * 7 - totalDaysShown;
                
                // Add days from the next month
                for (let day = 1; day <= daysFromNextMonth; day++) {
                    const dayElement = createDayElement(day, true);
                    calendarGrid.appendChild(dayElement);
                }
            }
            
            // Function to create a day element
            function createDayElement(day, isDifferentMonth, isDisabled = false) {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day';
                dayElement.textContent = day;
                
                if (isDifferentMonth) {
                    dayElement.classList.add('different-month');
                    dayElement.classList.add('disabled');
                }
                
                // Create date object for this calendar day
                const dateToCheck = new Date(currentYear, currentMonth, day);
                
                // Create the 48-hour booking window
                const now = new Date(); // current date and time
                const maxBookingTime = new Date();
                maxBookingTime.setHours(maxBookingTime.getHours() + 48); // 48 hours from now
                
                // Check if the date is outside our 48-hour booking window
                const isOutsideBookingWindow = dateToCheck > maxBookingTime || dateToCheck < now;
                
                // Disable the day if it's disabled from parent or outside our booking window
                if (isDisabled || isOutsideBookingWindow) {
                    dayElement.classList.add('disabled');
                } else {
                    // Only add click event if the day is not disabled
                    dayElement.addEventListener('click', function() {
                        // Remove active class from all days
                        document.querySelectorAll('.calendar-day').forEach(el => {
                            el.classList.remove('active');
                        });
                        
                        // Add active class to clicked day
                        dayElement.classList.add('active');
                        
                        // Remember selected date
                        selectedDate = new Date(currentYear, currentMonth, day);
                        
                        // Format the date for display
                        const options = { weekday: 'long', month: 'long', day: 'numeric' };
                        const dateDisplay = selectedDate.toLocaleDateString('en-US', options);
                        document.getElementById('selected-date-display').textContent = dateDisplay;
                        
                        // Update the booking details date
                        const fullDateOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
                        document.getElementById('booking-date').textContent = selectedDate.toLocaleDateString('en-US', fullDateOptions);
                        
                        // Show time slots
                        showTimeSlots(selectedDate);
                        document.getElementById('time-slots-container').classList.add('visible');
                    });
                }
                
                return dayElement;
            }
            
            // Function to show time slots for a selected date
            function showTimeSlots(date) {
                const timeSlotGrid = document.getElementById('time-slots-grid');
                timeSlotGrid.innerHTML = '';
                
                // Generate time slots - in a real implementation, these would come from your booking system
                const timeSlots = generateTimeSlots(date);
                
                timeSlots.forEach(slot => {
                    const timeElement = document.createElement('div');
                    timeElement.className = 'time-slot';
                    timeElement.textContent = slot;
                    
                    timeElement.addEventListener('click', function() {
                        // Store the selected time and date in localStorage
                        const fullDateOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
                        const formattedDate = date.toLocaleDateString('en-US', fullDateOptions);
                        
                        // Store timezone information with the appointment
                        localStorage.setItem('appointmentDate', formattedDate);
                        localStorage.setItem('appointmentTime', `${slot} (30 minutes)`);
                        localStorage.setItem('appointmentTimeZone', userTimeZone);
                        localStorage.setItem('appointmentTimeZoneAbbr', userTimeZoneAbbr);
                        
                        // Immediately redirect to thank you page without showing confirmation
                        window.location.href = 'thank-you.php';
                    });
                    
                    timeSlotGrid.appendChild(timeElement);
                });
            }
            
            // Function to generate time slots
            function generateTimeSlots(date) {
                // In a real implementation, this would check your actual availability
                // For now, just generate slots for demo purposes
                
                // Time slots from 9 AM to 5 PM, every 30 minutes
                const slots = [];
                const day = date.getDay(); // 0 (Sunday) to 6 (Saturday)
                
                // Only generate time slots for weekdays
                if (day > 0 && day < 6) {
                    // Start at 9 AM
                    for (let hour = 9; hour < 17; hour++) {
                        const hourFormatted = hour > 12 ? hour - 12 : hour;
                        const amPm = hour >= 12 ? 'PM' : 'AM';
                        
                        // Add :00 slot
                        slots.push(`${hourFormatted}:00 ${amPm}`);
                        
                        // Add :30 slot
                        slots.push(`${hourFormatted}:30 ${amPm}`);
                    }
                }
                
                // Randomly remove some slots to simulate availability
                return slots.filter(() => Math.random() > 0.3);
            }

            // Add timezone information to the time slots container
            function updateTimezoneDisplay() {
                const timezoneDisplay = document.getElementById('timezone-display');
                timezoneDisplay.textContent = `All times shown in your local timezone: ${userTimeZone} (${userTimeZoneAbbr})`;
            }
            
            // Call this function when the page loads
            updateTimezoneDisplay();
        });
    </script>
</body>
</html> 
