import {connect} from 'react-redux';

import Landing from '../../pages/landing';
import * as actions from '../../../actions/actionCreators';
import * as asyncActions from '../../../actions/asyncActions/asyncActionCreators';

const mapStateToProps = state => ({...state.nodes, ...state.paths});
//
// const mapDispatchToProps = (dispatch) => ({
// });

export default connect(
  mapStateToProps,
  null,
)(Landing);