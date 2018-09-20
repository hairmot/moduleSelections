import React, { Component } from 'react';
import Module from './module';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as setSelections from '../Actions'

class Student extends Component {

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev) => {
        var moduleCode =  ev.dataTransfer.getData('id');
        if(!this.props.details.selections.find(a => a.moduleCode === moduleCode)) {
            this.props.actions.setSelections(
                {"selections": [...this.props.details.selections, this.props.modules.filter(a => a.moduleCode === moduleCode)[0]],
                "sprCode":this.props.details.sprCode})
        }        
    }

    render() {
        let modules = this.props.details.selections.map(a => <Module key={a.moduleCode} details={a}/>)
        return (
            <div className="sv-row">
                <div className="sv-col-md-1">
                    <div className="studentDetails">
                        {this.props.details.sprCode}
                    </div>
                </div>
                <div className="sv-col-md-10 ">
                    <div className="studentRow sv-alert-info" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e)}>
                        {modules}
                    </div>
                </div>
                <div className="sv-col-md-1 sv-text-success ">                        
                    <div className="studentDetails" style={{fontSize:'30px'}}>✓</div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
	return { actions: bindActionCreators(setSelections, dispatch) }
}
const mapStateToProps = function (store, ownProps) {
	return {
        modules : store.modules.modules
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student);