import { connect } from 'react-redux'
import { addConsultation, addFormField } from '../../actions/Appointments'
import AddAppointment from '../../components/appoitment/AddAppointment'

const mapStateToProps = (state, ownProps) => {
  console.log(state.fields);
  return {
    form: state.fields
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit(event) {
      event.preventDefault();
      dispatch(addConsultation())
    },
    handleChange(name) {
      return function(event, index, value) {
        const target = event.target;
        if(!value){
          value = target.type === 'checkbox' ? target.checked : target.value;
        } else {
           console.log(target);
        }
        dispatch(addFormField({
          [name]: value
        }));
      }
    }
  };
}

const AddAppointmentnComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAppointment);

export default AddAppointmentnComponent
