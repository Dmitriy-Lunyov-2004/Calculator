function on_click_num(event)
{
    let enviroment = document.body
    .getElementsByClassName('calculator-interface-wrapper')[0]
    .getElementsByClassName('calculator-interface')[0];

    let target = enviroment.getElementsByClassName('calculator-input')[0];

    let source = event.target;

    target.innerHTML += event.target.getElementsByTagName('p')[0].innerHTML;
}