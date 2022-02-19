//! Library
import { useQuery, gql } from "@apollo/client";

//! From local
import Table from "../components/table/Table";
import CustomerForm from "../components/customerForm/CustomerForm";

//! Styles
import styles from "./Landing.module.css";
import InsuranceTypeForm from "../components/insuranceTypeForm/InsuranceTypeForm";

const CUSTOMER_QUERY = gql`
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

export default function Landing() {
  const { loading, error, data } = useQuery(CUSTOMER_QUERY);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Some error happen</div>;

  return (
    <div className={styles.container}>
      <h1 className="text-3xl">Fullstack code challenge</h1>
      <Table data={data} />
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
