//! from Liabry
import { useEffect, useState } from "react";

//! Styles
// import styles from "./Table.module.css";

let tableElement: any;

export default function Table({ data }: any) {
  let ascValue: any;
  const [ascCustomer, setAscCustomer] = useState(false);
  const [ascProvider, setAscProvider] = useState(false);
  const [ascStatus, setAscStatus] = useState(false);
  const [ascInsuranceType, setAscInsuranceType] = useState(false);
  const [ascPolicyNum, setAscPolicyNum] = useState(false);
  const [ascStartDate, setAscStartDate] = useState(false);
  const [ascEndDate, setAscEndDate] = useState(false);
  const [ascCreateAt, setAscCreateAt] = useState(false);

  //styles
  const thStyles = "py-3 px-6 text-left font-medium tracking-wider uppercase";
  const tdStyles = "py-3 px-6 text-left font-medium tracking-wider align-top";

  function sortTableByColumn(table: any, column: any, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort each row
    const sortedRows = rows.sort((a: any, b: any): any => {
      const aColText = a
        .querySelector(`td:nth-child(${column + 1})`)
        .textContent.trim();
      const bColText = b
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

  useEffect(() => {
    tableElement = document.getElementById("table");
  }, []);

  return (
    <div>
      <p id="p">Hello</p>
      <table
        id="table"
        className="m-auto bg-yellow-400 rounded-2xl table-sortable"
      >
        <thead className="bg-yellow-200 dark:bg-gray-700l">
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
          {data.policy.map((info: any) => {
            return (
              <tr>
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
