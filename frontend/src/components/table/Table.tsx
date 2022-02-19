//! Styles
// import styles from "./table.module.css";

export default function Table({ data }: any) {
  //styles
  const thStyles = "py-3 px-6 text-left font-medium tracking-wider uppercase";
  const tdStyles = "py-3 px-6 text-left font-medium tracking-wider align-top";

  return (
    <table className="m-auto bg-yellow-400 rounded-2xl">
      <thead className="bg-yellow-200 dark:bg-gray-700l">
        <tr>
          <th className={thStyles}>Customer</th>
          <th className={thStyles}>Provider</th>
          <th className={thStyles}>Insurance Type</th>
          <th className={thStyles}>Status</th>
          <th className={thStyles}>Policy Number</th>
          <th className={thStyles}>Start Date</th>
          <th className={thStyles}>End Date</th>
          <th className={thStyles}>Created At</th>
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
                {info.status.map((item: any) => item.cancelled && "Cancelled")}
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
  );
}
