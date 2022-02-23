//! Library
import { useQuery, gql } from "@apollo/client";

//! From local
import Table from "../../components/table/Table";
import CustomerForm from "../../components/customerForm/CustomerForm";
import InsuranceTypeForm from "../../components/insuranceTypeForm/InsuranceTypeForm";

const POLICY_QUERY = gql`
  {
    policy {
      id
      customer {
        firstName
        lastName
        dateOfBirth
      }
      provider
      insuranceType {
        liability
        household
        health
      }
      status {
        active
        cancelled
        pending
        droppedOut
      }
      policyNumber
      startDate
      endDate
      createdAt
    }
  }
`;

export default function Policy() {
  const { loading, error, data } = useQuery(POLICY_QUERY, {
    variables: {
      offset: 0,
      limit: 5,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>Some error happen</div>;

  // styles -----------------------------
  const containerStyles =
    "text-center bg-yellow-200 h-screen pb-10 pt-10 font-mono";
  const h1Styles = "text-4xl p-5 bg-yellow-300 mb-3 font-bold uppercase";
  const formsStyles = "flex justify-center mt-3 bg-yellow-200 pb-5";

  return (
    <div className={containerStyles}>
      <h1 className={h1Styles}>Policy</h1>
      <Table allData={data} />
      <div className={formsStyles}>
        <div>
          <CustomerForm />
        </div>
        <div>
          <InsuranceTypeForm />
        </div>
      </div>
    </div>
  );
}
