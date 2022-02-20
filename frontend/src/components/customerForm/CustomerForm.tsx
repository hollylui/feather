//! From library
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

//! Styles
import styles from "./CustomerForm.module.css";

const EDIT_CUSTOMER = gql`
  mutation ($slug: String!, $firstName: String!, $lastName: String!) {
    editCustomer(slug: $slug, firstName: $firstName, lastName: $lastName) {
      slug
    }
  }
`;

export default function CustomerForm() {
  const [customerForm, setCustomerForm] = useState(false);
  const [editCustomer] = useMutation(EDIT_CUSTOMER);

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

    setCustomerForm(!customerForm);
  };
  return (
    <div className={styles.container}>
      {customerForm && (
        <form onSubmit={customerSubmitHandler} className={styles.form}>
          <label htmlFor="slug">Policy Number</label>
          <input type="text" id="slug" name="slug" required />

          <label htmlFor="fname">New First Name</label>
          <input type="text" id="newFirstName" name="newFirstName" required />

          <label htmlFor="lname">New Last Name</label>
          <input type="text" id="newLastNname" name="newLastNname" required />

          <div className={styles.buttons}>
            <button className={styles.button} type="submit">
              Edit
            </button>

            <button className={styles.button} onClick={editCustomerHanlder}>
              Close
            </button>
          </div>
        </form>
      )}

      {!customerForm && (
        <button className={styles.edit} onClick={editCustomerHanlder}>
          Edit Customer Info
        </button>
      )}
    </div>
  );
}
