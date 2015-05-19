var row,
    col,
    rows,
    columns,
    table,
    body;

function createTable(columns, rows) {
  body = document.querySelector('body');
  table = document.createElement('table');

  for(row = 0; row < rows; row++) {
	var tr = document.createElement('tr');
	table.appendChild(tr);

	for(col = 0; col < columns; col++) {
	  var td = document.createElement('td');
	  var text = document.createTextNode('test');
	  td.appendChild(text);
	  tr.appendChild(td);
	}
  }

  body.appendChild(table);
}

createTable(4, 1);