BASE_URL = 'http://localhost:3000/'

var renderCompanies = function(){
  $('#companies').html('');
  $.get(BASE_URL + 'companies', function(data){
    $(data).each(function(i){
      var template = $('#company').html();
      Mustache.parse(template);
      var rendered = Mustache.render(template, data[i]);
      $('#companies').append( rendered );
    });

    $('.company-details').hide().each(function(i){
      $(this).delay(i*50).fadeIn(500);
    })
  })
}

$(document).ready(function(){

  renderCompanies();

  $('#companies').on('click', ".like", function(data){
    var companyId = $(this).parent().data('id');
    
    $.ajax({
      method: "POST",
      url: BASE_URL + 'likes/?company_id=' + companyId,
      error: function(){
        alert("Error in liking questions");
      },
      success: function(data){
       $('#like-count-'+ companyId).html(function(i, val) { return +val+1 });
      }
    })

  })
})
