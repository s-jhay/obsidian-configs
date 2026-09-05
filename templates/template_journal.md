---
id: <% tp.date.now("YYYYMMDDHHmmssSSS")%>
created: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
references:
urls:
tags:
  - journal
---

#### Status:
<% tp.file.cursor() %>

#### Tasks:
- [ ] 

#### Comments:

#### Notes created today:
```dataview
LIST
FROM ""
WHERE file.cday = date(today)
SORT file.ctime ASC
```

#### Notes modified today:
```dataview
LIST
FROM ""
WHERE file.mday = date(today)
SORT file.ctime ASC
```