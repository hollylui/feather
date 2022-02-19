//! Library
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

//! From local
import Table from "../components/table/Table";
import CustomerForm from "../components/customerForm/CustomerForm";

//! Styles
import styles from "./Landing.module.css";

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
  const [insuranceForm, setInsuranceForm] = useState(false);
  const { loading, error, data } = useQuery(CUSTOMER_QUERY);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Some error happen</div>;

  return (
    <div className={styles.container}>
      <h1 className="text-3xl">Fullstack code challenge</h1>
      <Table data={data} />
      <CustomerForm />

      <div>
        <form action="">
          <input
            type="checkbox"
            id="liability"
            name="liability"
            value="liability"
          />
          <label htmlFor="">Liability</label>
          <input
            type="checkbox"
            id="household"
            name="household"
            value="household"
          />
          <label htmlFor="">Household</label>
          <input type="checkbox" id="health" name="health" value="health" />
          <label htmlFor="">Health</label>
        </form>
      </div>
    </div>
  );
}
