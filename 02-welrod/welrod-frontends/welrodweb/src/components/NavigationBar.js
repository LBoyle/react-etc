import React from 'react';
import { Link } from 'react-router-dom';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.menuOpen = false;
  }
  componentDidMount() {
    this.menuBar = document.getElementById('nav-container');
    this.menuBarItems = document.getElementById('mobile-nav-items');
  }
  clickMenu() {
    this.menuOpen = !this.menuOpen;
    this.menuBar.style.height = this.menuOpen ? 'auto' : '10vh';
    this.menuBarItems.style.display = this.menuOpen ? 'block' : 'none';
  }
  render() {
    return (
      <nav className="Nav" id="nav-container">
        <ul id="desktop-nav">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/signup'>Signup</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <ul id="mobile-nav">
          <li><a href="javascript:void(0);" onClick={() => this.clickMenu()}>Menu</a></li>
        </ul>
        <ul id="mobile-nav-items">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/signup'>Signup</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    );
  }
}

// export default class NavigationBar;
// import io from 'socket.io-client';
// const socketUrl = 'http://localhost:8000';
// constructor(props) {
//   super(props);
//
//   this.state = {
//     socket:null
//   };
// }
//
// componentWillMount() {
//   this.initSocket();
// }
//
// initSocket = () => {
//   const socket = io(socketUrl);
//   socket.on('connection', () => {
//     console.log('Connected');
//   });
//   this.setState({socket});
// }
