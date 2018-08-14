class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
  <div>
    <Hello name="World" />
    <Hello name="Charlie!" />
  </div>,
  document.getElementById('container')
);

