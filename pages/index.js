
function fiveNumber() {
    var number = document.getElementById("FN").value;


    var a = number.split(",");
    var len = a.length;
    for (var i = 0; i < len; i++) {
        for (j = 0; j < len; j++) {
            if (a[i] < a[j]) {
                var temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    var ave;


    ave = mean(a) / len;
    console.log(median(a, len));
    document.getElementById("box1").innerHTML = "median: " + median(a, len) + " Mean: " + ave + " Mode :" + mode(a, len);


}

function mean(number) {
    var sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum = sum + parseInt(number[i]);
    }
    return sum;
}


function median(a, len) {

    var b = len / 2;
    var c = (len / 2) + 1;

    var mid;
    if (len % 2 == 1) {
        mid = a[((len + 1) / 2) - 1];
        return mid;
    } else {
        mid = (a[b - 1] + a[c - 1]) / 2;
        var d = parseInt(a[b - 1]) + parseInt(a[c - 1]);
        console.log(d / 2);

        return d / 2;
    }

}

function mode(a, len) {
    var arr;
    var count = 1;
    var maxCount = 0;
    var max = 0;
    var next = 0;
    for (var i = 0; i < len; i++) {

        if (parseInt(a[i]) == parseInt(a[i + 1])) {
            count++;
            max = parseInt(a[i + 1]);
        } else if (parseInt(a[i]) != parseInt(a[i + 1])) {
            if (maxCount < count) {
                maxCount = count;
                next = max;

                count = 1;
            }

        }


    }
    return next;
}

function fibonacci() {
    var arr = [];
    var number = document.getElementById("FB").value;
    var sen = parseInt(number)

    for (var i = 0; i < 10; i++) {

        if (i == 0 || i == 1) {
            arr[i] = sen + i;
        } else {
            arr[i] = arr[i - 2] + arr[i - 1];
        }



    }
    document.getElementById("box2").innerHTML = arr;

}