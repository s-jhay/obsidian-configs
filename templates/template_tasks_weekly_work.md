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
  - work
---

[[WTSK_<% moment().startOf("isoWeek").subtract(1, "week").format("YYYY-MM-DD") %>_<% moment().startOf("isoWeek").subtract(1, "week").endOf("isoWeek").format("YYYY-MM-DD") %>|← Previous]] · [[WTSK_<% moment().startOf("isoWeek").add(1, "week").format("YYYY-MM-DD") %>_<% moment().startOf("isoWeek").add(1, "week").endOf("isoWeek").format("YYYY-MM-DD") %>|Next →]]
### Week of <% moment().startOf("isoWeek").format("MMMM D") %>–<% moment().endOf("isoWeek").format("D, YYYY") %>
#### Tasks:
- [ ] <% tp.file.cursor() %>
#### Log:

