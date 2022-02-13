<script type="text/javascript">
    var x = 0;
    var count = 0;
    var array = Array();
    var array1 = Array();
    var array2 = Array();
    var array3 = Array();
    var array4 = Array();

    function add_element_to_array() {
        count++;
        array[x] = document.getElementById("name").value;
        array1[x] = document.getElementById("Roll").value;
        array2[x] = document.getElementById("gender").value;
        array3[x] = document.getElementById("mail").value;
        array4[x] = document.getElementById("Sum").value;

        //alert("Element: " + array[x] + " Added at index " + x);
        x++;
        //document.getElementById("name").value = "";
    }

    function display_array() {
        var e = "<hr/><table border='5'><tr><th>Name<th>Roll No<th>Gender<th>Email<th>Summary</tr>";
        for (var y = 0; y < count; y++) {
            e += "<tr><td> " + array[y] + "</td>";
            e += "<td> " + array1[y] + "</td>";
            e += "<td> " + array2[y] + "</td>";
            e += "<td> " + array3[y] + "</td>";
            e += "<td> " + array4[y] + "</td>";

        }
        e += "</table>";
        document.getElementById("Result").innerHTML = e;

    }
</script>