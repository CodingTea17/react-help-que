var heading = React.createElement('h1', {}, 'Help Queue');
var ticketLocation = React.createElement('h3', {}, '3a');
var ticketNames = React.createElement('h3', {}, 'Bob and Tim');
var ticketIssue = React.createElement('h3', {}, 'The clock isn\'t updating');
var app = React.createElement('div', {}, heading, ticketLocation, ticketNames, ticketIssue);

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
)
