import { connect } from 'react-redux'
import { getConsultations } from '../actions/AddConsultation'
import Consultations from '../components/Consultations'

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps1',state.consultations);
  return {
    consultations: state.consultations
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(getConsultations())
    }
  }
}

const ConsultationsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Consultations);

export default ConsultationsComponent
