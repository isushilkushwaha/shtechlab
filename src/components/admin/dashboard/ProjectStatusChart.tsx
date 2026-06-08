export default function ProjectStatusChart() {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">

      <h3 className="font-semibold mb-5">
        Project Status
      </h3>

      <div className="space-y-4">

        <div>
          <p className="text-sm">
            Active Projects
          </p>

          <div className="mt-2 h-2 rounded bg-gray-100">
            <div className="h-2 w-[75%] rounded bg-blue-600" />
          </div>
        </div>

        <div>
          <p className="text-sm">
            Completed
          </p>

          <div className="mt-2 h-2 rounded bg-gray-100">
            <div className="h-2 w-[50%] rounded bg-green-600" />
          </div>
        </div>

      </div>
    </div>
  );
}