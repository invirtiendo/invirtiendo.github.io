---
layout: page
permalink: /docs
content_type: "docs"
---

<main class="d-md-flex">
    <div class="col-md-9 d-flex flex-column flex-fill">
        {% include archive.html type=page.content_type no_taxonomy=true %}
    </div>
    <div class="col-md-3 d-none d-md-block d-flex flex-column flex-fill ms-3">
        {% include lateral-recent.html type=page.content_type title="Documentos recientes" %}
    </div>
</main>