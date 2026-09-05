---
id: <% tp.date.now("YYYYMMDDHHmmssSSS")%>
created: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
week_start: <% tp.date.weekday("YYYY-MM-DD", 1) %>
references:
urls:
tags:
  - tasks
  - tasksWeekly
---

### Week of <% moment().startOf("isoWeek").format("MMMM D") %>–<% moment().endOf("isoWeek").format("D, YYYY") %>

#### Tasks:
- [ ] <% tp.file.cursor() %>

#### Comments:

#### Notes created this week:
```dataview
LIST
FROM ""
WHERE file.cday = date(today)
SORT file.ctime ASC
```

#### Notes modified this week:
```dataview
LIST
FROM ""
WHERE file.mday = date(today)
SORT file.ctime ASC
```