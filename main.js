function get_pargraph() {
    var inputs=[];
    for (var i=1; i<=6; i++)
    {
        inputs.push(document.getElementById ("para1_text_input1_"+i).value)
        inputs.push(document.getElementById ("para1_text_input2_"+i).value)
        inputs.push(document.getElementById ("para1_text_input3_"+i).value)
        inputs.push(document.getElementById ("para1_text_input4_"+i).value)
        inputs.push(document.getElementById ("para1_text_input5_"+i).value)
        inputs.push(document.getElementById ("para1_text_input6_"+i).value)
    }
    inputs.join(". ");

    document.getElementById("show_paragraph").innerHTML=inputs.join(". ")

    var inputs=[];
    for (var k=1; k<=6; k++)
    {
        inputs.push(document.getElementById ("para2_text_input1_"+i).value)
        inputs.push(document.getElementById ("para2_text_input2_"+i).value)
        inputs.push(document.getElementById ("para2_text_input3_"+i).value)
        inputs.push(document.getElementById ("para2_text_input4_"+i).value)
        inputs.push(document.getElementById ("para2_text_input5_"+i).value)
        inputs.push(document.getElementById ("para2_text_input6_"+i).value)
    }
    inputs.join(". ");

    document.getElementById("show_paragraph2").innerHTML=inputs.join(". ")
}