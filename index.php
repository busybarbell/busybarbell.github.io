<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sustainable Weight Loss Without Diet Stress</title>
    <meta name="description" content="Discover how to lose weight without giving up your favorite foods. Join our free call to create a personalized weight loss plan.">
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
            padding: 0 1.25rem 2rem;
        }

        .callout {
            background: var(--primary);
            color: var(--text);
            padding: 0.625rem;
            font-weight: 700;
            font-size: 1rem;
            text-transform: none;
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
            margin: 0.5rem 0 0;
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
            margin: 0.5rem 0;
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

        .section-divider {
            border-top: 1px solid rgba(148, 163, 184, 0.2);
            margin: 0.5rem 0;
            width: 100%;
        }

        .scheduler-container {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            background: #FFFFFF;
            border-radius: 4px;
            padding: 1rem;
            color: #1E293B;
        }

        .contact-form {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
        }

        .form-blob {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(148, 163, 184, 0.1);
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 1.5rem;
        }

        .form-section-header {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
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
            border: 1px solid #94A3B8;
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 1.75rem;
        }

        .form-row {
            display: flex;
            width: 100%;
            border-bottom: 1px solid #94A3B8;
        }

        .form-row:last-child {
            border-bottom: none;
        }

        .form-field {
            flex: 1;
            position: relative;
        }

        .form-field.with-border {
            border-right: 1px solid #94A3B8;
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

        .form-field input:focus {
            outline: none;
            background: #F1F5F9 !important;
        }

        .form-field input::placeholder {
            color: #64748B;
        }

        .form-field select {
            width: 100%;
            padding: 0.875rem 0.5rem;
            background-color: #F8FAFC;
            color: #1E293B;
            font-size: 0.9rem;
            border: none;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            text-align: center;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748B' d='M6 8L2 4h8z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 0.75rem center;
            background-size: 0.85rem;
            padding-right: 1.5rem;
            border-radius: 0;
        }

        .form-field select:focus {
            outline: none;
            background-color: #F1F5F9 !important;
        }

        /* Country code field has fixed width */
        .form-field.country-code {
            flex: 0 0 120px;
        }

        /* Fix the country code select element */
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

        /* Invalid input styling */
        .invalid {
            border-color: #EF4444 !important;
            background-color: #FEF2F2 !important;
        }

        /* Remove unused styles */
        .name-row,
        .phone-row {
            display: none;
        }

        .radio-options {
            background: #FFFFFF;
            border: 1px solid #94A3B8;
            border-radius: 4px;
            margin-bottom: 1.5rem;
            display: flex;
            flex-direction: column;
            width: 100%;
            font-weight: 600;
        }

        .radio-option {
            position: relative;
            cursor: pointer;
            border-bottom: 1px solid #94A3B8;
            width: 100%;
        }

        .radio-option:last-child {
            border-bottom: none;
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
            color: #475569;
            border-radius: 4px;
        }

        .radio-option label {
            display: block;
            padding: 0.875rem 1rem 0.875rem 3rem;
            cursor: pointer;
            transition: background-color 0.2s ease;
            font-size: 0.95rem;
            color: #475569;
            width: 100%;
            text-align: left;
        }

        .radio-option:hover label {
            background-color: #F1F5F9;
        }

        .form-button {
            width: 100%;
            padding: 0.875rem 2rem;
            background: linear-gradient(to bottom, #EF4444, #DC2626);
            color: white;
            border: 1px solid #B91C1C;
            border-radius: 4px;
            font-size: 1.125rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .form-button:hover {
            background: linear-gradient(to bottom, #DC2626, #B91C1C);
            transform: translateY(-1px);
        }
        
        /* CTA Button above the fold */
        .cta-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.875rem 2rem;
            background: linear-gradient(to bottom, #EF4444, #DC2626);
            color: white;
            border: 1px solid #B91C1C;
            border-radius: 4px;
            font-size: 1.125rem;
            font-weight: 700;
            margin: 0.5rem auto;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
        
        .cta-button:hover {
            background: linear-gradient(to bottom, #DC2626, #B91C1C);
            transform: translateY(-1px);
        }
        
        .cta-button i {
            font-size: 1rem;
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

        @media (min-width: 769px) {
            .content {
                padding-top: 0.5rem;
            }
        }

        @media (max-width: 768px) {
            body {
                font-size: 15px;
            }
            
            .callout {
                font-size: 0.9375rem;
            }
            
            .content {
                gap: 1rem;
                padding: 0 1rem 1.5rem;
            }
            
            .headline {
                font-size: 1.625rem;
                margin-bottom: 0.25rem;
            }
            
            .subheadline {
                font-size: 1rem;
            }
            
            .video-container {
                padding-bottom: 56.25%;
                max-height: 250px;
            }
            
            .cta-button {
                width: 100%;
                padding: 0.75rem 1.5rem;
            }
            
            .scheduler-container {
                padding: 1rem;
            }
            
            .form-button {
                width: 100%;
                padding: 0.75rem 1.5rem;
            }
            
            .legal {
                margin-top: 2rem;
                padding-top: 1rem;
            }
        }

        .next-steps-header {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1rem;
            text-align: center;
        }

        .contact-info {
            margin-top: 2rem;
            padding: 1.5rem;
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 4px;
            text-align: left;
            color: #1E293B;
        }

        .contact-info-header {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #1E293B;
        }

        .contact-info-header i {
            color: var(--success);
        }

        .contact-info-form {
            margin-bottom: 1.5rem;
            background: #FFFFFF;
            border-radius: 4px;
            padding: 1rem;
        }

        .contact-info-item {
            display: flex;
            margin-bottom: 0.75rem;
            border-bottom: 1px solid #E2E8F0;
            padding-bottom: 0.75rem;
        }

        .contact-info-item:last-child {
            margin-bottom: 0;
            border-bottom: none;
            padding-bottom: 0;
        }

        .contact-info-label {
            width: 150px;
            color: #64748B;
            font-size: 0.9375rem;
            font-weight: 500;
        }

        .contact-info-input {
            flex: 1;
            font-size: 0.9375rem;
            padding: 0.5rem;
            border: 1px solid #E2E8F0;
            border-radius: 4px;
            color: #1E293B;
            background: #F8FAFC;
        }

        .contact-info-input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 1px var(--primary);
        }

        .contact-info-input::placeholder {
            color: #94A3B8;
        }

        select.contact-info-input {
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748B' d='M6 8L2 4h8z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 0.75rem center;
            padding-right: 2rem;
        }

        .form-button i {
            margin-left: 0.5rem;
        }

        /* Verification Modal Styles */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }

        .modal-content {
            background: #FFFFFF;
            padding: 1rem;
            border-radius: 4px;
            width: 90%;
            max-width: 500px;
            text-align: center;
            position: relative;
            border: 1px solid #CBD5E1;
        }

        .close-modal {
            display: none;
        }

        .verification-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1E293B;
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .verification-text {
            color: #475569;
            margin-bottom: 1.5rem;
            font-size: 0.95rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .phone-display {
            font-weight: 600;
            color: #1E293B;
        }

        .change-phone {
            color: #EF4444;
            text-decoration: underline;
            cursor: pointer;
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
            display: inline-block;
        }

        .verification-inputs {
            display: flex;
            gap: 0.5rem;
            justify-content: center;
            margin-bottom: 1.5rem;
        }

        .verification-input {
            width: 3rem;
            height: 3.5rem;
            border: 1px solid #CBD5E1;
            border-radius: 4px;
            font-size: 1.5rem;
            text-align: center;
            font-weight: 600;
            color: #1E293B;
            background: #FFFFFF;
        }

        .verification-input:focus {
            outline: none;
            border-color: #EF4444;
            background: #F1F5F9;
        }

        .resend-container {
            margin-top: 1.5rem;
            margin-bottom: 0;
        }

        .resend-text {
            color: #475569;
            font-size: 0.9rem;
        }

        .resend-link {
            color: #EF4444;
            text-decoration: underline;
            cursor: pointer;
            font-weight: 600;
        }

        .verification-button {
            width: 100%;
            padding: 0.875rem 2rem;
            background: linear-gradient(to bottom, #EF4444, #DC2626);
            color: white;
            border: 1px solid #B91C1C;
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

        .verification-button:hover {
            background: linear-gradient(to bottom, #DC2626, #B91C1C);
        }

        .highlight {
            text-decoration: underline;
            text-decoration-color: #0095F6;
            text-decoration-thickness: 2px;
            text-underline-offset: 4px;
        }

        em {
            font-style: italic;
            font-weight: inherit;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="callout">Struggling to Lose Weight for Summer?</div>
        <div class="content">
            <h1 class="headline">This <span class="highlight">6-WEEK CHALLENGE</span> Gets You <em>Beach-Ready</em> in Just <span class="highlight">a Few Hours a Week</span></h1>
            <p class="subheadline">WITHOUT cutting carbs, spending hours on the treadmill, or feeling hungry all the time.</p>
            
            <div class="video-section">
                <div class="video-instruction">
                    <i class="fas fa-play-circle"></i>
                    <span>Discover How It Works</span>
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

            <a href="#booking-form" class="cta-button">See if You're a Fit</a>

            <div class="section-divider"></div>
            
            <h2 class="next-steps-header">Book a Call Below to See if You're a Fit</h2>
            
            <div class="scheduler-container" id="booking-form">
                <form class="contact-form" action="thank-you.php" method="post" id="qualificationForm">
                    <!-- Contact Information Section -->
                    <div class="form-section-header">
                        <span>Contact Information</span>
                    </div>
                    <div class="input-container">
                        <div class="form-row">
                            <div class="form-field with-border">
                                <input type="text" id="first_name" name="first_name" placeholder="First Name" required>
                            </div>
                            <div class="form-field">
                                <input type="text" id="last_name" name="last_name" placeholder="Last Name" required>
    </div>
  </div>
                        <div class="form-row">
                            <div class="form-field">
                                <input type="email" id="email" name="email" placeholder="Email Address" required>
    </div>
  </div>
                        <div class="form-row">
                            <div class="form-field country-code with-border">
                                <select id="country_code" name="country_code" required>
                                    <option value="+1" selected>🇺🇸 US +1</option>
                                    <option value="+44">🇬🇧 UK +44</option>
                                    <option value="+61">🇦🇺 AU +61</option>
                                    <option value="+1">🇨🇦 CA +1</option>
                                    <option value="+64">🇳🇿 NZ +64</option>
                                    <option value="+353">🇮🇪 IE +353</option>
                                    <option value="+91">🇮🇳 IN +91</option>
                                    <option value="+49">🇩🇪 DE +49</option>
                                    <option value="+33">🇫🇷 FR +33</option>
                                    <option value="+34">🇪🇸 ES +34</option>
                                </select>
  </div>
                            <div class="form-field">
                                <input type="tel" id="phone" name="phone" required placeholder="Phone Number">
    </div>
          </div>
        </div>

                    <!-- Timeframe & Commitment Section -->
                    <div class="form-section-header">
                        <span>Timeframe & Commitment</span>
                    </div>
                    <div class="radio-options">
                        <div class="radio-option">
                            <input type="radio" id="qualified_ready" name="timeframe_commitment" value="ready_yes" required>
                            <label for="qualified_ready">I'm ready to get help now</label>
                        </div>
                        <div class="radio-option">
                            <input type="radio" id="not_qualified" name="timeframe_commitment" value="not_ready">
                            <label for="not_qualified">I'm just looking for free tips</label>
                        </div>
        </div>

                    <!-- Weight Goal Section -->
                    <div class="form-section-header">
                        <span>Weight Loss Goal</span>
                    </div>
                    <div class="radio-options">
                        <div class="radio-option">
                            <input type="radio" id="weight_less25" name="weight_goal" value="Less than 25 lbs" required>
                            <label for="weight_less25">Less than 25 pounds</label>
                        </div>
                        <div class="radio-option">
                            <input type="radio" id="weight_25plus" name="weight_goal" value="25+ lbs">
                            <label for="weight_25plus">25+ pounds</label>
            </div>
            </div>

                    <button type="submit" class="form-button" id="submitButton">
                        See if I'm a Fit <i class="fas fa-arrow-right"></i>
                    </button>
                </form>

                <script>
                    // Phone number formatting
                    const phoneInput = document.getElementById('phone');
                    
                    phoneInput.addEventListener('input', function(e) {
                        let value = e.target.value.replace(/\D/g, '');
                        if (value.length === 0) {
                            e.target.value = '';
                            return;
                        }
                        
                        // Format phone numbers based on country code
                        const countryCode = document.getElementById('country_code').value;
                        
                        if (countryCode === '+1') {
                            // US/Canada format: (XXX) XXX-XXXX
                            value = value.substring(0, 10);
                            if (value.length > 6) {
                                e.target.value = value.replace(/(\d{3})(\d{3})(\d{1,4})/, "($1) $2-$3");
                            } else if (value.length > 3) {
                                e.target.value = value.replace(/(\d{3})(\d{1,3})/, "($1) $2");
                            } else if (value.length > 0) {
                                e.target.value = value.replace(/(\d{1,3})/, "($1");
                            }
                        } else {
                            // Basic international format with spaces
                            value = value.substring(0, 15);
                            e.target.value = value.replace(/(\d{1,3})(?=(\d{3})+(?!\d))/g, "$1 ").trim();
                        }
                    });
                    
                    // Update phone formats when changing country code
                    document.getElementById('country_code').addEventListener('change', function(e) {
                        const phoneInput = document.getElementById('phone');
                        
                        // Clear phone input when changing country codes
                        phoneInput.value = '';
                        phoneInput.placeholder = 'Phone Number';
                    });

                    // Set default placeholder on load
                    document.addEventListener('DOMContentLoaded', function() {
                        document.getElementById('phone').placeholder = 'Phone Number';
                    });

                    // Add input validation for email
                    const emailInput = document.getElementById('email');
                    emailInput.addEventListener('blur', function(e) {
                        const email = e.target.value;
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        
                        if (email && !emailRegex.test(email)) {
                            e.target.classList.add('invalid');
                        } else {
                            e.target.classList.remove('invalid');
                        }
                    });
                    
                    // Smooth scroll for CTA button
                    document.querySelector('.cta-button').addEventListener('click', function(e) {
                        e.preventDefault();
                        const target = document.querySelector(this.getAttribute('href'));
                        if (target) {
                            window.scrollTo({
                                top: target.offsetTop - 20,
                                behavior: 'smooth'
                            });
                        }
                    });

                    // Add qualification logic
                    document.getElementById('qualificationForm').addEventListener('submit', function(event) {
                        event.preventDefault();
                        
                        // Get qualification answers
                        const timeframeCommitment = document.querySelector('input[name="timeframe_commitment"]:checked').value;
                        const weightGoal = document.querySelector('input[name="weight_goal"]:checked').value;
                        
                        // Check if qualified
                        const isQualified = (
                            timeframeCommitment === 'ready_yes' && 
                            weightGoal === '25+ lbs'
                        );
                        
                        // Redirect based on qualification
                        if (isQualified) {
                            // Save form data to localStorage
                            localStorage.setItem('firstName', document.getElementById('first_name').value);
                            localStorage.setItem('lastName', document.getElementById('last_name').value);
                            localStorage.setItem('email', document.getElementById('email').value);
                            localStorage.setItem('phone', document.getElementById('country_code').value + ' ' + document.getElementById('phone').value);
                            localStorage.setItem('timeframeCommitment', timeframeCommitment);
                            localStorage.setItem('weightGoal', weightGoal);
                            
                            // Show verification modal instead of redirecting
                            document.getElementById('verificationModal').style.display = 'flex';
                        } else {
                            window.location.href = 'free-download.php';
                        }
                    });

                    // Video thumbnail and play functionality
                    document.addEventListener('DOMContentLoaded', function() {
                        const mainVideo = document.getElementById('main-video');
                        const thumbnailContainer = document.getElementById('video-thumbnail');
                        const thumbnailVideo = document.getElementById('thumbnail-video');
                        
                        // Fix for mobile: ensure thumbnail video loads and plays
                        function initThumbnail() {
                            // Reset video source with cache-busting parameter
                            const currentSrc = thumbnailVideo.querySelector('source').src;
                            const newSrc = currentSrc.split('#')[0] + '#t=0,5?' + new Date().getTime();
                            thumbnailVideo.querySelector('source').src = newSrc;
                            
                            // Force load and play
                            thumbnailVideo.load();
                            thumbnailVideo.play().catch(e => {
                                console.log('Auto-play prevented, using fallback');
                                // If autoplay fails, use a static thumbnail instead
                                thumbnailContainer.style.backgroundImage = 'url("thumbnail.png")';
                                thumbnailContainer.style.backgroundSize = 'cover';
                                thumbnailContainer.style.backgroundPosition = 'center';
                            });
                        }
                        
                        // Initialize thumbnail
                        initThumbnail();
                        
                        // When thumbnail is clicked, hide thumbnail and play main video
                        thumbnailContainer.addEventListener('click', function() {
                            thumbnailContainer.classList.add('hidden');
                            mainVideo.controls = true;
                            mainVideo.play().catch(e => {
                                console.log('Error playing main video:', e);
                            });
                        });
                        
                        // If main video ends, show thumbnail again
                        mainVideo.addEventListener('ended', function() {
                            thumbnailContainer.classList.remove('hidden');
                            mainVideo.controls = false;
                            initThumbnail();
                        });
                    });
                </script>
            </div>

            <div class="legal">
                <p>This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
                <p>Individual results may vary. The testimonials and examples used are exceptional results, which do not apply to the average purchaser, and are not intended to represent or guarantee that anyone will achieve the same or similar results.</p>
                <p>This site may contain information about products, services, or other materials that may be offered by third parties. We do not endorse or guarantee the accuracy of any information offered by these third parties.</p>
                <p>© 2024 All Rights Reserved</p>
                <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Disclaimer</a></p>
            </div>
          </div>
        </div>

    <!-- Verification Modal -->
    <div class="modal-overlay" id="verificationModal">
        <div class="modal-content">
            <h2 class="verification-title">Verification</h2>
            <p class="verification-text">SMS sent to: <span class="phone-display" id="phoneDisplay"></span></p>
            
            <div class="verification-inputs">
                <input type="text" class="verification-input" maxlength="1" pattern="[0-9]" inputmode="numeric" autofocus>
                <input type="text" class="verification-input" maxlength="1" pattern="[0-9]" inputmode="numeric">
                <input type="text" class="verification-input" maxlength="1" pattern="[0-9]" inputmode="numeric">
                <input type="text" class="verification-input" maxlength="1" pattern="[0-9]" inputmode="numeric">
                <input type="text" class="verification-input" maxlength="1" pattern="[0-9]" inputmode="numeric">
                <input type="text" class="verification-input" maxlength="1" pattern="[0-9]" inputmode="numeric">
            </div>

            <button class="verification-button" id="verifyButton" onclick="window.location.href='calendar.php'">
                Verify & Continue <i class="fas fa-arrow-right"></i>
            </button>

            <div class="resend-container">
                <span class="resend-text">Didn't receive the code? </span>
                <span class="resend-link" id="resendCode">Resend code</span>
          </div>
        </div>
    </div>

    <script>
        // Handle verification modal
        const verificationModal = document.getElementById('verificationModal');
        const closeModal = document.getElementById('closeModal');
        const changePhone = document.getElementById('changePhone');
        const phoneDisplay = document.getElementById('phoneDisplay');
        const resendCode = document.getElementById('resendCode');
        const verificationInputs = document.querySelectorAll('.verification-input');
        const verifyButton = document.getElementById('verifyButton');

        // Function to focus first input
        const focusFirstInput = () => {
            setTimeout(() => {
                verificationInputs[0].focus();
                verificationInputs[0].click();
            }, 50);
        };

        // Display phone number in modal
        phoneDisplay.textContent = localStorage.getItem('phone') || '';

        // Close modal
        closeModal.addEventListener('click', () => {
            verificationModal.style.display = 'none';
        });

        // Change phone number
        changePhone.addEventListener('click', () => {
            verificationModal.style.display = 'none';
            document.getElementById('phone').focus();
        });

        // Handle verification inputs
        verificationInputs.forEach((input, index) => {
            // Clear any existing value
            input.value = '';
            
            input.addEventListener('input', (e) => {
                // Only allow numbers
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                
                if (e.target.value.length === 1) {
                    if (index < verificationInputs.length - 1) {
                        verificationInputs[index + 1].focus();
                    }
                }
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && !e.target.value && index > 0) {
                    verificationInputs[index - 1].focus();
                }
            });

            // Handle paste event
            input.addEventListener('paste', (e) => {
                e.preventDefault();
                const pastedData = (e.clipboardData || window.clipboardData).getData('text');
                const numbers = pastedData.match(/\d/g);
                
                if (numbers) {
                    numbers.forEach((num, i) => {
                        if (i < verificationInputs.length) {
                            verificationInputs[i].value = num;
                            if (i < verificationInputs.length - 1) {
                                verificationInputs[i + 1].focus();
                            }
                        }
                    });
                }
            });
        });

        // Start countdown on modal open
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Store form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                weightGoal: document.querySelector('input[name="weight_goal"]:checked').value
            };
            
            // Store in localStorage
            Object.entries(formData).forEach(([key, value]) => {
                localStorage.setItem(key, value);
            });
            
            // Show verification modal
            verificationModal.style.display = 'flex';
            phoneDisplay.textContent = formData.phone;
            
            // Start the countdown
            startCountdown();
            
            // Focus first input immediately
            requestAnimationFrame(() => {
                verificationInputs[0].focus();
                verificationInputs[0].select();
            });
        });

        // When modal becomes visible, focus first input
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.target === verificationModal && 
                    mutation.type === 'attributes' && 
                    mutation.attributeName === 'style' &&
                    verificationModal.style.display === 'flex') {
                    requestAnimationFrame(() => {
                        verificationInputs[0].focus();
                        verificationInputs[0].select();
                    });
                }
            });
        });

        observer.observe(verificationModal, { attributes: true });
    </script>
</body>
</html> 