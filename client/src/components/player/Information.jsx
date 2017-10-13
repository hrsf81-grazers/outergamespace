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
      <div className={`container-fluid`}>
        <div className="gameBackground row align-items-center justify-content-md-center">
          <div className={`card col-lg-4 col-md-5 col-sm-9 col-xs-12 informationCard animated slideInLeft ${this.state.visibility}`}>
            <div className="card-block informationText">{this.state.text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Information;
