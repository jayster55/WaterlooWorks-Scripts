function GetCellValues() {
    var table = document.getElementById('postingsTable');
    for (var r = 1, n = table.rows.length; r < n; r++) {
      var new_title = table.rows[r].cells[3].innerText.replace('NEW  ', '');
      console.log("%c" + table.rows[r].cells[4].innerHTML, 'background: #9c27b0; color: #fafafa');
      console.log("%c" + new_title, 'color: #2196f3');
      var percentage = (parseInt(table.rows[r].cells[6].innerText)*100/(parseInt(table.rows[r].cells[11].innerText) + 1));
      if (percentage < 10) {
        console.log('Percentage Chance:  ' + "%c" + percentage + '% \n', 'color: #e53935');
      } else if (percentage < 30) {
        console.log('Percentage Chance:  ' + "%c" + percentage + '% \n', 'color: #ffc107');
      } 
      else {
        console.log('Percentage Chance:  ' + "%c" + percentage + '% \n', 'color: #4caf50');
      }

    }
}
GetCellValues();