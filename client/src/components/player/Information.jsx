import React from 'react';

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      visibility: props.visibility
    };

  }

  render() {
    return(
      <div className={`container-fluid gameBackground ${this.state.visibility}`}>
        <div className="card">
          <div className="card-title">
            {this.state.text}
          </div>
        </div>
      </div>
    );
  }
}

export default Information;