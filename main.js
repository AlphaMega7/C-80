

var std_array =[];

function submit() {

    var disp=[];
     
    for (j=1; j <=4; j++) {
    
        var std =document.getElementById("name_of_the_student_" +j).value;
        console.log(std);

        std_array.push(std);
    }
    console.log(std_array);

    var length= std_array.length;
    console.log(length);
    
    for ( x=0; x<length; x++) {
        disp.push("<h4>NAME- "+ std_array[x]+"</h4>");
        console.log(disp);
    }
    console.log(disp);

    document.getElementById("display_name_with_commas").innerHTML=disp;

    var rem_commas=disp.join(" ");
    console.log(rem_commas)
    document.getElementById("display_name_without_commas").innerHTML=rem_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}

function sorting() {
    std_array.sort();
    console.log(std_array);

    var disp_srt=[];
    
    var length= std_array.length;
    console.log(length);
    
    for ( x=0; x<length; x++) {
        disp_srt.push("<h4>NAME- "+ std_array[x]+"</h4>");
        console.log(disp_srt);
    }
    console.log(disp_srt);

    var rem_commas=disp_srt.join(" ");
    console.log(rem_commas)
    document.getElementById("display_name_without_commas").innerHTML=rem_commas;


}

 