import Navbar from "./Navbar";

const StudentDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto bg-[#F3F3F3] pb-8 mb-8">
        <h1 className="text-center font-bold text-3xl pt-8">
          Student Dashboard
        </h1>
        <form className="flex justify-center gap-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="Select/search a student"
            className="px-32 py-2 my-4"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Select/search a cohort"
            className="px-32 py-2 my-4"
          />
        </form>
        <hr className="h-px mx-12 bg-gray-200 border-0" />
        <div className="grid grid-cols-3 gap-4 p-4 mx-8">
          <div className="grid-col-1 block bg-white border border-gray-200 rounded-lg shadow py-8">
            <h5 className="text-sm text-center">attendance_average(avg)</h5>
            <h2 className="text-2xl text-center">N/A</h2>
          </div>
          <div className="grid-col-2 block bg-white border border-gray-200 rounded-lg shadow py-8">
            <h5 className="text-sm text-center">assignment_completion(avg)</h5>
            <h2 className="text-2xl text-center">N/A</h2>
          </div>
          <div className="grid-col-3 block bg-white border border-gray-200 rounded-lg shadow py-8">
            <h5 className="text-sm text-center">total_students(avg)</h5>
            <h2 className="text-2xl text-center">N/A</h2>
          </div>
        </div>
        <hr className="h-px mx-12 my-8 bg-gray-200 border-0" />
        <div className="block bg-white border border-gray-200 rounded-sm shadow mx-12">
          <h2 className="bg-purple-500 text-center font-bold p-5">
            Cohort Performance over time
          </h2>
          <hr className="h-px my-8 bg-gray-200 border-0" />
          <div className="flex items-center justify-center border-2 text-gray-200 text-4xl border-dashed border-blue  m-8 h-[300px]">
            Graph happens here.
          </div>
          <h5 className="text-center text-blue-700 mb-2">attendanceAverage</h5>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
