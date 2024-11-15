import { PaystackButton } from 'react-paystack';
import { TPayRefPayLoad, TPayStackProps } from '@/@types/app.type';

const PayButton = ({
  amount,
  handlePayStackSuccessAction,
  BtnText,
  userEmail,
  label,
  metaData,
  phone,
  channels,
  className,
  ...otherProps
}: TPayStackProps) => {
  const publicKey = 'pk_test_06c694bd4861d262de55946a9e8b53de22ddabf7';

  const componentProps = {
    email: userEmail,
    phone,
    amount: amount * 100,
    label,
    publicKey,
    channels,

    metadata: {
      custom_fields: [metaData],
    },
    text: BtnText,

    onSuccess: (reference: TPayRefPayLoad) =>
      handlePayStackSuccessAction(reference),
    onClose: () => {},
  };

  return (
    <PaystackButton
      {...otherProps}
      className={`inline-block focus:outline-none font-medium rounded-lg text-sm  ${className}`}
      {...componentProps}
    />
  );
};

export default PayButton;
// example of meta {
//   display_name: 'femi',
//   variable_name: 'kola',
//   value: '09057573653',
// },
