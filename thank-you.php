<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Call Is Booked!</title>
    <meta name="description" content="Your call with Asher has been confirmed. Here's what to expect next.">
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
            
            .legal {
                margin-top: 2rem;
                padding-top: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <h1 class="headline">Here's Everything You Absolutely Need To Know Before Your Call</h1>
            <p class="subheadline">Please make sure you finish the video below.<br>**Spots are first come first serve**</p>
            
            <div class="video-section">
                <div class="video-instruction">
                    <i class="fas fa-play-circle"></i>
                    <span>Please Watch The Entire Video</span>
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
</body>
</html> 