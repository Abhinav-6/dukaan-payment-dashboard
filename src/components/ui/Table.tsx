import TableRows from "./TableRows";

export default function Table() {
  const data = [
    {
      "Order Id": "#281209",
      Status: true,
      "Transaction Id": 456789987,
      "Refund date": "12 jan 2023, 02: 00 PM",
      "Order Amt": "₹1256",
    },
    {
      "Order Id": "#281210",
      Status: true,
      "Transaction Id": 456749987,
      "Refund date": "11 jan 2023, 02: 00 PM",
      "Order Amt": "₹1286",
    },
    {
      "Order Id": "#281211",
      Status: false,
      "Transaction Id": 456339987,
      "Refund date": "10 jan 2023, 02: 00 PM",
      "Order Amt": "₹1456",
    },{
      "Order Id": "#281211",
      Status: true,
      "Transaction Id": 456339987,
      "Refund date": "10 jan 2023, 02: 00 PM",
      "Order Amt": "₹1456",
    },{
      "Order Id": "#281211",
      Status: false,
      "Transaction Id": 456339987,
      "Refund date": "10 jan 2023, 02: 00 PM",
      "Order Amt": "₹1456",
    },{
      "Order Id": "#281211",
      Status: false,
      "Transaction Id": 456339987,
      "Refund date": "10 jan 2023, 02: 00 PM",
      "Order Amt": "₹1456",
    },{
      "Order Id": "#281211",
      Status: false,
      "Transaction Id": 456339987,
      "Refund date": "10 jan 2023, 02: 00 PM",
      "Order Amt": "₹1456",
    },{
      "Order Id": "#281211",
      Status: true,
      "Transaction Id": 456339987,
      "Refund date": "10 jan 2023, 02: 00 PM",
      "Order Amt": "₹1456",
    },{
      "Order Id": "#281211",
      Status: true,
      "Transaction Id": 456339987,
      "Refund date": "10 jan 2023, 02: 00 PM",
      "Order Amt": "₹1456",
    },
  ];
  return (
    <div className="px-8 w-full flex flex-col gap-4">
      <div className="border border-gray-500 rounded flex gap-2 p-2 items-center w-64">
        <span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_99928_75730)">
              <path
                d="M5.95 10.5263C3.4412 10.5263 1.4 8.48 1.4 5.96491C1.4 3.44982 3.4412 1.40351 5.95 1.40351C8.4588 1.40351 10.5 3.44982 10.5 5.96491C10.5 8.48 8.4588 10.5263 5.95 10.5263ZM10.7443 9.48281C11.4674 8.49474 11.9 7.2814 11.9 5.96491C11.9 2.67579 9.2309 0 5.95 0C2.6691 0 0 2.67579 0 5.96491C0 9.25403 2.6691 11.9298 5.95 11.9298C7.4137 11.9298 8.7542 11.3944 9.7909 10.5116L12.2528 12.9796C12.3893 13.1165 12.5685 13.1853 12.7477 13.1853C12.9269 13.1853 13.1061 13.1165 13.2426 12.9796C13.5163 12.7053 13.5163 12.2618 13.2426 11.9874L10.7443 9.48281Z"
                fill="#999999"
              />
            </g>
            <defs>
              <clipPath id="clip0_99928_75730">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className="font-normal text-sm text-gray-400">
          Order ID or Transaction ID
        </span>
      </div>
      <table className="w-full table-fixed border-collapse px-2 text-sm text-left overflow-x-auto">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-4 font-medium">
              Order Id
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Status
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Transaction ID
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Refund Date
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Order amount
            </th>
          </tr>
        </thead>
        <tbody className="text-left">
          {data.map((d) => {
            return <TableRows data={d} />;
          })}
          {/* <TableRows data={data[0]} /> */}
        </tbody>
      </table>
    </div>
  );
}
