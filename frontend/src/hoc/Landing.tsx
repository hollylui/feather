//! Library
import { useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

//! From local
import Table from "../components/table/Table";

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

const EDIT_CUSTOMER = gql`
  mutation ($slug: String!, $firstName: String!, $lastName: String!) {
    editCustomer(slug: $slug, firstName: $firstName, lastName: $lastName) {
      slug
    }
  }
`;

export default function Landing() {
  const [customerForm, setCustomerForm] = useState(false);
  const { loading, error, data } = useQuery(CUSTOMER_QUERY);
  const [editCustomer] = useMutation(EDIT_CUSTOMER);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Some error happen</div>;

  const editCustomerHanlder = () => {
    setCustomerForm(!customerForm);
  };

  const customerSubmitHandler = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const editData = {
      slug: formData.get("slug"),
      firstName: formData.get("newFirstName"),
      lastName: formData.get("newLastNname"),
    };

    editCustomer({
      variables: {
        slug: editData.slug,
        firstName: editData.firstName,
        lastName: editData.lastName,
      },
    });
  };

  return (
    <div>
      <h1 className="text-3xl">Fullstack code challenge</h1>
      <Table data={data} />

      <div>
        {customerForm && (
          <form
            action=""
            onSubmit={customerSubmitHandler}
            className={styles.form}
          >
            <label htmlFor="slug">Policy Number</label>
            <input type="text" id="slug" name="slug" />
            <label htmlFor="fname">New First Name</label>
            <input type="text" id="newFirstName" name="newFirstName" />
            <label htmlFor="lname">New Last Name</label>
            <input type="text" id="newLastNname" name="newLastNname" />
            <button type="submit">Edit</button>
          </form>
        )}
        <button onClick={editCustomerHanlder}>
          {customerForm ? "Close Customer Info" : "Edit Customer Info"}
        </button>
      </div>
    </div>
  );
}
