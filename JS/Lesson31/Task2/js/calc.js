$(document).ready(function () {
    let $keys = $('button');
    let $total = $('#tablo');
    let decimal = false;
    let operators = ['+', '-', '×', '÷'];
    $total.addClass("complete");


    $keys.click(function () {
        let keyVal = $(this).data('val');
        output = $total.html();
        let lastChar = output[output.length - 1];

        // clear
        if (keyVal == 'clear') {
            $total.html('0');
            decimal = false;
        }

        // equal
        else if (keyVal == '=') {
            if (operators.indexOf(lastChar) > -1 || lastChar == '.')
                output = output.replace(/.$/, '');
            if (output) {
                $total.html(Math.round(eval(output) * 10000000) / 10000000);
            }
            $total.addClass("complete");
            decimal = false;
        }

        // operators
        else if ($(this).parent().is('.operation')) {
            if ($total.is(".complete")) {
                $total.removeClass("complete");
            }
            if (output != '' && operators.indexOf(lastChar) == -1) {
                $total.html($total.html() + keyVal);
            } else if (output == '' && keyVal == '-') {
                $total.html($total.html() + keyVal);
            }
            if (operators.indexOf(lastChar) > -1 && output.length > 1) {
                $total.html($total.html().replace(/.$/, keyVal));
            }
            decimal = false;
        }

        // decimal
        else if (keyVal == '.') {
            if ($total.is(".complete")) {
                $total.html('0' + keyVal);
                $total.removeClass("complete");
            } else if (output == '') {
                $total.html('0' + keyVal);
            } else if (operators.indexOf(lastChar) > -1) {
                $total.html($total.html() + '0' + keyVal);
            } else {
                if (!decimal) {
                    $total.html($total.html() + keyVal);
                    decimal = true;
                }
            }
        }

        // numerals
        else {
            if ($total.is(".complete")) {
                $total.html(keyVal);
                $total.removeClass("complete");
            } else {
                $total.html($total.html() + keyVal);
            }
        }
    })
});