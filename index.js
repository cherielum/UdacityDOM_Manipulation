
//use a jQuery class selector and featuredArticle variable to toggle the 'featured' class
var featuredArticle;

featuredArticle = $( '.article-item' ).toggleClass( );


//Remove the class 'featured' from Article #2 and add it to Article #3!
var article2, article3;

// article2 = $('.article-item').toggleClass('.featured');
// article3 = $('.article-item').toggleClass('.featured');
// article2 = $('.article-item').next('.featured').remove();
// article3 = $('.article-item').next('.featured').add();

article2 = $('.article-item').toggleClass('.featured').remove();
article3 = $('.article-item').toggleClass('.featured').add();

// article2= $(".featured");
// article3= article2.next();
// article2.toggleClass('featured');
// article3.toggleClass("featured");

//set the href of the <a> in the first nav item to "#1".
var navList, firstItem, link; 
navList = $('.nav-list');
firstItem = navList.children().first();
link = firstItem.find('a');
link.attr('href', '#1');

//change the font-size of all the article-items to 20px
var articleItems;

articleItems = 

// $('.article-item' ).css({
//     fontSize: "20px"
// });

$('.article-item' ).css("font-size" , "20px");

//use jQuery's val method to make live changes to the 'Cool Articles'

$('#input').on('change', function() {
    var val;
    // val = $( "h1" ).text( "This is Cameron's test" );
    val = $('#input').val();
    h1 = $('.articles').children('h1');
    h1.text(val);

});


//remove the <ul> from the first article item!


//articleItems = $('.article-item');
//ul = articleItems.find('ul').remove();

var articlleItems, ul; 
articleItems = $('.article-item');
ul = articleItems.find('ul');
ul.remove();

//'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
//of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
var family1, family2, bruce, madison, hunter; 


family1= $('#family1');
family2= $('<div id = "family2"> Family 2</div>');
bruce = $('<div id = "bruce">  </div>');
madison = $(' <div id = "madison">Madison </div>');
hunter = $(' <div id = "hunter">Hunter </div>');

family2.insertAfter(family1);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);

//

function number (){
    var text, number; 

    text = $(this).text();
    number = text.length; 
    $(this).text(text + " " + number);
}


$( "p" ).each(number);

//create a function that displays an image that's connected to HTMNL document

$(function() {
    $('img').attr('src', 'http://placekitten.com/350/150');
});

