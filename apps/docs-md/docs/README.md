# My todolist site documentation

## Simple and definition links

The todolist demo shows how the <!--simple link: --> [user](glossary.md#user) can manage the <!--definiton link: -->[todo item]s of his [todo list].

<!-- definitions  (place anywhere in document) -->

[todo item]: glossary.md#todo-item

[todo list]: glossary.md#todo-list

## Formatting demo

Autolink urls (remark-gfm): [www.example.com](http://www.example.com), <https://example.com>, and <contact@example.com>.

Autolink by regexp (remark-autolink-references):  <!-- "JIRA- 123" without space  -->
[JIRA-123](https://example.atlassian.net/browse/JIRA-123)

Image: ![my image](favicon.ico)

Table:

<table>
  <tr>
    <th>Test</th>
    <th>Table</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
  </tr>
</table>

formatting: **bold**  ***italic*** <s>strikethrough</s>

    this
      is
        formatted
          text

# Check dead links warnings (via remark-validate-links)

*   Real local anchor: [#local-chapter](#local-chapter)
*   Real page: [page2](page2.md)
*   Real page & real anchor: [page#chapter-2](page2.md#chapter-2)

To check dead links uncomment lines below:

<!-- *   Dead local anchor: [#dead-local-chapter](#dead-local-chapter) -->

<!-- *   Dead page: [dead-link](dead-link) -->

<!-- *   Real page & dead anchor: [page2#dead-anchor](page2.md#dead-anchor) -->

## Local Chapter
