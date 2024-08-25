import Navbar from "./Navbar";

const ConfigPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center font-bold mt-8 text-2xl">
        The Core (Back-End Odyssey)
      </h1>
      <div className="mx-32">
        <p className="text-center mx-16 px-32 text-sm">
          Here, your 🐍 Python skills will bend space and time to connect front
          and back ends. Ignite the AWS-powered 🚀 databases to store the
          universe of data securely and efficiently. 🐳 Containerize your
          creation for a journey that transcends environments.
        </p>
        <p className="text-center mx-16 mt-4 px-32 text-sm">
          Tools at Your Disposal: AWS (Amazon Web Services):☁️, Python:🐍,
          Docker:🐳, Linux:🐧, Your limitless imagination: ✨
        </p>
        <hr className=" h-px bg-gray-200 mx-48 my-12 border-0" />
        <div className="grid grid-cols-2 mx-48 p-4">
          <div className="grid-col-1">
            <h3 className="font-bold m-2">Data Structures Explained</h3>
            <p className="text-sm">
              The data represents information about a student in a dashboard
              system. Each student record includes:
            </p>
            <h4 className="p-4 px-4 text-sm font-bold">⭕Basic Details:</h4>
            <p className="text-sm">
              Includes the{" "}
              <span className="text-blue-600 font-bold">
                name, email, cohort
              </span>{" "}
              (the group or class the student belongs to), and{" "}
              <span className="text-blue-600 font-bold">ranking</span> (a
              numerical ranking of the student).
            </p>
            <h4 className="p-4 px-4 text-sm font-bold">
              ⭕Academic Performance Metrics:
            </h4>
            <p className="text-sm">
              Consists of{" "}
              <span className="text-blue-600 font-bold">
                assignment_completion
              </span>{" "}
              (the number of assignments completed) and{" "}
              <span className="text-blue-600 font-bold">
                attendance_average
              </span>{" "}
              (the average attendance percentage).
            </p>
            <h4 className="p-4 px-4 text-sm font-bold">
              ⭕Weekly Attendance List:
            </h4>
            <p className="text-sm">
              A detailed breakdown of weekly attendance. Each entry includes the{" "}
              <span className="text-blue-600 font-bold">week</span> identifier,
              the number of days the student was{" "}
              <span className="text-blue-600 font-bold">present</span> and{" "}
              <span className="text-blue-600 font-bold">absent</span> .
            </p>
          </div>
          <div className="grid-col-2 pl-16">
            <h3 className="font-bold m-2">List of APIs</h3>
            <p className="mx-8 text-sm">
              1. GET <span className="text-blue-600">"/api/health-check"</span>{" "}
              - Health Check
            </p>
            <p className="mx-8 text-sm">
              2. POST{" "}
              <span className="text-blue-600">"/api/test-db-connection"</span> -
              Test Database Connection
            </p>
            <p className="mx-8 text-sm">
              3. GET <span className="text-blue-600">""/api/students"</span> -
              Get All Students
            </p>
            <p className="mx-8 text-sm">
              4. POST{" "}
              <span className="text-blue-600">"/api/student/[email]"</span> -
              Get Student Details
            </p>
            <p className="mx-8 text-sm">
              5. GET{" "}
              <span className="text-blue-600">
                "/api/cohort/stats/[cohort_name]"
              </span>{" "}
              - Get Cohort Stats
            </p>
            <p className="mx-8 text-sm">
              6. GET{" "}
              <span className="text-blue-600">
                "/api/cohort/attendance/[cohort_name]"
              </span>{" "}
              - Get Cohort attendance stats (Graph)
            </p>
          </div>
        </div>
        <h3 className="text-gray-600 text-sm text-right mr-48 mb-2">
          Hint: our front-end dev is on vacation so we hope you can work with
          their structure
        </h3>
      </div>
      <hr className=" h-px bg-gray-200 mx-48 my-12 border-0" />
      {/* Database conection */}

      <div className="max-w-screen-xl mx-auto">
        <h3 className="mx-48 font-bold my-4">[A] Server Configuration</h3>
        <p className="mx-48 my-4">Testing on "..backendurl/api/health-check"</p>
        <hr className=" h-px bg-gray-200 mx-48 my-4 border-0" />
        <h3 className="mx-48 mb-4">Backend URL</h3>
        <form action="" className="mx-48 pb-32">
          <input
            className="mb-4 px-2 py-2 border border-gray-200 rounded w-1/2 mr-4"
            type="text"
            name=""
            placeholder="http://ip_address:3000"
            id=""
          />
          <button
            className="bg-blue-600 px-4 py-2 border mr-4 rounded-md text-white"
            type="submit"
          >
            Test Backend Link
          </button>
          <button
            className="bg-black px-4 py-2 border mr-4 rounded-md text-white"
            type="submit"
          >
            Save Backend URL
          </button>
        </form>
        <hr className=" h-px bg-gray-200 mx-48 my-4 border-0" />
      </div>

      <div className="max-w-screen-xl mx-auto">
        <h3 className="mx-48 font-bold my-8">[B] Database Configuration</h3>
        <p className="mx-48 my-4">
          Testing on "..backendurl/api/test-db-connection"
        </p>
        <hr className=" h-px bg-gray-200 mx-48 my-4 border-0" />

        <form action="">
          <div className="mx-48 grid grid-cols-2 gap-4">
            <div className="grid grid-rows-2 gap-4">
              <div className="">
                <label htmlFor="">Database Host</label>
                <br />
                <input
                  className="mt-2 w-full border border-gray-200 rounded-md p-1"
                  type="text"
                  placeholder="localhost"
                />
              </div>
              <div className="">
                <label htmlFor="">Database Password</label>
                <br />
                <input
                  className="mt-2 w-full border border-gray-200 rounded-md p-1"
                  type="text"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="">
                <label htmlFor="">Database User</label>
                <br />
                <input
                  className="mt-2 w-full border border-gray-200 rounded-md p-1"
                  type="text"
                  placeholder="root"
                />
              </div>
              <div className="">
                <label htmlFor="">Database Name</label>
                <br />
                <input
                  className="mt-2 w-full border border-gray-200 rounded-md p-1"
                  type="text"
                  placeholder="nebula"
                />
              </div>
            </div>
          </div>
          <button
            className="mx-48 mt-8 mb-16 bg-[#A52A2A] text-white rounded px-2 py-1"
            type="submit"
          >
            Test Database Connection
          </button>
        </form>
        <hr className=" h-px bg-gray-200 mx-48 my-4 border-0" />
      </div>
    </div>
  );
};

export default ConfigPage;
