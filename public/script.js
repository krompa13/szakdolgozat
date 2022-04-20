var sornevek = ['helyezés', 'csapat', 'lej. meccs', 'győzelem', 'döntetlen', 'vereség', 'pont']
var sornevek2 = ['helyezes', 'team', 'matchplay', 'win', 'draw', 'lose', 'points']

$(document).ready(function () {
  /*$('#main').append('<div class="sajt"></div>')
  $('.sajt').append('<div class="alma"></div>')
  $('.sajt').append('<div class="körte"></div>')
  $('.alma').append('<div class="csik"></div>')
*/

  $('#main').append('<div class="sajt"></div>')
  $('.sajt').append('<div class="alma"></div>')
  $('.sajt').append('<div class="körte"></div>')
  $('.alma').append('<div class="tabella1 tabella"></div>')
  $('.alma').append('<div class="tabella2 tabella"></div>')
  $('.körte').append('<div class="tabella3 tabella"></div>')
  $('.körte').append('<div class="tabella4 tabella"></div>')

  $('.tabella').append('<div class="sornevek"></div>')
  $('.tabella1').append('<div class="bajnok1 bajnok"></div>')
  $('.tabella2').append('<div class="bajnok2 bajnok"></div>')
  $('.tabella3').append('<div class="bajnok3 bajnok"></div>')
  $('.tabella4').append('<div class="bajnok4 bajnok"></div>')

  /*
  for (j = 0; j < sornevek.length; j++) {
    $('.sornevek').append('<div class="kocka">' + sornevek[j] + '</div>')
  }*/
  $('.sornevek').append('<div class="kocka">' + "helyezés" + '</div>')
  $('.sornevek').append('<div class="kocka kockacs">' + "csapat" + '</div>')
  $('.sornevek').append('<div class="kocka">' + "lej. meccs" + '</div>')
  $('.sornevek').append('<div class="kocka">' + "győzelem" + '</div>')
  $('.sornevek').append('<div class="kocka">' + "döntetlen" + '</div>')
  $('.sornevek').append('<div class="kocka">' + "vereség" + '</div>')
  $('.sornevek').append('<div class="kocka">' + "pont" + '</div>')


  $.get('http://localhost:8090/api/angol',  // url
    function (data, textStatus, jqXHR) {  // success callback
      console.log(data)
      for (i = 0; i < data.length; i++) {
        $('.bajnok1').append('<div class="acsik' + i +  ' csik"></div>')
      }
      for (i = 0; i < data.length; i++) {
          $('.acsik' + i ).append('<div class="adat ">' + data[i].helyezes + '</div>')
          $('.acsik' + i ).append('<div class="adat adatteam">' + data[i].team + '</div>')
          $('.acsik' + i ).append('<div class="adat">' + data[i].matchplay + '</div>')
          $('.acsik' + i ).append('<div class="adat">' + data[i].win + '</div>')
          $('.acsik' + i ).append('<div class="adat">' + data[i].draw + '</div>')
          $('.acsik' + i ).append('<div class="adat">' + data[i].lose + '</div>')
          $('.acsik' + i ).append('<div class="adat">' + data[i].points + '</div>')
        
      }

    });

  $.get('http://localhost:8090/api/spanyol',  // url
    function (datas, textStatus, jqXHR) {  // success callback
      console.log(datas)
      for (i = 0; i < datas.length; i++) {
        $('.bajnok2').append('<div class="scsik' + i + ' csik"></div>')
      }
      for (i = 0; i < datas.length; i++) {
        $('.scsik' + i + '').append('<div class="adat">' + datas[i].helyezes + '</div>')
        $('.scsik' + i + '').append('<div class="adat adatteam ">' + datas[i].team + '</div>')
        $('.scsik' + i + '').append('<div class="adat">' + datas[i].matchplay + '</div>')
        $('.scsik' + i + '').append('<div class="adat">' + datas[i].win + '</div>')
        $('.scsik' + i + '').append('<div class="adat">' + datas[i].draw + '</div>')
        $('.scsik' + i + '').append('<div class="adat">' + datas[i].lose + '</div>')
        $('.scsik' + i + '').append('<div class="adat">' + datas[i].points + '</div>')
      }

    });




  $.get('http://localhost:8090/api/magyar',  // url
    function (datam, textStatus, jqXHR) {  // success callback
      console.log(datam)
      for (i = 0; i < datam.length; i++) {
        $('.bajnok4').append('<div class="mcsik' + i + ' csik"></div>')
      }
      for (i = 0; i < datam.length; i++) {
        $('.mcsik' + i + '').append('<div class="adat">' + datam[i].helyezes + '</div>')
        $('.mcsik' + i + '').append('<div class="adat adatteam">' + datam[i].team + '</div>')
        $('.mcsik' + i + '').append('<div class="adat">' + datam[i].matchplay + '</div>')
        $('.mcsik' + i + '').append('<div class="adat">' + datam[i].win + '</div>')
        $('.mcsik' + i + '').append('<div class="adat">' + datam[i].draw + '</div>')
        $('.mcsik' + i + '').append('<div class="adat">' + datam[i].lose + '</div>')
        $('.mcsik' + i + '').append('<div class="adat">' + datam[i].points + '</div>')
      }

    });

    $.get('http://localhost:8090/api/nemet',  // url
    function (datas, textStatus, jqXHR) {  // success callback
      console.log(datas)
      for (i = 0; i < datas.length; i++) {
        $('.bajnok3').append('<div class="ncsik' + i + ' csik"></div>')
      }
      for (i = 0; i < datas.length; i++) {
        $('.ncsik' + i + '').append('<div class="adat">' + datas[i].helyezes + '</div>')
        $('.ncsik' + i + '').append('<div class="adat adatteam">' + datas[i].team + '</div>')
        $('.ncsik' + i + '').append('<div class="adat">' + datas[i].matchplay + '</div>')
        $('.ncsik' + i + '').append('<div class="adat">' + datas[i].win + '</div>')
        $('.ncsik' + i + '').append('<div class="adat">' + datas[i].draw + '</div>')
        $('.ncsik' + i + '').append('<div class="adat">' + datas[i].lose + '</div>')
        $('.ncsik' + i + '').append('<div class="adat">' + datas[i].points + '</div>')
      }

    });





})