function TableRows({
  data,
}: {
  data: {
    "Order Id": string;
    Status: boolean;
    "Transaction Id": number;
    "Refund date": string;
    "Order Amt": string;
  };
}) {
  return (
    <tr className="cursor-pointer hover:bg-gray-300 hover:shadow rounded-lg transition duration-300">
      <td className="px-6 py-4">{data["Order Id"]}</td>
      <td className={`text-md font-medium flex items-center gap-1 px-6 py-4`}>
        {data.Status ? (
          <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5.33594" cy="5" r="5" fill="#17B31B" />
          </svg>
        ) : (
          <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5.33594" cy="5" r="5" fill="#999999" />
          </svg>
        )}
        {data.Status ? "Succesful" : "Pending"}
      </td>
      <td className="px-6 py-4">{data["Transaction Id"]}</td>
      <td className="px-6 py-4">{data["Refund date"]}</td>
      <td className="px-6 py-4">{data["Order Amt"]}</td>
    </tr>
  );
}

export default TableRows;
