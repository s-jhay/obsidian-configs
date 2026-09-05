---
id: <% tp.date.now("YYYYMMDDHHmmssSSS")%>
created: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
month: <% tp.date.now("YYYY-MM") %>
references:
urls:
tags:
  - tasks
  - tasksMonthly
---

### Month of <% tp.date.now("MMMM YYYY") %>

#### Tasks:
- [ ] <% tp.file.cursor() %>

#### Comments:

#### Notes created this month

```dataview
LIST
FROM ""
WHERE dateformat(date(created), "yyyy-MM") = dateformat(date(today), "yyyy-MM")
SORT created ASC
```

#### Notes modified this month

```dataview
LIST
FROM ""
WHERE dateformat(date(modified), "yyyy-MM") = dateformat(date(today), "yyyy-MM")
SORT modified ASC
```
