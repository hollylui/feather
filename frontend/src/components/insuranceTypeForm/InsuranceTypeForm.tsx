//! Library
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

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

  //Styles -----------------------------------------------------------
  const containerStyle =
    "flex flex-col w-72 bg-yellow-400 rounded-lg pt-2 pb-1 mx-5 ";
  const labelStyles = "text-left mb-1 font-bold";
  const inputStyles = "bg-white rounded-md mb-2 p-0.5";
  const checkBoxesStyles = "flex items-center justify-center font-bold";
  const checkBoxStyles = "mx-1 my-1";
  const buttonStyles =
    "w-16 bg-yellow-200 rounded-xl m-1 hover:bg-yellow-500 font-bold";
  const editBtnStyles =
    "w-full m-auto bg-yellow-400 uppercase font-bold hover:text-white ";
  const buttonsStyles = "flex justify-center mt-1 mb-1";
  const formStyles = "flex flex-col pr-2 px-2";
  const textIndent = { textIndent: "8px" };

  return (
    <div className={containerStyle}>
      {insuranceForm && (
        <form className={formStyles} onSubmit={insuranceTypeSubmitHandler}>
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

          <div className={checkBoxesStyles}>
            <input
              className={checkBoxStyles}
              type="checkbox"
              id="liability"
              name="liability"
            />
            <label htmlFor="">Liability</label>
            <input
              className={checkBoxStyles}
              type="checkbox"
              id="household"
              name="household"
            />
            <label htmlFor="">Household</label>
            <input
              className={checkBoxStyles}
              type="checkbox"
              id="health"
              name="health"
            />
            <label htmlFor="">Health</label>
          </div>
          <div className={buttonsStyles}>
            <button className={buttonStyles} type="submit">
              Edit
            </button>
            <button className={buttonStyles} onClick={editInsuranceTypeHanlder}>
              Close
            </button>
          </div>
        </form>
      )}

      {!insuranceForm && (
        <button className={editBtnStyles} onClick={editInsuranceTypeHanlder}>
          Edit Insurance Type
        </button>
      )}
    </div>
  );
}
