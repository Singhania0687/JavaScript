const endDate="18 February 2023 12:00 AM"
document.getElementById("endDate").innerHTML;
const inputs =document.querySelectorAll('input');
const clock=()=>{
    const end=new Date(endDate);
    const now=new Date()
    const diff=(end-now)/1000;
    if (diff>0)
    {
   inputs[0].value=Math.floor(diff/(24*60*60));
    const dif1=diff%(24*60*60);
   inputs[1].value=Math.floor(dif1/(60*60));
    const dif2=dif1%3600;
    inputs[2].value=Math.floor(dif2/60);
    inputs[3].value=Math.floor(dif2%60);}
    else
    return;
}
clock()