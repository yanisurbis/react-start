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

var Badge = React.createClass({displayName: "Badge",
  render : function() {
    return
    React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render : function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    })

    return
    React.createElement("div", null, 
      list
    )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render : function() {
    return
    React.createElement("div", {class: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageUrl}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
          React.createElement(Badge, {title: this.props.title, number: this.props.number})

        )
      )
    )
  }
});
