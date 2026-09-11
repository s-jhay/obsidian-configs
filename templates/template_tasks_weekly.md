---
id: <% tp.date.now("YYYYMMDDHHmmssSSS")%>
created: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
week_start: <% moment().startOf("isoWeek").format("YYYY-MM-DD") %>
week_end: <% moment().endOf("isoWeek").format("YYYY-MM-DD") %>
urls:
tags:
  - tasks
  - tasksWeekly
---

[[TSK_<% moment().startOf("isoWeek").subtract(1, "week").format("YYYY-MM-DD") %>_<% moment().startOf("isoWeek").subtract(1, "week").endOf("isoWeek").format("YYYY-MM-DD") %>|← Previous]] · [[TSK_<% moment().startOf("isoWeek").add(1, "week").format("YYYY-MM-DD") %>_<% moment().startOf("isoWeek").add(1, "week").endOf("isoWeek").format("YYYY-MM-DD") %>|Next →]]
### Week of <% moment().startOf("isoWeek").format("MMMM D") %>–<% moment().endOf("isoWeek").format("D, YYYY") %>

#### Tasks:
- [ ] <% tp.file.cursor() %>
#### Comments:
#### Notes created this week:
```dataview
LIST 
FROM "" 
WHERE file.cday >= date(this.week_start) 
AND file.cday <= date(this.week_end) 
SORT file.ctime ASC
```
#### Notes modified this week:
```dataview
LIST 
FROM "" 
WHERE file.mday >= date(this.week_start) 
AND file.mday <= date(this.week_end) 
SORT file.mtime ASC
```