const endDate = new Date("9 Apr, 2025 23:13:00").getTime();
const startDate = new Date().getTime();


 
let x = setInterval(function updateTimer()
{
    
        const now = new Date().getTime();
    
        const distanceCovered = now - startDate;
        const distancePanding = endDate - now;
    
        //calculate day min hrs sec
        const dayInMill = (24*60*60*1000);
        const hrsInmill = (60*60*1000);
        const minInmill = (60*1000);
        const secInmill =(1000);

        if(distancePanding <= 0)
            {
                clearInterval(x);
                document.getElementsByClassName("box")[0].innerHTML = "EXPIRED";
                document.getElementById("progres").style.width = "100%";
                return;
            }


        const days =  Math.floor(distancePanding /(dayInMill));
        const hrs = Math.floor((distancePanding % (dayInMill))/(hrsInmill));
        const min = Math.floor((distancePanding % (hrsInmill))/(minInmill));
        const sec = Math.floor((distancePanding % (minInmill))/(secInmill));
    
        //populate in UI
        document.getElementById("day").innerHTML = days;
        document.getElementById("hrs").innerHTML = hrs;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
    
    
        //calculate with percentage for progress bar
        const totalDistace = endDate - startDate;
        const percentageDistance = (distanceCovered/totalDistace)*100;
    
        //set width for progress bar
        document.getElementById("progres").style.width = percentageDistance + "%";
    
        
    
},1000);