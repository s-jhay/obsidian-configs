---
id: <% tp.date.now("YYYYMMDDHHmmssSSS")%>
created: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
type: "NEW_TYPE"
title: "{{VALUE:note_title}}"
author:
  - "NEW_AUTHOR"
references:
urls:
tags:
  - new
  - reference
---

#### Summary:
<% tp.file.cursor() %>

#### Excerpts:

#### Comments:

#### Referenced by:

```dataview
LIST
FROM ""
WHERE contains(references, this.file.link)
SORT file.name ASC
```
