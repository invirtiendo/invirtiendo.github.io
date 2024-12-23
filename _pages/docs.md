---
layout: page
permalink: /docs
siderbar: true
---

<main class="d-md-flex">
    <div class="col-md-9 d-flex flex-column flex-fill">
        {% include archive.html type="docs" filter="category" %}
    </div>
    {% if page.sidebar %}
    <div class="col-md-3 d-none d-md-block d-flex flex-column flex-fill ms-3">
        {% include lateral-recent.html type="docs" title="Documentos recientes" %}
    </div>
    {% endif %}
</main>