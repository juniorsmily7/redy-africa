import * as Yup from 'yup';
import { phoneRegex } from '../../utils/regex';

export const register = Yup.object().shape({
  phone: Yup.string()
    .matches(phoneRegex, 'Enter a  valid phone number')
    .required('The phone number field is required.'),
});
export const sendSchema = Yup.object().shape({
  otp: Yup.string()

    .test(
      'lessThanTen',
      'must be be less than 6 character',
      (value) => !value || value.toString().length >= 6
    )
    .required('The otp field is required'),
});
