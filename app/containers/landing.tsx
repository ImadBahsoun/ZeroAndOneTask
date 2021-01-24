import {connect} from "react-redux"

import LandingComponent from "../components/landing";

const mapStateToProps = () => {
  return {
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

const LandingContainer = connect(mapStateToProps, mapDispatchToProps)(LandingComponent);
export default LandingContainer;
