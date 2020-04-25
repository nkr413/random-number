let data = {
    getRandom(min, max) {
        mi = Math.ceil(min);
        ma = Math.floor(max);
        result = Math.floor(Math.random() * (ma - mi + 1)) + mi;
        let num_data = document.getElementById("number-result");

        num_data.innerHTML = result;
    }
};

let btn_start = document.getElementById("btn-start");

btn_start.addEventListener("click", (e) => {
    let inp_min = document.getElementById("inp-min");
    let inp_max = document.getElementById("inp-max");

    data.min = inp_min.value;
    data.max = inp_max.value;

    data.getRandom(data.min, data.max);
});
