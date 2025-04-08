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

        .instant-meeting {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 4px;
            padding: 1.5rem;
            margin-bottom: 0;
            text-align: center;
            border-top: none;
            border-bottom: none;
        }
        
        .instant-meeting-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: var(--success);
        }
        
        .instant-meeting-text {
            margin-bottom: 1rem;
            font-size: 0.95rem;
        }
        
        .instant-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.875rem 2rem;
            background: var(--success);
            color: var(--text);
            border: 1px solid var(--success-dark);
            border-radius: 4px;
            font-size: 1.125rem;
            font-weight: 700;
            cursor: pointer;
            text-decoration: none;
            transition: background-color 0.2s ease;
            width: 100%;
        }
        
        .instant-button:hover {
            background: var(--success-dark);
        }
        
        .instant-button i {
            font-size: 1rem;
        }
        
        .or-divider {
            display: flex;
            align-items: center;
            text-align: center;
            margin: 0;
            color: var(--text-light);
            font-size: 0.875rem;
            font-weight: 500;
            border-top: none;
            border-bottom: none;
        }
        
        .or-divider::before,
        .or-divider::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid rgba(148, 163, 184, 0.2);
        }
        
        .or-divider::before {
            margin-right: 1rem;
        }
        
        .or-divider::after {
            margin-left: 1rem;
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
            margin: 0.5rem auto;
            background: #FFFFFF;
            border-radius: 4px;
            padding: 1.5rem;
            border: 1px solid #CBD5E1;
            color: #1E293B;
        }

        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            width: 100%;
        }

        .month-nav {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: #1E293B;
            width: 100%;
            justify-content: space-between;
        }

        .month-title {
            font-size: 1.125rem;
            font-weight: 600;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            flex: 1;
            text-align: center;
            color: #1E293B;
        }

        .date-display {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1E293B;
        }

        .countdown-timer {
            font-size: 0.875rem;
            color: var(--primary);
            margin-top: 0.5rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-align: center;
            width: 100%;
            justify-content: center;
        }

        .countdown-timer i {
            font-size: 1rem;
        }

        .nav-button {
            background: #E2E8F0;
            border: 1px solid #CBD5E1;
            color: #1E293B;
            width: 36px;
            height: 36px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background-color 0.2s ease;
            flex-shrink: 0;
        }

        .nav-button:hover {
            background: #CBD5E1;
        }

        .nav-button i {
            font-size: 1rem;
            color: #1E293B;
        }

        .nav-button.disabled {
            opacity: 0.5;
            cursor: not-allowed;
            background: #F1F5F9;
        }

        .day-option {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.2s ease;
            width: 100%;
            max-width: 200px;
        }

        .day-option:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .day-option.active {
            background: var(--primary);
        }

        .day-name {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 0.25rem;
        }

        .day-date {
            font-size: 0.875rem;
            color: var(--text-light);
        }

        .day-option.active .day-date {
            color: var(--text);
        }

        .days-container {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-bottom: 1.5rem;
        }

        .time-slots-container {
            display: block;
            margin-top: 1.5rem;
            color: #1E293B;
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
            background: #FFFFFF;
            border: 1px solid var(--primary);
            border-radius: 4px;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s ease;
            color: var(--primary);
            font-weight: 600;
        }

        .time-slot:hover {
            background: #F1F5F9;
            border-color: var(--primary-dark);
        }

        .time-slot.active {
            background: var(--primary);
            color: #FFFFFF;
        }
        
        .time-slot.taken {
            background: #E2E8F0;
            border-color: #CBD5E1;
            color: #94A3B8;
            cursor: not-allowed;
            position: relative;
            text-decoration: line-through;
        }
        
        .time-slot.taken::after {
            content: "Taken";
            position: absolute;
            font-size: 0.6rem;
            bottom: 2px;
            right: 4px;
            color: #64748B;
        }
        
        .time-slot.taken:hover {
            background: #E2E8F0;
            border-color: #CBD5E1;
        }

        .booking-details {
            margin-top: 2rem;
            padding: 1.5rem;
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 4px;
            text-align: left;
            display: none;
            color: #1E293B;
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
            color: #1E293B;
        }

        .booking-details-header i {
            color: var(--success);
        }

        .booking-info {
            margin-bottom: 1.5rem;
            background: #FFFFFF;
            border-radius: 4px;
            padding: 1rem;
        }

        .booking-info-item {
            display: flex;
            margin-bottom: 0.75rem;
            border-bottom: 1px solid #E2E8F0;
            padding-bottom: 0.75rem;
        }

        .booking-info-item:last-child {
            margin-bottom: 0;
            border-bottom: none;
            padding-bottom: 0;
        }

        .booking-info-label {
            width: 150px;
            color: #64748B;
            font-size: 0.9375rem;
            font-weight: 500;
        }

        .booking-info-value {
            flex: 1;
            font-size: 0.9375rem;
            font-weight: 500;
            color: #1E293B;
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
            background: #F1F5F9;
            color: #1E293B;
            border: 1px solid #E2E8F0;
            border-radius: 4px;
            font-size: 1.125rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }

        .back-button:hover {
            background: #E2E8F0;
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
            color: #1E293B;
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
            background: #1E293B;
        }

        .input-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            background: #FFFFFF;
            border: 1px solid #CBD5E1;
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 1.75rem;
        }

        .form-row {
            display: flex;
            width: 100%;
            border-bottom: 1px solid #CBD5E1;
        }

        .form-field.with-border {
            border-right: 1px solid #CBD5E1;
        }

        .form-field input {
            width: 100%;
            padding: 0.875rem 1rem;
            background: #FFFFFF;
            color: #1E293B;
            font-size: 1rem;
            border: none;
            border-radius: 0;
            height: 100%;
            box-sizing: border-box;
        }

        .form-field input::placeholder {
            color: #64748B;
        }

        .form-field.country-code {
            flex: 0 0 120px;
        }

        .form-field.country-code select {
            width: 100%;
            padding: 0.875rem 0.5rem;
            background-color: #FFFFFF;
            color: #1E293B;
            font-size: 0.9rem;
            border: none;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            text-align: left;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748B' d='M6 8L2 4h8z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 0.75rem center;
            background-size: 0.85rem;
            padding-right: 1.5rem;
            border-radius: 0;
            height: 100%;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        /* Fix the country code select focus state */
        .form-field.country-code select:focus {
            outline: none;
            background-color: rgba(255, 255, 255, 0.05) !important;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748B' d='M6 8L2 4h8z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 0.75rem center;
            background-size: 0.85rem;
        }

        .radio-options {
            background: #FFFFFF;
            border: 1px solid #CBD5E1;
            border-radius: 4px;
            margin-bottom: 1.5rem;
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        .radio-option {
            position: relative;
            cursor: pointer;
            border-bottom: 1px solid #CBD5E1;
            width: 100%;
        }

        .radio-option input[type="radio"] {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            margin: 0;
            z-index: 1;
            width: 18px;
            height: 18px;
            accent-color: #CBD5E1;
        }

        .radio-option input[type="radio"]:checked {
            accent-color: var(--primary);
        }

        .radio-option input[type="radio"]:checked + label {
            background-color: #F1F5F9;
            color: #1E293B;
            border-radius: 4px;
        }

        .radio-option label {
            display: block;
            padding: 0.875rem 1rem 0.875rem 3rem;
            font-size: 1rem;
            color: #1E293B;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }

        .radio-option:last-child {
            border-bottom: none;
        }

        .form-button {
            width: 100%;
            padding: 0.875rem 2rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 1.125rem;
            font-weight: 700;
            cursor: pointer;
            transition: background-color 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .form-button:hover {
            background: var(--primary-dark);
        }

        .form-button i {
            margin-left: 0.5rem;
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
            
            .instant-meeting {
                padding: 1rem;
            }
            
            .instant-button {
                width: 100%;
                padding: 0.75rem 1.5rem;
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

        .timezone-select {
            margin-bottom: 1rem;
            width: 100%;
        }

        .timezone-select select {
            width: 100%;
            padding: 0.875rem 1rem;
            border: 1px solid #CBD5E1;
            border-radius: 4px;
            background-color: #FFFFFF;
            color: #1E293B;
            font-size: 0.875rem;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748B' d='M6 8L2 4h8z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 0.75rem center;
            background-size: 0.85rem;
            padding-right: 2rem;
            cursor: pointer;
        }

        .timezone-select select:focus {
            outline: none;
            border-color: var(--primary);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <h1 class="headline">Almost Done! Last Step!!</h1>
            <p class="subheadline">Your beach-ready plan is locked in. Just pick your time to start!</p>

            <div class="calendar-container">
                <!-- Calendar Section -->
                <div class="calendar-header">
                    <div class="month-nav">
                        <button class="nav-button" id="prev-day">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div class="month-title">
                            <div class="date-display" id="current-date"></div>
                        </div>
                        <button class="nav-button" id="next-day">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                
                <div id="time-slots-container" class="time-slots-container">
                    <div class="timezone-select">
                        <select id="timezone-selector">
                            <!-- Timezones will be populated by JavaScript -->
                        </select>
                    </div>
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
                    const timeZoneAbbr = new Intl.DateTimeFormat('en-US', options)
                        .formatToParts(new Date())
                        .find(part => part.type === 'timeZoneName').value;
                    return timeZoneAbbr;
                } catch (e) {
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
            
            // Set up today and tomorrow dates
            const today = new Date();
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            let selectedDate = today;
            
            // Format date for display
            function formatDateDisplay(date) {
                const options = { weekday: 'long', month: 'long', day: 'numeric' };
                return date.toLocaleDateString('en-US', options);
            }

            // Update the date display
            function updateDateDisplay() {
                document.getElementById('current-date').textContent = formatDateDisplay(selectedDate);
                
                // Update navigation buttons
                const prevButton = document.getElementById('prev-day');
                const nextButton = document.getElementById('next-day');
                
                // Disable previous button if we're on today
                const now = new Date();
                if (selectedDate.getDate() === now.getDate() && 
                    selectedDate.getMonth() === now.getMonth() && 
                    selectedDate.getFullYear() === now.getFullYear()) {
                    prevButton.classList.add('disabled');
                    prevButton.disabled = true;
                } else {
                    prevButton.classList.remove('disabled');
                    prevButton.disabled = false;
                }
                
                // Disable next button if we're on tomorrow
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                if (selectedDate.getDate() === tomorrow.getDate() && 
                    selectedDate.getMonth() === tomorrow.getMonth() && 
                    selectedDate.getFullYear() === tomorrow.getFullYear()) {
                    nextButton.classList.add('disabled');
                    nextButton.disabled = true;
                } else {
                    nextButton.classList.remove('disabled');
                    nextButton.disabled = false;
                }
                
                // Show time slots for the selected date
                showTimeSlots(selectedDate);
            }
            
            // Add click handlers for navigation buttons
            document.getElementById('prev-day').addEventListener('click', function() {
                if (!this.disabled) {
                    selectedDate = new Date(selectedDate);
                    selectedDate.setDate(selectedDate.getDate() - 1);
                    updateDateDisplay();
                }
            });
            
            document.getElementById('next-day').addEventListener('click', function() {
                if (!this.disabled) {
                    selectedDate = new Date(selectedDate);
                    selectedDate.setDate(selectedDate.getDate() + 1);
                    updateDateDisplay();
                }
            });
            
            // Initialize with today's date
            updateDateDisplay();
            
            // Function to show time slots for a selected date
            function showTimeSlots(date) {
                const timeSlotGrid = document.getElementById('time-slots-grid');
                timeSlotGrid.innerHTML = '';
                
                // Generate time slots
                const timeSlots = generateTimeSlots(date);
                
                // Determine some slots to be marked as taken (for scarcity effect)
                const totalSlots = timeSlots.length;
                const numberOfTakenSlots = Math.floor(totalSlots * 0.4); // Mark about 40% as taken
                const takenSlotIndices = new Set();
                
                // Generate random indices for taken slots
                while (takenSlotIndices.size < numberOfTakenSlots) {
                    const randomIndex = Math.floor(Math.random() * totalSlots);
                    takenSlotIndices.add(randomIndex);
                }
                
                timeSlots.forEach((slot, index) => {
                    const timeElement = document.createElement('div');
                    timeElement.className = 'time-slot';
                    timeElement.textContent = slot;
                    
                    // Mark some slots as taken to create scarcity
                    if (takenSlotIndices.has(index)) {
                        timeElement.classList.add('taken');
                    } else {
                        timeElement.addEventListener('click', function() {
                            // Store the selected time and date in localStorage
                            const fullDateOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
                            const formattedDate = date.toLocaleDateString('en-US', fullDateOptions);
                            
                            localStorage.setItem('appointmentDate', formattedDate);
                            localStorage.setItem('appointmentTime', `${slot} (30 minutes)`);
                            localStorage.setItem('appointmentTimeZone', userTimeZone);
                            localStorage.setItem('appointmentTimeZoneAbbr', userTimeZoneAbbr);
                            
                            // Immediately redirect to thank you page
                            window.location.href = 'thank-you.php';
                        });
                    }
                    
                    timeSlotGrid.appendChild(timeElement);
                });
            }
            
            // Function to generate time slots
            function generateTimeSlots(date) {
                const slots = [];
                const userTimezoneOffset = new Date().getTimezoneOffset();
                
                // Eastern Time offset (in minutes)
                const now = new Date();
                const jan = new Date(now.getFullYear(), 0, 1);
                const jul = new Date(now.getFullYear(), 6, 1);
                const isDST = now.getTimezoneOffset() < Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
                const easternOffset = isDST ? 240 : 300;
                
                const timezoneDiff = userTimezoneOffset - easternOffset;
                let startHour = 14 - (timezoneDiff / 60);
                let endHour = 20 - (timezoneDiff / 60);
                
                for (let hour = Math.floor(startHour); hour <= Math.ceil(endHour); hour++) {
                    for (let minute = 0; minute < 60; minute += 15) {
                        const localTime = hour + (minute / 60);
                        if (localTime < startHour) continue;
                        if (localTime > endHour) continue;
                        
                        let displayHour = hour;
                        let period = 'AM';
                        
                        if (displayHour >= 12) {
                            period = 'PM';
                            if (displayHour > 12) {
                                displayHour -= 12;
                            }
                        }
                        if (displayHour === 0) {
                            displayHour = 12;
                        }
                        
                        const minuteStr = minute === 0 ? '00' : minute.toString();
                        const slot = `${displayHour}:${minuteStr} ${period}`;
                        slots.push(slot);
                    }
                }
                
                // Filter out past time slots if the selected date is today
                const now2 = new Date();
                if (date.getDate() === now2.getDate() && 
                    date.getMonth() === now2.getMonth() && 
                    date.getFullYear() === now2.getFullYear()) {
                    
                    return slots.filter(slot => {
                        const [time, period] = slot.split(' ');
                        let [hours, minutes] = time.split(':');
                        hours = parseInt(hours);
                        minutes = parseInt(minutes);
                        
                        if (period === 'PM' && hours < 12) {
                            hours += 12;
                        } else if (period === 'AM' && hours === 12) {
                            hours = 0;
                        }
                        
                        const slotTime = new Date();
                        slotTime.setHours(hours, minutes, 0, 0);
                        
                        const bufferTime = new Date();
                        bufferTime.setMinutes(bufferTime.getMinutes() + 30);
                        
                        return slotTime > bufferTime;
                    });
                }
                
                return slots;
            }

            // Populate timezone dropdown
            function populateTimezoneDropdown() {
                const timezoneSelector = document.getElementById('timezone-selector');
                const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                
                // Common timezones with standard names and abbreviations
                const timezones = [
                    { zone: 'America/New_York', name: 'Eastern Time', abbr: 'EST' },
                    { zone: 'America/Chicago', name: 'Central Time', abbr: 'CST' },
                    { zone: 'America/Denver', name: 'Mountain Time', abbr: 'MST' },
                    { zone: 'America/Los_Angeles', name: 'Pacific Time', abbr: 'PST' },
                    { zone: 'America/Phoenix', name: 'Mountain Time - AZ', abbr: 'MST' },
                    { zone: 'America/Anchorage', name: 'Alaska Time', abbr: 'AKST' },
                    { zone: 'Pacific/Honolulu', name: 'Hawaii Time', abbr: 'HST' },
                    { zone: 'Europe/London', name: 'UK Time', abbr: 'GMT' },
                    { zone: 'Europe/Paris', name: 'Central European Time', abbr: 'CET' },
                    { zone: 'Australia/Sydney', name: 'Australian Eastern Time', abbr: 'AEST' },
                    { zone: 'Asia/Tokyo', name: 'Japan Time', abbr: 'JST' }
                ];

                timezones.forEach(({ zone, name, abbr }) => {
                    const option = document.createElement('option');
                    option.value = zone;
                    option.text = `${name} (${abbr})`;
                    
                    if (zone === userTimeZone) {
                        option.selected = true;
                    }
                    timezoneSelector.appendChild(option);
                });

                // Add event listener for timezone changes
                timezoneSelector.addEventListener('change', function() {
                    showTimeSlots(selectedDate);
                });
            }

            // Initialize timezone dropdown
            populateTimezoneDropdown();
        });
    </script>
</body>
</html> 