function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 50, behavior: 'smooth' });
    }
  }
  