<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
    <style>
        #calculator {
            width: 300px;
            margin: 0 auto;
            text-align: center;
            border: 1px solid #ccc;
            padding: 10px;
        }
        input[type="text"], input[type="button"] {
            width: 50px;
            height: 50px;
            margin: 5px;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div id="calculator">
        <input type="text" id="display" readonly>
        <br>
        <input type="button" value="1" onclick="appendToDisplay('1')">
        <input type="button" value="2" onclick="appendToDisplay('2')">
        <input type="button" value="3" onclick="appendToDisplay('3')">
        <input type="button" value="+" onclick="appendToDisplay('+')">
        <br>
        <input type="button" value="4" onclick="appendToDisplay('4')">
        <input type="button" value="5" onclick="appendToDisplay('5')">
        <input type="button" value="6" onclick="appendToDisplay('6')">
        <input type="button" value="-" onclick="appendToDisplay('-')">
        <br>
        <input type="button" value="7" onclick="appendToDisplay('7')">
        <input type="button" value="8" onclick="appendToDisplay('8')">
        <input type="button" value="9" onclick="appendToDisplay('9')">
        <input type="button" value="*" onclick="appendToDisplay('*')">
        <br>
        <input type="button" value="C" onclick="clearDisplay()">
        <input type="button" value="0" onclick="appendToDisplay('0')">
        <input type="button" value="=" onclick="calculate()">
        <input type="button" value="/" onclick="appendToDisplay('/')">
    </div>

    <script>
        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function calculate() {
            try {
                document.getElementById('display').value = eval(document.getElementById('display').value);
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }
    </script>
</body>
</html>
