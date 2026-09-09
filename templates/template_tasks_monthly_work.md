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
  - work
---

### Month of <% tp.date.now("MMMM YYYY") %>

#### Tasks:
- [ ] <% tp.file.cursor() %>
#### Comments:
