var options = {
  thumbnailData: [{
    title: "See Tutorials",
    number: '32',
    header: 'Learn React',
    description: 'React is fantastic new library for making fast, dynamic pages. React is fantastic new library for making fast, dynamic pages. React is fantastic new library for making fast, dynamic pages.',
    imageUrl: 'http://www.programwitherik.com/content/images/2015/12/reactjs.png'
  }, {
    title: "See Tutorials",
    number: '30',
    header: 'Learn Gulp',
    description: 'Gulp is fantastic new library for making fast, dynamic pages. Gulp is fantastic new library for making fast, dynamic pages. Gulp is fantastic new library for making fast, dynamic pages.',
    imageUrl: 'http://devstickers.com/assets/img/pro/jv81.png'
  }]
};

//render this class
var element = React.createElement(ThumbnailList, options);

//place it in my body tag
React.render(element, document.querySelector('.target'));
