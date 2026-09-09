---
id: <% tp.date.now("YYYYMMDDHHmmssSSS")%>
created: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
references:
urls:
tags:
  - journal
---

[[JRNL_<% tp.date.now("YYYY-MM-DD", -1) %>|← Previous day]] · [[JRNL_<% tp.date.now("YYYY-MM-DD", 1) %>|Next day →]]
#### Status:
<% tp.file.cursor() %>
#### Tasks:
- [ ] 
#### Log:

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