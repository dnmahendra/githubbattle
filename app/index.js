var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/router');

var USER_DATA = {
  name: 'Mahendra Naga',
  username: 'dnmahendra',
  image: 'https://avatars2.githubusercontent.com/u/15628503?v=3&s=460'

}

var ProfilePic = React.createClass({
    render: function() {
      return (
          <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
        )
    }
});

var ProfileLink = React.createClass({
    render: function() {
      return (
        <a href={'https://www.github.com/' + this.props.username}>
        {this.props.username}
        </a>
      )
    }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileLink username={this.props.user.username} />
        <ProfileName name={this.props.user.name} />
      </div>
    )
  }
});

// ReactDOM.render(
//   <Avatar user={USER_DATA} />,
//   document.getElementById('app')
// );

ReactDOM.render(
  routes,
  document.getElementById('app')
);