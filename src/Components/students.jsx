import React, { Component } from 'react';
import {connect} from 'react-redux';
import Student from './student';

class Students extends Component {
  render() {
    var students = this.props.students.map(a => <Student key={a.sprCode} details={a}/>)
     return (
       <div className="sv-panel sv-panel-default">
        <div className="sv-panel-heading">
          <h2 className="sv-panel-title">
            Students
          </h2>
        </div>
        <div className="sv-panel-body">
          {students}
        </div>
       </div>
     )
  }
}

const mapStateToProps = function (store, ownProps) {
	return {"students" : store.students.students}
}

export default connect(mapStateToProps)(Students);