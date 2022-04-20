var sornevek = ['helyezés', 'csapat', 'lej. meccs', 'győzelem', 'döntetlen', 'vereség', 'pont']
var sornevek2 = ['Név', 'Mezszám', 'Szül. Idő', 'Kor', 'Gól', 'Gólpassz', 'Játszott idő', 'Sárgalap', 'Piroslap']


$(document).ready(function () {
  $('#main').append('<div class="otpsajt"></div>')
  $('.otpsajt').append('<div class="csapatok"></div>')
  $('.otpsajt').append('<div class="csapat"></div>')


  $('.csapatok').append('<div class="sornevek2"></div>')
  $('.sornevek2').append('<div class="kocka2" >' + "Csapatok" + '</div>')

  $.get('http://localhost:8090/api/angolcsapat',  // url
    function (data, textStatus, jqXHR) {  // success callback
      console.log(data)

      for (i = 0; i < data.length; i++) {
        $('.csapatok').append('<button class="csapatgomb'+ i +' csapatgombok">' + data[i].team + '</button>')
      }

    });


  $('.csapat').append('<div class="sornevek"></div>')
  $('.sornevek').append('<div class="kocka" >' + "helyezés" + '</div>')
  $('.sornevek').append('<div class="kocka kockacs">' + "csapat" + '</div>')
  $('.sornevek').append('<div class="kocka">' + "lej. meccs" + '</div>')
  $('.sornevek').append('<div class="kocka">' + "győzelem" + '</div>')
  $('.sornevek').append('<div class="kocka">' + "döntetlen" + '</div>')
  $('.sornevek').append('<div class="kocka">' + "vereség" + '</div>')
  $('.sornevek').append('<div class="kocka">' + "pont" + '</div>')

  $.get('http://localhost:8090/api/angol',  // url
    function (datam, textStatus, jqXHR) {  // success callback
      console.log(datam)
      for (i = 0; i < datam.length; i++) {
        $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
      }
      for (i = 0; i < datam.length; i++) {
        $('.macsik' + i + '').append('<div class="adat" >' + datam[i].helyezes + '</div>')
        $('.macsik' + i + '').append('<div class="adat adatteam">' + datam[i].team + '</div>')
        $('.macsik' + i + '').append('<div class="adat">' + datam[i].matchplay + '</div>')
        $('.macsik' + i + '').append('<div class="adat">' + datam[i].win + '</div>')
        $('.macsik' + i + '').append('<div class="adat">' + datam[i].draw + '</div>')
        $('.macsik' + i + '').append('<div class="adat">' + datam[i].lose + '</div>')
        $('.macsik' + i + '').append('<div class="adat">' + datam[i].points + '</div>')
      }

    });


    $(".csapatok").on("click", ".csapatgomb0 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/mancity',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb1 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/liverpool',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb2 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/chelsea',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb3 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/tottenham',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb4 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/arsenal',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb5 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/westham',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb6 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/manunited',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb7 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/wolves',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb8 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/crystalpalace',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb9 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/leicester',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb10 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/brighton',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb11 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/astonvilla',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb12 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/southampton',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb13 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/newcastle',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb14 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/brentford',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb15 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/leeds',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb16 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/everton',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb17 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/burnley',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb18 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/watford',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });
    $(".csapatok").on("click", ".csapatgomb19 ", function () {
    
      $(".csapat").empty();
      $('.csapat').append('<div class="sornevek"></div>')
      $('.sornevek').append('<div class="kockaj kockan" >' + "Név" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Poszt" + '</div>')
      $('.sornevek').append('<div class="kockaj ">' + "Mezszám" + '</div>')
      $('.sornevek').append('<div class="kockaj kockaido">' + "Szül. idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Kor" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gól" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Gólpassz" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Játszott idő" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Sárgalap" + '</div>')
      $('.sornevek').append('<div class="kockaj">' + "Piroslap" + '</div>')
      $.get('http://localhost:8090/api/norwich',  // url
        function (datam, textStatus, jqXHR) {  // success callback
          console.log(datam)
          for (i = 0; i < datam.length; i++) {
            $('.csapat').append('<div class="macsik' + i + ' csik"></div>')
          }
          for (i = 0; i < datam.length; i++) {
            $('.macsik' + i + '').append('<div class="jatekadat adatn" >' + datam[i].Name + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat adatp" >' + datam[i].Pos + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Kit + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Birthday + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Age + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Goal + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Assist + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Time + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Yellow + '</div>')
            $('.macsik' + i + '').append('<div class="jatekadat">' + datam[i].Red + '</div>')
          }
  
        });
    });

    
})