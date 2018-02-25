
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