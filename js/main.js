// Sidebar Collapse Toggle
const collapseToggle = document.getElementById('collapseToggle');
const sidebarLeft = document.getElementById('sidebarLeft');
const mainGrid = document.getElementById('mainGrid');
const contentRight = document.querySelector('.content-right');
const sidebarSeparator = document.getElementById('sidebarSeparator');

collapseToggle.addEventListener('click', function() {
  if (sidebarLeft.classList.contains('collapsed')) {
    sidebarLeft.classList.remove('collapsed');
    sidebarLeft.style.width = 'var(--left-sidebar-width)';
    contentRight.style.marginLeft = "calc(var(--left-sidebar-width) + 1px)";
    sidebarSeparator.style.left = "calc(var(--left-sidebar-width))";
    mainGrid.classList.remove('sidebar-collapsed');
    contentRight.classList.remove("center-content");
    collapseToggle.innerHTML = "&#9650;"; // upward arrow
  } else {
    sidebarLeft.classList.add('collapsed');
    sidebarLeft.style.width = 'var(--left-sidebar-collapsed)';
    // Instead of expanding the content, simply center it.
    contentRight.style.marginLeft = "";
    contentRight.classList.add("center-content");
    sidebarSeparator.style.left = "calc(var(--left-sidebar-collapsed))";
    mainGrid.classList.add('sidebar-collapsed');
    collapseToggle.innerHTML = "&#9660;"; // downward arrow
  }
});

// Pinned Highlights Toggle
const togglePinned = document.getElementById('togglePinned');
const pinnedContent = document.getElementById('pinnedContent');
togglePinned.addEventListener('click', function() {
  if (pinnedContent.style.display === "none") {
    pinnedContent.style.display = "flex";
    togglePinned.innerHTML = "&#9650;";
  } else {
    pinnedContent.style.display = "none";
    togglePinned.innerHTML = "&#9660;";
  }
});

// Custom Dropdown Functionality
document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const dropdown = btn.parentElement;
    dropdown.classList.toggle('open');
  });
});
window.addEventListener('click', function(e) {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
});

// IntersectionObserver for Video Play/Pause
document.addEventListener("DOMContentLoaded", function(){
  const videos = document.querySelectorAll("video");
  let currentPlaying = null;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        if (currentPlaying && currentPlaying !== entry.target) {
          currentPlaying.pause();
        }
        entry.target.play();
        currentPlaying = entry.target;
      } else {
        entry.target.pause();
      }
    });
  }, { threshold: [0.5] });
  
  videos.forEach(video => {
    observer.observe(video);
    video.addEventListener("play", () => {
      videos.forEach(v => {
        if (v !== video) {
          v.pause();
        }
      });
      currentPlaying = video;
    });
  });
});
