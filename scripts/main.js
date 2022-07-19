function get_target() {
    let target = document.getElementById("input_box");
    return target
}

function on_click_num(event)
{
    let target = get_target()
    target.innerHTML += event.target.innerHTML;
}

function backspace(event) {
    let target = get_target();
    let s = target.innerHTML;
    target.innerHTML = s.slice(0, s.length - 1);
}

function clear(event)
{
    let target = get_target();
    target.innerHTML = '';
}