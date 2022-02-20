//! Library
import { useQuery, gql } from "@apollo/client";

//! From local
import Table from "../../components/table/Table";
import CustomerForm from "../../components/customerForm/CustomerForm";
import InsuranceTypeForm from "../../components/insuranceTypeForm/InsuranceTypeForm";

//! Styles
import styles from "./Policy.module.css";

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

  return (
    <div className={styles.container}>
      <h1 className="text-3xl">Fullstack code challenge</h1>
      <Table allData={data} />
      <div className={styles.editForm}>
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
