//! Library
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

//! From local

//! Styles
import styles from "./InsuranceTypeForm.module.css";

const EDIT_INSURANCE_TYPE = gql`
  mutation (
    $slug: String!
    $liability: Boolean
    $household: Boolean
    $health: Boolean
  ) {
    editInsuranceType(
      slug: $slug
      liability: $liability
      household: $household
      health: $health
    ) {
      slug
    }
  }
`;

export default function InsuranceTypeForm() {
  let liability, household, health;
  const [insuranceForm, setInsuranceForm] = useState(false);
  const [editInsuranceType] = useMutation(EDIT_INSURANCE_TYPE);

  //   handlers
  const editInsuranceTypeHanlder = () => {
    setInsuranceForm(!insuranceForm);
  };

  const insuranceTypeSubmitHandler = (e: any) => {
    e.preventDefault();

    const slugE = document.getElementById("slug") as HTMLInputElement;
    const liabilityE = document.getElementById("liability") as HTMLInputElement;
    const householdE = document.getElementById("household") as HTMLInputElement;
    const healthE = document.getElementById("health") as HTMLInputElement;

    liabilityE.checked ? (liability = true) : (liability = false);
    householdE.checked ? (household = true) : (household = false);
    healthE.checked ? (health = true) : (health = false);

    editInsuranceType({
      variables: {
        slug: slugE.value,
        liability: liability,
        household: household,
        health: health,
      },
    });
    setInsuranceForm(!insuranceForm);
  };
  return (
    <div className={styles.container}>
      {insuranceForm && (
        <form onSubmit={insuranceTypeSubmitHandler} className={styles.form}>
          <label htmlFor="slug">Policy Number</label>
          <input type="text" id="slug" name="slug" required />

          <div className={styles.checkbox}>
            <input type="checkbox" id="liability" name="liability" />
            <label htmlFor="">Liability</label>
            <input type="checkbox" id="household" name="household" />
            <label htmlFor="">Household</label>
            <input type="checkbox" id="health" name="health" />
            <label htmlFor="">Health</label>
          </div>
          <div className={styles.buttons}>
            <button type="submit">Edit</button>
            <button onClick={editInsuranceTypeHanlder}>Close</button>
          </div>
        </form>
      )}

      {!insuranceForm && (
        <button className={styles.edit} onClick={editInsuranceTypeHanlder}>
          Edit Insurance Type
        </button>
      )}
    </div>
  );
}
