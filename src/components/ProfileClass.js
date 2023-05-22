import React from 'react';

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: '',
        avatar_url: '',
      },
    };
    console.log('Child constructor' + this.props.name);
  }
  async componentDidMount() {
    console.log('Child componentDidMount' + this.props.name);
    const data = await fetch('https://api.github.com/users/mayank1612');
    const json = await data.json();
    this.setState({
      userInfo: {
        name: json.login,
        avatar_url: json.avatar_url,
      },
    });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('Child render' + this.props.name);
    return (
      <>
        <div>ProfileClass</div>
        <div>{this.state.userInfo.name}</div>
        <img src={this.state.userInfo.avatar_url} />
      </>
    );
  }
}

export default ProfileClass;
