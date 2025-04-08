<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Free Weight Loss Resources</title>
    <meta name="description" content="Get instant access to the best free weight loss resources to help you on your fitness journey.">
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

        /* Video section styles */
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

        .video-container video,
        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
            object-fit: cover;
        }

        /* Video thumbnail styles */
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
            background-color: rgba(0, 0, 0, 0.2);
            z-index: 2;
        }
        
        .video-thumbnail .play-icon {
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

        .app-icon {
            width: 80px;
            height: 80px;
            border-radius: 20px;
            margin: 0 auto 1rem;
            display: block;
        }

        .section-header {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1rem;
            text-align: center;
        }

        .resources-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
            margin-top: 1rem;
        }

        .resource-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(148, 163, 184, 0.1);
            border-radius: 8px;
            padding: 1.5rem;
            width: 100%;
            max-width: 350px;
            text-align: left;
        }

        .resource-card:hover {
            box-shadow: 0 0 0 1px rgba(148, 163, 184, 0.2);
        }

        .resource-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: var(--primary);
            text-align: center;
        }

        .resource-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: var(--text);
        }

        .resource-description {
            color: var(--text-light);
            margin-bottom: 1rem;
            font-size: 0.9375rem;
        }

        .store-buttons {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .resource-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: var(--primary);
            color: var(--text);
            border: none;
            border-radius: 4px;
            font-size: 0.9375rem;
            font-weight: 600;
            margin-top: 0.5rem;
            cursor: pointer;
            text-decoration: none;
            transition: background-color 0.2s ease;
            width: 100%;
        }

        .resource-link:hover {
            background: var(--primary-dark);
        }

        .video-description {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(148, 163, 184, 0.1);
            border-radius: 8px;
            padding: 1.5rem;
            margin: 0 auto 2rem;
            max-width: 800px;
            text-align: left;
        }

        .video-description p {
            margin-bottom: 0.75rem;
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
            
            .content {
                gap: 1rem;
                padding: 1.5rem 1rem 1.5rem;
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

            .resources-container {
                flex-direction: column;
                align-items: center;
            }

            .resource-card {
                max-width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <h1 class="headline">Sorry, You Don't Qualify</h1>
            
            <div class="video-section">
                <div class="video-instruction">
                    <i class="fas fa-play-circle"></i>
                    <span>Find Out Why</span>
                </div>
                <div class="video-container">
                    <video id="main-video" width="560" height="315" preload="metadata" playsinline>
                        <source src="video1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div id="video-thumbnail" class="video-thumbnail">
                        <div class="play-icon">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <hr style="border: none; border-top: 1px solid rgba(148, 163, 184, 0.2); margin: 2rem 0;">
            
            <h2 class="section-header">Recommended Resources</h2>
 
            <div class="video-section">
                <div class="video-instruction">
                    <i class="fas fa-play-circle"></i>
                    <span>My Favorite Fat Loss Guide</span>
                </div>
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/roHQ3F7d9YQ?si=HH_LwVxj6av6D7xv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
   
            <div class="resources-container">
                <div class="resource-card">
                    <img src="https://i.postimg.cc/dVfh9V2J/460x0w-1.webp" alt="Strong App" class="app-icon">
                    <h3 class="resource-title">The Strong App</h3>
                    <p class="resource-description">The easiest app to track your workouts. Log your exercises, sets, and how much weight you use.</p>
                    <p class="resource-description">See how much stronger you get each week and follow ready-made workout plans.</p>
                    <div class="store-buttons">
                        <a href="https://apps.apple.com/us/app/strong-workout-tracker-gym-log/id464254577" target="_blank" class="resource-link">
                            <i class="fab fa-apple"></i>
                            App Store
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=io.strongapp.strong" target="_blank" class="resource-link">
                            <i class="fab fa-google-play"></i>
                            Google Play
                        </a>
                    </div>
                </div>
                
                <div class="resource-card">
                    <img src="https://i.postimg.cc/4d6nZvr3/460x0w.webp" alt="MyFitnessPal" class="app-icon">
                    <h3 class="resource-title">MyFitnessPal</h3>
                    <p class="resource-description">The best app for tracking what you eat. It has millions of foods in its list so you can track easily.</p>
                    <p class="resource-description">Count your calories and protein to make sure you're on track to lose weight.</p>
                    <div class="store-buttons">
                        <a href="https://apps.apple.com/us/app/myfitnesspal/id341232718" target="_blank" class="resource-link">
                            <i class="fab fa-apple"></i>
                            App Store
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.myfitnesspal.android" target="_blank" class="resource-link">
                            <i class="fab fa-google-play"></i>
                            Google Play
                        </a>
                    </div>
                </div>
            </div>

            <div class="legal">
                <p>This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
                <p>Individual results may vary. The information provided is for educational purposes only and is not intended as medical advice.</p>
                <p>The YouTube video linked on this page is owned by Jeff Nippard and is shared for educational purposes only.</p>
                <p>© 2024 All Rights Reserved</p>
                <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Disclaimer</a></p>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Video thumbnail and play functionality
            const mainVideo = document.getElementById('main-video');
            const thumbnailContainer = document.getElementById('video-thumbnail');
            const thumbnailVideo = document.getElementById('thumbnail-video');
            
            // Fix for mobile: ensure thumbnail video loads and plays
            function initThumbnail() {
                if (thumbnailVideo) {
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
                } else {
                    // If thumbnail video element doesn't exist, use static image
                    thumbnailContainer.style.backgroundImage = 'url("thumbnail.png")';
                    thumbnailContainer.style.backgroundSize = 'cover';
                    thumbnailContainer.style.backgroundPosition = 'center';
                }
            }
            
            // Initialize thumbnail
            initThumbnail();
            
            // When thumbnail is clicked, hide thumbnail and play main video
            thumbnailContainer.addEventListener('click', function() {
                thumbnailContainer.classList.add('hidden');
                mainVideo.controls = true;
                // Ensure video maintains proper size
                mainVideo.style.width = '100%';
                mainVideo.style.height = '100%';
                mainVideo.play();
            });
            
            // If main video ends, show thumbnail again
            mainVideo.addEventListener('ended', function() {
                thumbnailContainer.classList.remove('hidden');
                mainVideo.controls = false;
                initThumbnail();
            });
        });
    </script>
</body>
</html> 