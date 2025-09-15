---
layout: default
title: "Training Resource Hub"
---

<link rel="stylesheet" href="/assets/css/resources.css">

<h1>Training Resource Hub</h1>
<p>Browse and filter all your training resources. Add new PDFs, PowerPoints, Games, SCORM, H5P, and more.</p>

<div class="filter-bar">
  <button class="filter-btn active" data-type="all">All</button>
  <button class="filter-btn" data-type="pdf">PDF</button>
  <button class="filter-btn" data-type="ppt">PowerPoint</button>
  <button class="filter-btn" data-type="scorm">SCORM</button>
  <button class="filter-btn" data-type="h5p">H5P</button>
  <button class="filter-btn" data-type="game">Game</button>
</div>

<div class="resource-grid" id="resourceGrid">
  {% for resource in site.resources %}
    <div class="resource-card" data-type="{{ resource.type }}">
      <div class="icon">{% include resource-icon.html type=resource.type %}</div>
      <div class="type">{{ resource.type | upcase }}</div>
      <h3>{{ resource.title }}</h3>
      <div class="desc">{{ resource.description }}</div>
      <a class="btn" href="{{ resource.file }}" target="_blank">Open</a>
    </div>
  {% endfor %}
</div>

<script>
// Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.resource-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.getAttribute('data-type');
    cards.forEach(card => {
      if (type === 'all' || card.getAttribute('data-type') === type)
        card.style.display = '';
      else
        card.style.display = 'none';
    });
  });
});
</script>
