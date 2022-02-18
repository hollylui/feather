//! Library
import { useQuery, gql } from "@apollo/client";

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
  const { loading, error, data } = useQuery(CUSTOMER_QUERY);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Some error happen</div>;
  return (
    <div>
      <h1 className="text-3xl">Fullstack code challenge</h1>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Provider</th>
            <th>Insurance Type</th>
            <th>Status</th>
            <th>Policy Number</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.policy.map((info: any) => {
            return (
              <tr>
                {/* customer info ------------------------------------*/}
                <td>
                  {info.customer[0].firstName} {info.customer[0].lastName}
                </td>

                {/* provider ------------------------------------*/}
                <td>{info.provider}</td>

                {/* insurance type ------------------------------------*/}
                <td>
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
                <td>
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
                <td>{info.policyNumber}</td>

                {/* starting date ------------------------------------*/}
                <td>
                  {new Date(Number(info.startDate)).toLocaleDateString("en-GB")}
                </td>

                {/* ending date ------------------------------------*/}
                <td>
                  {new Date(Number(info.endDate)).toLocaleDateString("en-GB")}
                </td>

                {/* created at ------------------------------------*/}
                <td>
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
