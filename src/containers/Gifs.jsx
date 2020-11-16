import Gifs from "../components/Gifs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    gifs: state.gifs,
  };
};

export default connect(mapStateToProps, null)(Gifs);
