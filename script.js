document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-bar').addEventListener('click', function() {
      let sidebar = document.getElementById('sidebar');
      sidebar.style.display = 'block'; // Show the sidebar
    });
  
    document.querySelector('.close-btn').addEventListener('click', function() {
      let sidebar = document.getElementById('sidebar');
      sidebar.style.display = 'none'; // Hide the sidebar
    });
  });
  