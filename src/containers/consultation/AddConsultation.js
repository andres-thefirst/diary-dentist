import { connect } from 'react-redux'
import { getConsultations } from '../../actions/Consultations'
import Consultations from '../../components/consultation/AddConsultation'

const mapStateToProps = (state, ownProps) => {
  return {
    consultations: state.consultations
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickFetch: () => {
      dispatch(getConsultations())
    }
  }
}

const AddConsultationComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Consultations);

export default AddConsultationComponent
