import Header from "./Header";
import Overview from "./ui/Overview";
import Table from "./ui/Table";

export default function Main() {
  return (
    <div className="ml-64 bg-[rgb(245,245,245)] pb-4">
      <Header />
      <Overview />
      <div className="pb-6 pt-8 px-8 flex flex-col gap-5">
        <h4 className="font-medium text-2xl text-[#1A181E] m-0 p-0">
          Transactions | This Month
        </h4>
        <div className="flex items-center gap-1">
          <button className="rounded-2xl px-3 py-1 bg-gray-300 text-gray-700 font-normal text-base">Payouts(22)</button>
          <button className="rounded-2xl px-3 py-1 bg-[#146EB4] text-white font-normal text-base">Refunds(6)</button>
        </div>
      </div>
      <Table/>
    </div>
  );
}
