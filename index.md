---
layout: default
title: "Training Resource Hub"
---

<!-- Load custom CSS (baseurl-safe) -->
<link rel="stylesheet" href="{{ '/assets/css/resources.css' | relative_url }}">

<h1>Training Resource Hub</h1>
<p>Browse and filter all your training resources. Add new PDFs, PowerPoints, Games, SCORM, H5P, and more.</p>

<div class="filter-bar">
  <button class="filter-btn active" data-type="all">All</button>
  <button class="filter-btn" data-type="pdf">PDF</button>
  <button class="filter-btn" data-type="ppt">PowerPoint</button>
  <button class="filter-btn" data-type="scorm">SCORM</button>
  <button class="filter-btn" data-type="h5p">H5P</button>
  <!-- Games use type: html in your resource files -->
  <button class="filter-btn" data-type="html">Games</button>
</div>

<!-- Match CSS class: .resources-grid -->
<div class="resources-grid" id="resourceGrid">
  {% for resource in site.resources %}
    <div class="resource-card" data-type="{{ resource.type }}">
      <div class="icon">{% include resource-icon.html type=resource.type %}</div>
      <div class="type">{{ resource.type | upcase }}</div>
      <h3>{{ resource.title }}</h3>
      <div class="desc">{{ resource.description }}</div>
      <!-- resource.file should already be baseurl-safe in each _resources/*.md -->
      <a class="btn" href="{{ resource.file | relative_url }}" target="_blank" rel="noopener">Open</a>
    </div>
  {% endfor %}
</div>

<script>
// Simple filter bar
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.resource-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.getAttribute('data-type');
    cards.forEach(card => {
      card.style.display = (type === 'all' || card.getAttribute('data-type') === type) ? '' : 'none';
    });
  });
});
</script>
