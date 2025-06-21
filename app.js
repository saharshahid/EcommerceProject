function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

  
    function filterCards(category) {
      const cards = document.querySelectorAll('.card');
      const buttons = document.querySelectorAll('.filter-buttons button');

      buttons.forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');

      cards.forEach(card => {
        const isMatch = card.classList.contains(category) || category === 'all';
        card.style.display = isMatch ? 'block' : 'none';
      });
    }

   function showMore() {
      const hiddenCards = document.querySelectorAll('.card.hidden');
      hiddenCards.forEach(card => {
        card.classList.remove('hidden');
      });
      document.querySelector('.load-more-hijab-load-more').style.display = 'none';
    }
        

     // hidden testimonials
     function toggleTestimonials() {
  const allCards = document.querySelectorAll('.testimonial-card');
  const btn = document.querySelector('.load-more');
  if (btn.innerText === "Show More") {
    allCards.forEach(card => card.classList.remove('hidden'));
    btn.innerText = "Show Less";
  } else {
    allCards.forEach((card, idx) => {
      if (idx > 2) {
        card.classList.add('hidden');
      } else {
        card.classList.remove('hidden');
      }
    });
    btn.innerText = "Show More";
    window.scrollTo({ top: document.getElementById('reviews-section').offsetTop - 60, behavior: 'smooth' });
  }
}
    
   