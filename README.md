# Answers

1:

$("a:contains('eal')").prop('style', 'color:red');

2:

$('a').click(function(event){
  event.preventDefault();
  $(this).fadeOut(500);
});

# Instructions

git clone git@github.com:EricRichardson/Quiz4.git
cd quiz4/company_products_rails
rake db:create db:migrate db:seed
rails s

*In a different tab navigate to the client folder*

open index.html

## Note

I started but did not finish the node component
