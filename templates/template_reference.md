---
id: <% tp.date.now("YYYYMMDDHHmmssSSS")%>
created: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
type: "NEW_TYPE"
title: "{{VALUE:note_title}}"
publish_date: "YYYY-MM-dd"
author:
  - "NEW_AUTHOR"
urls:
tags:
  - new
  - reference
---
#### Summary:
<% tp.file.cursor() %>
#### Notes:

#### Comments:

#### See also:

#### Referenced by:
```dataview
LIST
FROM [[]]
```
