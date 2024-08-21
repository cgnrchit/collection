

function testVariable() {
    var strText = document.getElementById("name").value;          
    var strText1 = document.getElementById("branch").value;
    var result = strText + ' ' + strText1;
    document.getElementById('output').textContent = result;
     
}
