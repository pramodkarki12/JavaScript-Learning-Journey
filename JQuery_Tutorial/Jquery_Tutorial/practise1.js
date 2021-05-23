$(function () {
  $('h1').css('color', 'red');

  $('button').click(function () {
    $('h1').before('<div class="testClass">Hello World</div>');
    $('li').after(`<span>Let's Go</span>`);
  });

  $('ul > li > a.link').css('text-decoration', 'none');
  $('ul > li > a.link').addClass('test');

  $('button').dblclick(function () {
    $('.testClass').hide();
    $('span').hide();
  });

  setTimeout(() => {
    $('h1').text('Time Up ⏲️');
  }, 3000);

   setTimeout(() => {
     $('ul li:last-child').html('<div><strong>Did it overwrite the link</strong></div>');
   }, 3000);
});
