import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavbarTab from './views/NavbarTab'


const mapStateToProps = (state, ownProps) => {
    return({
        tabs: state.navbar.tabs,
        test: state.navbar.test,
    });
}

const mapDispatchToProps = dispatch => ({

});

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-root">
                
                {(this.props.tabs) ? 
                    this.props.tabs.map(
                        (tab) => (
                            <NavbarTab
                                tab={tab}
                            ></NavbarTab>
                            )
                    ) :
                    <p>Loading...</p>
                }
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
