
 function cetak(){
    var ambil = document.getElementById("bawa").isi.value;
    var ambil2 = document.getElementById("bawa").isi1.value;
    var serahkan = document.getElementById("disini");
    var serahkan2 = document.getElementById("disini2");

    if(ambil == 0)
    {
        alert("Data yang diinput masih kosong !!!!!")
    }
    else if (ambil !== null)
    {
        serahkan.innerHTML="Nama Kamu Adalah : " + ambil;
        serahkan2.innerHTML="Status Kamu Adalah : " + ambil2;
    }
    else {
        
    }
}
function jendela(){
    
    var buka = prompt(" Masukan Nama"  );
    var buka2 = prompt(" Masukan Status"  );
    var serahkan = document.getElementById("disini");
    var serahkan2 = document.getElementById("disini2");

    if(buka == 0)
    {
        alert("Data yang diinput masih kosong!!!!!")
    }
    else if(buka !== null)
    { 
        serahkan.innerHTML=" Nama Kamu Adalah : " + buka;   
        serahkan2.innerHTML=" Status Kamu Adalah : " + buka2;    
    }
    else {
       
    }
}
function modal(){
    var modal = document.getElementById("modal").isi.value;
    var modal1 = document.getElementById("modal").isi1.value;
    var serahkan = document.getElementById("disini");
    var serahkan2 = document.getElementById("disini2");

    if(modal == 0)
    {
        alert("Data yang diinput masih kosong !!!!!")
    }
    else if (modal1 !== null)
    {
        serahkan.innerHTML="Nama Kamu Adalah : " + modal;
        serahkan2.innerHTML="Status Kamu Adalah : " + modal1;
    }
}