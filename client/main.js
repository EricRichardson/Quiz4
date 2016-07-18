BASE_URL = 'http://localhost:3000/'

$(document).ready(function(){
  $.get(BASE_URL + 'companies', function(data){
    $(data).each(function(i){
      companyName = data[i].name;
      companyProducts = ''

      $(data[i].products).each(function(j){
        companyProducts += data[i].products[j].name +', '
      })
      companyProducts += "<hr>"
      //
      console.log(data[i].products[0])
       $('#companies').append( "<h2>" + companyName + "</h2> Products: " + companyProducts )
    })
  })
})
