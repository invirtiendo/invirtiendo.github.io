---
layout: page
siderbar: true
---

<main class="d-md-flex">
    <div class="col-md-9 d-flex flex-column flex-fill">
        {% include archive.html type="analysis" filter="sectors" %}
    </div>
    {% if page.sidebar %}
    <div class="col-md-3 d-none d-md-block d-flex flex-column flex-fill ms-3">
        {% include lateral-recent.html type="analysis" title="Últimas valoraciones" %}
    </div>
    {% endif %}
</main>