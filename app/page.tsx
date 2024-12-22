export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 gap-4 text-white text-center p-4">
        {/* Header */}
        <div
          className="p-4 col-span-3 font-bold content-center text-2xl"
          style={{
            background: "linear-gradient(to right, #5A8FEC, #A48BFF, #FF7A88)", // Blue to Purple to Coral gradient
          }}
        >
          Header
        </div>

        {/* Sidebar */}
        <div
          className="p-4 hidden md:block md:col-span-1 md:row-span-2 font-bold content-center text-2xl"
          style={{
            background: "linear-gradient(to right, #5A8FEC, #A48BFF, #FF7A88)", // Blue to Purple to Coral gradient
          }}
        >
          Sidebar
        </div>

        {/* Content-1 */}
        <div
          className="p-4 col-span-3 md:col-span-2 font-bold content-center text-2xl"
          style={{
            background: "linear-gradient(to right, #5A8FEC, #A48BFF, #FF7A88)", // Blue to Purple to Coral gradient
          }}
        >
          Content-1
        </div>

        {/* Content-2 */}
        <div
          className="p-4 col-span-3 md:col-auto font-bold content-center text-2xl"
          style={{
            background: "linear-gradient(to right, #5A8FEC, #A48BFF, #FF7A88)", // Blue to Purple to Coral gradient
          }}
        >
          Content-2
        </div>

        {/* Content-3 */}
        <div
          className="p-4 font-bold col-span-3 md:col-auto content-center text-2xl"
          style={{
            background: "linear-gradient(to right, #5A8FEC, #A48BFF, #FF7A88)", // Blue to Purple to Coral gradient
          }}
        >
          Content-3
        </div>

        {/* Footer */}
        <div
          className="p-4 col-span-3 font-bold content-center text-2xl"
          style={{
            background: "linear-gradient(to right, #5A8FEC, #A48BFF, #FF7A88)", // Blue to Purple to Coral gradient
          }}
        >
          Footer
        </div>
      </div>
    </div>
  );
}
