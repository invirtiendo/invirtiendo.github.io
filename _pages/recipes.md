---
layout: page
siderbar: true
---

<main class="d-md-flex">
    <div class="col-md-9 d-flex flex-column flex-fill">
        {% include archive.html type="recipes" %}
    </div>
    {% if page.sidebar %}
    <div class="col-md-3 d-none d-md-block d-flex flex-column flex-fill ms-3">
        {% include lateral-recent.html type="recipes" title="Recetas recientes" %}
    </div>
    {% endif %}
</main>
