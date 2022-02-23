//! from Liabry
import { useEffect, useState } from "react";

let tableElement: any;
let newData: any;
let ascValue: any;

export default function Table({ allData }: any) {
  const [ascCustomer, setAscCustomer] = useState(false);
  const [ascProvider, setAscProvider] = useState(false);
  const [ascStatus, setAscStatus] = useState(false);
  const [ascInsuranceType, setAscInsuranceType] = useState(false);
  const [ascPolicyNum, setAscPolicyNum] = useState(false);
  const [ascStartDate, setAscStartDate] = useState(false);
  const [ascEndDate, setAscEndDate] = useState(false);
  const [ascCreateAt, setAscCreateAt] = useState(false);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");

  const limit = allData.policy.length;

  // Sort each column----------------------------------------------------
  function sortTableByColumn(table: any, column: any, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    const sortedRows = rows.sort((first: any, second: any): any => {
      const aColText = first
        .querySelector(`td:nth-child(${column + 1})`)
        .textContent.trim();
      const bColText = second
        .querySelector(`td:nth-child(${column + 1})`)
        .textContent.trim();
      return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
    });
    while (tBody.firstChild) {
      tBody.removeChild(tBody.firstChild); // Remove all existing TRs from the table
    }

    tBody.append(...sortedRows); // Re-add the newly sorted rows
  }

  const sortHandler = (index: Number) => {
    if (index === 0) {
      setAscCustomer(!ascCustomer);
      ascValue = ascCustomer;
    }

    if (index === 1) {
      setAscProvider(!ascProvider);
      ascValue = ascProvider;
    }

    if (index === 2) {
      setAscInsuranceType(!ascInsuranceType);
      ascValue = ascInsuranceType;
    }

    if (index === 3) {
      setAscStatus(!ascStatus);
      ascValue = ascStatus;
    }

    if (index === 4) {
      setAscPolicyNum(!ascPolicyNum);
      ascValue = ascPolicyNum;
    }

    if (index === 5) {
      setAscStartDate(!ascStartDate);
      ascValue = ascStartDate;
    }

    if (index === 6) {
      setAscEndDate(!ascEndDate);
      ascValue = ascEndDate;
    }

    if (index === 7) {
      setAscCreateAt(!ascCreateAt);
      ascValue = ascCreateAt;
    }

    sortTableByColumn(tableElement, index, ascValue);
  };

  //pagniation --------------------------------------------------------
  newData = allData.policy.slice(skip, skip + 4);
  const skipForwardHandler = () => {
    if (skip <= limit) setSkip(skip + 4);
  };

  const skipBackwardHandler = () => {
    if (skip >= 0) setSkip(skip - 4);
  };

  // search text -------------------------------------------------
  const filterPolicyHandler = (e: any) => {
    setSearch(e.target.value);
  };

  // useEffect ------------------------------------------------------

  useEffect(() => {
    newData = allData.policy.filter((data: any) =>
      data.customer[0].firstName.toLowerCase().includes(search)
    );

    // setData(newData);
  }, [search]);

  useEffect(() => {
    tableElement = document.getElementById("table");
    newData = allData.policy.slice(skip, skip + 4);
  }, [skip]);

  //styles
  const containerStyles = `m-auto w-1160`;
  const controlBtnStyles = "flex justify-between w-full mt-1 mb-3";
  const searchInputStyles = "bg-yellow-400 rounded-md h-30";
  const thStyles =
    "py-3 px-3 text-left font-bold tracking-wider uppercase text-xl align-top cursor-pointer";
  const tdStyles = "py-3 px-3 text-left font-medium tracking-wider align-top ";
  const searchBtnSyltes = "tracking-wider uppercase font-bold mx-2 text-3xl";
  const paginationBtnStyles =
    "font-bold tracking-wider uppercase bg-yellow-400 ml-3 py-1 px-3 w-30 text-2xl";

  const textIndent = { textIndent: "8px" };

  return (
    <div className={containerStyles}>
      <div className={controlBtnStyles}>
        <span className="flex items-center">
          <label className={searchBtnSyltes}>Search</label>
          <input
            style={textIndent}
            className={searchInputStyles}
            type="text"
            onChange={filterPolicyHandler}
          />
        </span>
        <span>
          {skip !== 0 && (
            <button
              className={paginationBtnStyles}
              onClick={skipBackwardHandler}
            >
              &larr; Prev
            </button>
          )}
          {limit - skip > skip && (
            <button
              className={paginationBtnStyles}
              onClick={skipForwardHandler}
            >
              Next &rarr;
            </button>
          )}
        </span>
      </div>

      <table
        id="table"
        className="m-auto  bg-yellow-300 rounded-2xl table-sortable"
      >
        <thead className="bg-white dark:bg-gray-700l rounded-md">
          <tr>
            <th onClick={() => sortHandler(0)} className={thStyles}>
              Customer
            </th>
            <th onClick={() => sortHandler(1)} className={thStyles}>
              Provider
            </th>
            <th onClick={() => sortHandler(2)} className={thStyles}>
              Insurance Type
            </th>
            <th onClick={() => sortHandler(3)} className={thStyles}>
              Status
            </th>
            <th onClick={() => sortHandler(4)} className={thStyles}>
              Policy Number
            </th>
            <th onClick={() => sortHandler(5)} className={thStyles}>
              Start Date
            </th>
            <th onClick={() => sortHandler(6)} className={thStyles}>
              End Date
            </th>
            <th onClick={() => sortHandler(7)} className={thStyles}>
              Created At
            </th>
          </tr>
        </thead>
        <tbody>
          {newData.map((info: any, index: any) => {
            return (
              <tr className=" hover:bg-gray-300" key={index}>
                {/* customer info ------------------------------------*/}
                <td className={tdStyles}>
                  {info.customer[0].firstName} {info.customer[0].lastName}
                </td>

                {/* provider ------------------------------------*/}
                <td className={tdStyles}>{info.provider}</td>

                {/* insurance type ------------------------------------*/}
                <td className={tdStyles}>
                  {info.insuranceType.map(
                    (type: any) => type.liability && <li>Liability</li>
                  )}
                  {info.insuranceType.map(
                    (type: any) => type.household && <li>Household</li>
                  )}
                  {info.insuranceType.map(
                    (type: any) => type.health && <li>Health</li>
                  )}
                </td>

                {/* status ------------------------------------*/}
                <td className={tdStyles}>
                  {info.status.map((item: any) => item.active && "Active")}
                  {info.status.map((item: any) => item.pending && "Pending")}
                  {info.status.map(
                    (item: any) => item.cancelled && "Cancelled"
                  )}
                  {info.status.map(
                    (item: any) => item.droppedOut && "Dropped Out"
                  )}
                </td>

                {/* policy Number ------------------------------------*/}
                <td className={tdStyles}>{info.policyNumber}</td>

                {/* starting date ------------------------------------*/}
                <td className={tdStyles}>
                  {new Date(Number(info.startDate)).toLocaleDateString("en-GB")}
                </td>

                {/* ending date ------------------------------------*/}
                <td className={tdStyles}>
                  {new Date(Number(info.endDate)).toLocaleDateString("en-GB")}
                </td>

                {/* created at ------------------------------------*/}
                <td className={tdStyles}>
                  {new Date(Number(info.createdAt)).toLocaleDateString("en-GB")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
