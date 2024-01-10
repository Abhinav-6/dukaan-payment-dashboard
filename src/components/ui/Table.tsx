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
    },
    {
      "Order Id": "#281211",
      Status: true,
      "Transaction Id": 456339987,
      "Refund date": "10 jan 2023, 02: 00 PM",
      "Order Amt": "₹1456",
    },
    {
      "Order Id": "#281211",
      Status: false,
      "Transaction Id": 456339987,
      "Refund date": "10 jan 2023, 02: 00 PM",
      "Order Amt": "₹1456",
    },
    {
      "Order Id": "#281211",
      Status: false,
      "Transaction Id": 456339987,
      "Refund date": "10 jan 2023, 02: 00 PM",
      "Order Amt": "₹1456",
    },
    {
      "Order Id": "#281211",
      Status: false,
      "Transaction Id": 456339987,
      "Refund date": "10 jan 2023, 02: 00 PM",
      "Order Amt": "₹1456",
    },
    {
      "Order Id": "#281211",
      Status: true,
      "Transaction Id": 456339987,
      "Refund date": "10 jan 2023, 02: 00 PM",
      "Order Amt": "₹1456",
    },
    {
      "Order Id": "#281211",
      Status: true,
      "Transaction Id": 456339987,
      "Refund date": "10 jan 2023, 02: 00 PM",
      "Order Amt": "₹1456",
    },
  ];
  return (
    <div className="px-8 w-full flex flex-col gap-4">
      <div className="flex items-center justify-between ">
        <div className="relative flex items-center gap-1 border border-gray-400 rounded w-auto px-2 focus-within:border-2 focus-within:border-gray-500">
          <span className="pointer-events-none cursor-text">
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
          <input
            type="text"
            className="w-full bg-inherit focus:outline-none  py-2 block"
            placeholder="Order ID or Transaction ID"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 hover:shadow hover:bg-gray-200 cursor-pointer transition-all">
            <p>Sort</p>
            <span>
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.624959 7.93424C0.833239 7.72596 1.17093 7.72596 1.37921 7.93424L3.64295 10.198L5.90669 7.93424C6.11497 7.72596 6.45266 7.72596 6.66094 7.93424C6.86922 8.14252 6.86922 8.48021 6.66094 8.68849L4.02007 11.3294C3.81179 11.5376 3.47411 11.5376 3.26583 11.3294L0.624959 8.68849C0.41668 8.48021 0.41668 8.14252 0.624959 7.93424Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.6429 0.515641C3.93746 0.515641 4.17624 0.754422 4.17624 1.04897L4.17624 10.9522C4.17624 11.2468 3.93746 11.4856 3.6429 11.4856C3.34835 11.4856 3.10957 11.2468 3.10957 10.9522L3.10957 1.04897C3.10957 0.754422 3.34835 0.515641 3.6429 0.515641Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3792 4.06695C13.1709 4.27523 12.8332 4.27523 12.6249 4.06695L10.3612 1.8032L8.09745 4.06695C7.88917 4.27523 7.55149 4.27523 7.34321 4.06695C7.13493 3.85867 7.13493 3.52098 7.34321 3.3127L9.98408 0.671834C10.1924 0.463555 10.53 0.463555 10.7383 0.671835L13.3792 3.3127C13.5875 3.52098 13.5875 3.85867 13.3792 4.06695Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.3612 11.4855C10.0667 11.4855 9.82791 11.2468 9.82791 10.9522L9.82791 1.04896C9.82791 0.75441 10.0667 0.51563 10.3612 0.51563C10.6558 0.51563 10.8946 0.75441 10.8946 1.04896L10.8946 10.9522C10.8946 11.2468 10.6558 11.4855 10.3612 11.4855Z"
                  fill="#4D4D4D"
                />
              </svg>
            </span>
          </div>
          <div className="border border-gray-300 rounded px-4 py-2 hover:shadow hover:bg-gray-200 cursor-pointer transition-all">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
                fill="#4D4D4D"
              />
            </svg>
          </div>
        </div>
      </div>
      <table className=" table-fixed border-collapse px-2 text-sm text-left overflow-x-auto">
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
