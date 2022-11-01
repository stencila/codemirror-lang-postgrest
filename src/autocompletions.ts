export const autocompletions = [
  {
    "type": "keyword",
    "label": "from",
    "apply": "from ",
    "detail": "table",
    "info": "Query rows from a table"
  },
  {
    "type": "keyword",
    "label": "select",
    "apply": "select ",
    "detail": "columns",
    "info": "Select columns in a query"
  },
  {
    "type": "keyword",
    "label": "filter",
    "apply": "filter ",
    "detail": "expression",
    "info": "Filter rows in a query"
  },
  {
    "type": "keyword",
    "label": "where",
    "apply": "where ",
    "detail": "expression",
    "info": "Filter rows in a query (alias for `filter`)"
  },
  {
    "type": "keyword",
    "label": "sort",
    "apply": "sort ",
    "detail": "columns",
    "info": "Sort rows in a query"
  },
  {
    "type": "keyword",
    "label": "order",
    "apply": "order ",
    "detail": "columns",
    "info": "Sort rows in a query (alias for `sort`)"
  },
  {
    "type": "keyword",
    "label": "asc",
    "apply": "asc ",
    "info": "Sort a column in ascending order"
  },
  {
    "type": "keyword",
    "label": "desc",
    "apply": "desc ",
    "info": "Sort a column in descending order"
  },
  {
    "type": "keyword",
    "label": "nullsfirst",
    "apply": "nullsfirst ",
    "info": "Sort a column with NULL values first"
  },
  {
    "type": "keyword",
    "label": "nullslast",
    "apply": "nullslast ",
    "info": "Sort a column with NULL values last"
  },
  {
    "type": "keyword",
    "label": "insert",
    "apply": "insert ",
    "detail": "table",
    "info": "Insert new rows into a table"
  },
  {
    "type": "keyword",
    "label": "upsert",
    "apply": "upsert ",
    "detail": "table",
    "info": "Update or insert new row into a table"
  },
  {
    "type": "keyword",
    "label": "columns",
    "apply": "columns ",
    "detail": "columns",
    "info": "Select columns in data to insert or update (ignore the rest)"
  },
  {
    "type": "keyword",
    "label": "format",
    "apply": "format ",
    "detail": "csv|json|json5",
    "info": "Specify the format of data to insert or upsert"
  },
  {
    "type": "keyword",
    "label": "file",
    "apply": "file ",
    "detail": "path",
    "info": "Specify the file with data to insert or upsert"
  },
  {
    "type": "keyword",
    "label": "delete",
    "apply": "delete ",
    "detail": "table",
    "info": "Delete rows from a table"
  },
  {
    "type": "keyword",
    "label": "call",
    "apply": "call ",
    "info": "Call a PostgreSQL function"
  },
]
