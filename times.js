

var timesTable = function(input) {
                var table = [];
                for(var multi = 0; multi <= 10; multi++){
                        table.push(input * multi);

}
        return table;

};


function buildTable(times) {
    var table = document.createElement("table");
    var fields = Object.keys(times);
    var headRow = document.createElement("tr");
    	fields.forEach(function(field) {
      		var headCell = document.createElement("th");
      		headCell.textContent = field;
      		headRow.appendChild(headCell);
    			});
    		table.appendChild(headRow);

    		fields.forEach(function(object) {
      			var row = document.createElement("tr");
      			fields.forEach(function(field) {
        		var cell = document.createElement("td");
        		cell.textContent = object[field];
        		row.appendChild(cell);
      										});
      			table.appendChild(row);
    		});

    return table;
  }


var run = function ()
{         
    var input = document.getElementById('input').value;
   
    document.body.appendChild(buildTable(timesTable(input)));
    
};

var button = document.getElementById('runner');
button.onclick = run;



  


