import React from 'react';
import EditKeg from './EditKegs';
import PropTypes from 'prop-types';


class EditKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);

  }

  handleTroubleshootingConfirmation(){
    this.setState({ formVisibleOnPage: true});
  }

  render() {
    let currentlyVisibleContent = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleContent = <EditKeg onEditKeg={this.props.onEditKeg}/>;
    } else {
      currentlyVisibleContent = <EditKeg onEditKeg={this.props.onEditKeg}/>;
    }
    return(
      <div>
        { currentlyVisibleContent }
      </div>
    );
  }
}
EditKegControl.propTypes = {
  onEditKeg: PropTypes.func
};



export default EditKegControl;
