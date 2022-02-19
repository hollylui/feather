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
  };
  return (
    <div className={styles.container}>
      {customerForm && (
        <form
          action=""
          onSubmit={customerSubmitHandler}
          className={styles.form}
        >
          <label htmlFor="slug">Policy Number</label>
          <input type="text" id="slug" name="slug" required />
          <label htmlFor="fname">New First Name</label>
          <input type="text" id="newFirstName" name="newFirstName" required />
          <label htmlFor="lname">New Last Name</label>
          <input type="text" id="newLastNname" name="newLastNname" required />
          <button type="submit">Edit</button>
        </form>
      )}
      <button onClick={editCustomerHanlder}>
        {customerForm ? "Close Customer Info" : "Edit Customer Info"}
      </button>
    </div>
  );
}
