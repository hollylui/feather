//! From library
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

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

  // Styles ----------------------------------------------
  const containerStyle = "w-60 bg-yellow-400 rounded-lg pt-2 pb-1";
  const labelStyles = "text-left mb-1 font-bold";
  const inputStyles = "bg-white rounded-md mb-2 p-0.5";
  const buttonStyles =
    "w-16 bg-yellow-200 rounded-xl m-1 hover:bg-yellow-500 hover:text-white font-bold";
  const editBtnStyles =
    "w-full m-auto bg-yellow-400 uppercase font-bold hover:text-white ";
  const buttonsStyles = "flex justify-center mt-1 mb-1";
  const formStyles = "flex flex-col pr-2 px-2";
  const textIndent = { textIndent: "8px" };

  return (
    <div className={containerStyle}>
      {customerForm && (
        <form className={formStyles} onSubmit={customerSubmitHandler}>
          {/* policy number ------------------------------ */}
          <label className={labelStyles} htmlFor="slug">
            Policy Number
          </label>
          <input
            style={textIndent}
            className={inputStyles}
            type="text"
            id="slug"
            name="slug"
            required
          />

          {/* First name ------------------------------- */}
          <label className={labelStyles} htmlFor="fname">
            New First Name
          </label>
          <input
            style={textIndent}
            className={inputStyles}
            type="text"
            id="newFirstName"
            name="newFirstName"
            required
          />

          {/* last name -------------------------------  */}
          <label className={labelStyles} htmlFor="lname">
            New Last Name
          </label>
          <input
            style={textIndent}
            className={inputStyles}
            type="text"
            id="newLastNname"
            name="newLastNname"
            required
          />

          {/* edit and close buttons -------------------------------  */}
          <div className={buttonsStyles}>
            <button className={buttonStyles} type="submit">
              Edit
            </button>

            <button className={buttonStyles} onClick={editCustomerHanlder}>
              Close
            </button>
          </div>
        </form>
      )}

      {/* open edit form button -------------------------------  */}
      {!customerForm && (
        <button className={editBtnStyles} onClick={editCustomerHanlder}>
          Edit Customer Info
        </button>
      )}
    </div>
  );
}
