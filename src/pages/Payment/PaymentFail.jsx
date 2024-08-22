import { useParams } from "react-router-dom";

const PaymentFail = () => {
  const { tran_id } = useParams();
  return (
    <div className="container mx-auto pt-40 text-center">
      <h1>Payment Failed </h1>
      <p>Your transaction ID is: {tran_id}</p>
    </div>
  );
};

export default PaymentFail;
