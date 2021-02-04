import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setTabActiveFlag } from '../../actions/myActions';


const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
    clickNavbarTab: (tab) => dispatch(setTabActiveFlag(tab)),

});

class NavbarTab extends Component {
    render() {
        return (
            <div
                className="navbar-tab-root"
                id={`navbar-tab-${this.props.tab.title}`}
                onClick={() => this.props.clickNavbarTab(this.props.tab)}
            >
                <div className="navbar-tab-img-root">

                </div>
                <p className="navbar-tab-title">{this.props.tab.title.toUpperCase()}</p>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarTab);