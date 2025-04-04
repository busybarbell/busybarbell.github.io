<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmed - Your Strategy Session Is Set!</title>
    <meta name="description" content="Your weight loss strategy session has been confirmed. Here's what to expect next.">
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

        .video-section {
            width: 100%;
            margin: 0.5rem 0 1.5rem;
        }

        .video-instruction {
            background: var(--primary);
            color: var(--text);
            padding: 0.625rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            font-weight: 600;
            font-size: 0.9375rem;
            max-width: 800px;
            margin: 0 auto;
        }

        .video-instruction i {
            font-size: 1.125rem;
        }

        .video-container {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            background: var(--background);
            margin: 0 auto;
            max-width: 800px;
        }

        .video-container video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .video-thumbnail {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        
        .video-thumbnail .play-icon {
            position: absolute;
            font-size: 2.5rem;
            color: #000000;
            opacity: 0.9;
            transition: all 0.3s ease;
            background: #FFFFFF;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        
        .video-thumbnail .play-icon i {
            margin-left: 5px;
        }
        
        .video-thumbnail:hover .play-icon {
            opacity: 1;
            transform: scale(1.05);
        }
        
        .hidden {
            display: none !important;
        }

        .confirmation-card {
            width: 100%;
            max-width: 500px;
            margin: 0.5rem auto;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(148, 163, 184, 0.1);
            border-radius: 4px;
            padding: 1.5rem;
            text-align: left;
        }

        .card-header {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--text);
            border-bottom: 1px solid rgba(148, 163, 184, 0.1);
            padding-bottom: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .card-header i {
            color: var(--success);
        }

        .confirmation-details {
            margin-top: 0.5rem;
        }

        .detail-row {
            display: flex;
            margin-bottom: 0.75rem;
        }

        .detail-label {
            width: 140px;
            color: var(--text-light);
            font-size: 0.9375rem;
        }

        .detail-value {
            flex: 1;
            font-size: 0.9375rem;
            font-weight: 500;
        }

        .next-steps {
            margin-top: 1.5rem;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(148, 163, 184, 0.1);
        }

        .next-steps-header {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1rem;
            text-align: center;
        }

        .steps-list {
            list-style-type: none;
            counter-reset: steps-counter;
            max-width: 500px;
            margin: 0 auto;
            text-align: left;
        }

        .step-item {
            position: relative;
            padding-left: 2.5rem;
            margin-bottom: 1.25rem;
            counter-increment: steps-counter;
        }

        .step-item::before {
            content: counter(steps-counter);
            position: absolute;
            left: 0;
            top: 0;
            width: 1.75rem;
            height: 1.75rem;
            background-color: var(--primary);
            color: var(--text);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 0.875rem;
        }

        .step-title {
            font-weight: 600;
            margin-bottom: 0.25rem;
            color: var(--text);
        }

        .step-description {
            font-size: 0.9375rem;
            color: var(--text-light);
        }

        .add-calendar {
            margin-top: 2rem;
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .calendar-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.75rem 1.25rem;
            background: rgba(255, 255, 255, 0.05);
            color: var(--text);
            border: 1px solid rgba(148, 163, 184, 0.1);
            border-radius: 4px;
            font-size: 0.9375rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
        }

        .calendar-button:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .support-contact {
            margin-top: 2rem;
            font-size: 0.9375rem;
            color: var(--text-light);
        }

        .support-contact a {
            color: var(--primary);
            text-decoration: none;
        }

        .support-contact a:hover {
            text-decoration: underline;
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
            
            .confirmation-card {
                padding: 1rem;
            }
            
            .add-calendar {
                flex-direction: column;
                align-items: center;
            }
            
            .calendar-button {
                width: 100%;
                max-width: 280px;
            }
            
            .legal {
                margin-top: 2rem;
                padding-top: 1rem;
            }
        }

        /* Add form-section-header style */
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
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <h1 class="headline">Your Strategy Session is Confirmed!</h1>
            <p class="subheadline">Thank you for scheduling your free weight loss strategy session. Please make sure you finish the video below.</p>
            
            <div class="video-section">
                <div class="video-instruction">
                    <i class="fas fa-play-circle"></i>
                    <span>Watch Carefully</span>
                </div>
                <div class="video-container">
                    <video id="main-video" preload="metadata" playsinline>
                        <source src="video1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div id="video-thumbnail" class="video-thumbnail">
                        <video id="thumbnail-video" autoplay muted loop playsinline>
                            <source src="video1.mp4#t=0,5" type="video/mp4">
                        </video>
                        <div class="play-icon">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="confirmation-card">
                <div class="form-section-header">
                    <span>Appointment Details</span>
                </div>
                
                <div class="confirmation-details">
                    <div class="detail-row">
                        <div class="detail-label">Date:</div>
                        <div id="appointment-date" class="detail-value">Thursday, June 13, 2024</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">Time:</div>
                        <div id="appointment-time" class="detail-value">10:00 AM (30 minutes)</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">Time Zone:</div>
                        <div id="appointment-timezone" class="detail-value">America/New_York (EDT)</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">Name:</div>
                        <div id="appointment-name" class="detail-value">John Smith</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">Email:</div>
                        <div id="appointment-email" class="detail-value">john@example.com</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">Phone:</div>
                        <div id="appointment-phone" class="detail-value">+1 (555) 123-4567</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">Weight Goal:</div>
                        <div id="appointment-weight-goal" class="detail-value">25+ lbs</div>
                    </div>
                </div>
            </div>
            
            <div class="next-steps">
                <h2 class="next-steps-header">What Happens Next?</h2>
                
                <ul class="steps-list">
                    <li class="step-item">
                        <div class="step-title">Check Your Email</div>
                        <div class="step-description">We've sent a confirmation email with a calendar invite and meeting link. If you don't see it, please check your spam folder.</div>
                    </li>
                    <li class="step-item">
                        <div class="step-title">Prepare for Your Call</div>
                        <div class="step-description">Find a quiet space where you can talk openly about your weight loss journey. Have any relevant health information handy.</div>
                    </li>
                    <li class="step-item">
                        <div class="step-title">Join Your Session</div>
                        <div class="step-description">Click the meeting link in your confirmation email 5 minutes before your scheduled time. Our coach will call you if there are any technical issues.</div>
                    </li>
                </ul>
            </div>
            
            <div class="add-calendar">
                <a href="#" class="calendar-button" id="google-calendar">
                    <i class="fab fa-google"></i>
                    Add to Google Calendar
                </a>
                <a href="#" class="calendar-button" id="outlook-calendar">
                    <i class="far fa-calendar-alt"></i>
                    Add to Outlook
                </a>
                <a href="#" class="calendar-button" id="ical-download">
                    <i class="fas fa-calendar-plus"></i>
                    Download iCal File
                </a>
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
            // Get appointment details from localStorage
            const firstName = localStorage.getItem('firstName') || '';
            const lastName = localStorage.getItem('lastName') || '';
            const email = localStorage.getItem('email') || '';
            const phone = localStorage.getItem('phone') || '';
            const weightGoal = localStorage.getItem('weightGoal') || '25+ lbs'; // Default to 25+ lbs if not found
            const appointmentDate = localStorage.getItem('appointmentDate') || 'Thursday, June 13, 2024';
            const appointmentTime = localStorage.getItem('appointmentTime') || '10:00 AM (30 minutes)';
            const appointmentTimeZone = localStorage.getItem('appointmentTimeZone') || 'America/New_York';
            const appointmentTimeZoneAbbr = localStorage.getItem('appointmentTimeZoneAbbr') || 'EDT';
            
            // Update appointment details in the confirmation card
            document.getElementById('appointment-name').textContent = firstName + ' ' + lastName;
            document.getElementById('appointment-email').textContent = email;
            document.getElementById('appointment-phone').textContent = phone;
            document.getElementById('appointment-weight-goal').textContent = weightGoal;
            document.getElementById('appointment-date').textContent = appointmentDate;
            document.getElementById('appointment-time').textContent = appointmentTime;
            document.getElementById('appointment-timezone').textContent = `${appointmentTimeZone} (${appointmentTimeZoneAbbr})`;
            
            // Video thumbnail and play functionality
            const mainVideo = document.getElementById('main-video');
            const thumbnailContainer = document.getElementById('video-thumbnail');
            const thumbnailVideo = document.getElementById('thumbnail-video');
            
            // When thumbnail is clicked, hide thumbnail and play main video
            thumbnailContainer.addEventListener('click', function() {
                thumbnailContainer.classList.add('hidden');
                mainVideo.controls = true;
                mainVideo.play();
            });
            
            // If main video ends, show thumbnail again
            mainVideo.addEventListener('ended', function() {
                thumbnailContainer.classList.remove('hidden');
                mainVideo.controls = false;
                thumbnailVideo.currentTime = 0;
                thumbnailVideo.play();
            });
            
            // Create proper iCal content with timezone support
            function generateICalContent() {
                // Extract date and time information
                const dateParts = appointmentDate.split(', '); // ["Thursday", "June 13", "2024"]
                const dateStr = dateParts[1] + ' ' + dateParts[2]; // "June 13 2024"
                
                // Extract time without duration
                const timeStr = appointmentTime.split(' (')[0]; // "10:00 AM"
                
                // Convert to iCal format
                const startDate = new Date(dateStr + ' ' + timeStr);
                const endDate = new Date(startDate.getTime() + 30 * 60000); // Add 30 minutes
                
                // Format dates for iCal
                const formatDate = (date) => {
                    return date.toISOString().replace(/-|:|\.000/g, '').substring(0, 15) + 'Z';
                };
                
                const startFormatted = formatDate(startDate);
                const endFormatted = formatDate(endDate);
                const now = formatDate(new Date());
                
                // Create iCal content
                return [
                    'BEGIN:VCALENDAR',
                    'VERSION:2.0',
                    'PRODID:-//Busy Barbell//Weight Loss Strategy Session//EN',
                    'CALSCALE:GREGORIAN',
                    'METHOD:PUBLISH',
                    'BEGIN:VTIMEZONE',
                    `TZID:${appointmentTimeZone}`,
                    'END:VTIMEZONE',
                    'BEGIN:VEVENT',
                    `DTSTART;TZID=${appointmentTimeZone}:${startFormatted}`,
                    `DTEND;TZID=${appointmentTimeZone}:${endFormatted}`,
                    `DTSTAMP:${now}`,
                    'SUMMARY:Weight Loss Strategy Session',
                    `DESCRIPTION:Your personalized weight loss strategy session with Asher.\n\nThis appointment is scheduled in your local time zone: ${appointmentTimeZone}`,
                    'LOCATION:Online Zoom Call (link will be emailed)',
                    'STATUS:CONFIRMED',
                    'SEQUENCE:0',
                    'END:VEVENT',
                    'END:VCALENDAR'
                ].join('\r\n');
            }
            
            // Generate and handle Outlook Calendar
            function generateOutlookCalendarLink() {
                // For Outlook Web, we can use the same format as Google Calendar
                const dateParts = appointmentDate.split(', '); // ["Thursday", "June 13", "2024"]
                const dateStr = dateParts[1] + ' ' + dateParts[2]; // "June 13 2024"
                const timeStr = appointmentTime.split(' (')[0]; // "10:00 AM"
                
                const startDate = new Date(dateStr + ' ' + timeStr);
                const endDate = new Date(startDate.getTime() + 30 * 60000); // Add 30 minutes
                
                // Format dates for Outlook Calendar URL
                const formatDate = (date) => {
                    return date.toISOString().replace(/-|:|\.\d+/g, '');
                };
                
                const startFormatted = formatDate(startDate);
                const endFormatted = formatDate(endDate);
                
                // Create Outlook Calendar URL
                const eventTitle = encodeURIComponent('Weight Loss Strategy Session');
                const eventDescription = encodeURIComponent(`Your personalized weight loss strategy session with Asher.\n\nThis appointment is scheduled in your local time zone: ${appointmentTimeZone}`);
                const eventLocation = encodeURIComponent('Online Zoom Call (link will be emailed)');
                
                return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${eventTitle}&startdt=${startFormatted}&enddt=${endFormatted}&body=${eventDescription}&location=${eventLocation}`;
            }
            
            // Update the Outlook Calendar link
            document.getElementById('outlook-calendar').href = generateOutlookCalendarLink();
            
            // When clicked, open the calendar link in a new tab
            document.getElementById('outlook-calendar').addEventListener('click', function(e) {
                e.preventDefault();
                window.open(this.href, '_blank');
            });
            
            // Handle iCal download
            document.getElementById('ical-download').addEventListener('click', function(e) {
                e.preventDefault();
                
                // Generate iCal content
                const iCalContent = generateICalContent();
                
                // Create a Blob and download link
                const blob = new Blob([iCalContent], { type: 'text/calendar;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                
                // Create a download link and trigger it
                const downloadLink = document.createElement('a');
                downloadLink.href = url;
                downloadLink.download = 'weight-loss-strategy-session.ics';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            });

            // Generate Google Calendar link with timezone information
            function generateGoogleCalendarLink() {
                // Extract date and time information
                const dateParts = appointmentDate.split(', '); // ["Thursday", "June 13", "2024"]
                const dateStr = dateParts[1] + ' ' + dateParts[2]; // "June 13 2024"
                
                // Extract time without duration
                const timeStr = appointmentTime.split(' (')[0]; // "10:00 AM"
                
                // Convert to Google Calendar format (YYYYMMDDTHHMMSS/YYYYMMDDTHHMMSS)
                const startDate = new Date(dateStr + ' ' + timeStr);
                const endDate = new Date(startDate.getTime() + 30 * 60000); // Add 30 minutes
                
                // Format dates for Google Calendar URL
                const formatDate = (date) => {
                    return date.toISOString().replace(/-|:|\.\d+/g, '');
                };
                
                const startFormatted = formatDate(startDate);
                const endFormatted = formatDate(endDate);
                
                // Create Google Calendar URL
                const eventTitle = encodeURIComponent('Weight Loss Strategy Session');
                const eventDescription = encodeURIComponent(`Your personalized weight loss strategy session with Asher.\n\nThis appointment is scheduled in your local time zone: ${appointmentTimeZone}`);
                const eventLocation = encodeURIComponent('Online Zoom Call (link will be emailed)');
                
                return `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startFormatted}/${endFormatted}&details=${eventDescription}&location=${eventLocation}&ctz=${appointmentTimeZone.replace('/', '%2F')}`;
            }
            
            // Update the Google Calendar link
            document.getElementById('google-calendar').href = generateGoogleCalendarLink();
            
            // When clicked, open the Google Calendar link in a new tab
            document.getElementById('google-calendar').addEventListener('click', function(e) {
                e.preventDefault();
                window.open(this.href, '_blank');
            });
        });
    </script>
</body>
</html> 