import React, { Component } from 'react';
import Module from './module';
import {connect} from 'react-redux';

class ModulePalette extends Component {

  render() {
    let modules = this.props.modules.map(a => <Module key={a.moduleCode} details={a}/>)
        return (
            <div className="sv-panel sv-panel-default">
                <div className="sv-panel-heading">
                    <h2 className="sv-panel-title">
                        Eligible Selections
                    </h2>
                </div>
                <div className="sv-panel-body">
                    <div className="modules">
                        {modules}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (store, ownProps) {
	return {"modules" : store.modules.modules}
}

export default connect(mapStateToProps)(ModulePalette);