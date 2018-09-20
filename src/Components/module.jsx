import React, { Component } from 'react';

class Module extends Component {

    onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id",id)
    }
  render() {
      return (
        <div className="module sv-alert-success" 
            draggable 
            onDragStart= {(e) => this.onDragStart(e, this.props.details.moduleCode)}
            key={this.props.details}
            >
            <div>
                {this.props.details.moduleCode}
            </div>
        </div>
      )
  }
}

export default Module;