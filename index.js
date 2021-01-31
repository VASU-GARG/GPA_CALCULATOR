function addinputs()
{
    var input=" "
    var n=document.getElementById("n").value;
    if (n>0) 
    {
        for (let i = 0; i < n;i++)
        {
            input += "SUBJECT "+(i+1) + ' ';
            input +="<input id='number"+i+"' name='number"+i+"' placeholder = 'enter'><br><br>";
        }
        document.getElementById('container').innerHTML = input;        
    }
    else
    {
        document.getElementById("container").innerHTML="ENTER A VALID NUMBER";
    }
}
    function calc()
{
    var s=0;
    var a=0;
    var temp=0;
    var n=document.getElementById("n").value;
    for(var i=0;i<n;i++)
    {
        a=document.getElementById("number"+i).value;
        s+=parseInt(a);
        if (parseInt(a)>100 || parseInt(a)<0) 
        {
            temp=1;
        }
     }
     if (temp==0 && n>0) 
     {
        document.getElementById('print').innerHTML="YOUR AVERAGE IS : ";
        document.getElementById("average").innerHTML=s/n;
        switch (parseInt((s/n)/10)) 
        {
            case 10:
            case 9:
                gpa='S';
            case 8:
                gpa='A';
                break;
            case 7:
                gpa='B';
                break;
            case 6:
                gpa='C';
                break;
            case 5:
                gpa='D';
                break;
            case 4:
                gpa='E';
                break;
            case 3:
                gpa='F';
                break;
        
            default:
                gpa='N';
                break;
        }
        document.getElementById("print2").innerHTML="YOUR GRADE IS"
        document.getElementById("grade").innerHTML=gpa;
     }
     else
     {
        document.getElementById("print").innerHTML="INVALID INPUT";
        document.getElementById("print2").innerHTML="";
        document.getElementById("average").innerHTML="";
        document.getElementById("grade").innerHTML="";
     }

    
    

}
    
