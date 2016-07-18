# Answers

1:

$("a:contains('eal')").prop('style', 'color:red');

2:

$('a').click(function(event){
  event.preventDefault();
  $(this).fadeOut(500);
});
