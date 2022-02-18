//! Library
import { useQuery, gql } from "@apollo/client";

const CUSTOMER_QUERY = gql`
  {
    customer {
      firstName
      lastName
    }
  }
`;

export default function Landing() {
  const { loading, error, data } = useQuery(CUSTOMER_QUERY);
  console.log(data);
  if (loading) return <div>loading...</div>;
  if (error) return <div>Some error happen</div>;
  return (
    <div>
      <h1 className="text-3xl">Fullstack code challenge</h1>
    </div>
  );
}
