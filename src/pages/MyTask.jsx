import toast from "react-hot-toast";
import { useFetch } from "../hooks/useFetch";
import editIcon from "./../assets/icons/clarity_note-edit-line.png";
import deleteIcon from "./../assets/icons/fluent_delete-24-regular.png";
import { Link, useNavigate } from "react-router-dom";

const MyTask = ({ baseURL }) => {
  const test = useFetch(`${baseURL}/api/task`);
  const { data, loading, error } = test;

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const options = {
      method: "DELETE",
    };

    const res = await fetch(`${baseURL}/api/task/${id}`, options);

    const data = await res.json();

    if (res.status === 200) {
      toast.success(data.message);
      navigate(0);
      return;
    }

    toast.error("Something went wrong");
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between px-5 pt-4">
        <h1>
          <b>My Tasks</b>
        </h1>
        <Link to="/new" className="shine text-decoration-none fw-semibold">
          + Add New Task
        </Link>
      </div>
      {data
        ? data.map((Task) => {
            let { title, description, tag, _id } = Task;
            const tagColor =
              tag.toLowerCase() === "urgent" ? "#F38383" : "#73C3A6";

            return (
              <div className="container" key={_id}>
                <div className="border mt-4 rounded-3 p-3">
                  <div className="d-flex justify-content-between gap-3 mt-3 border-bottom pb-3 mb-3 align-items-center">
                    <p className="tags m-0" style={{ color: tagColor }}>
                      {tag}
                    </p>
                    <div className="d-flex align-items-center gap-2 text-decoration-none">
                      <Link
                        to={`/edit/${Task._id}`}
                        className="d-flex align-items-center gap-2 homeButton px-3 py-1 rounded-2 text-decoration-none"
                      >
                        <img src={editIcon} alt="editIcon" />
                        <p className="m-0">Edit</p>
                      </Link>
                      <button
                        onClick={() => {
                          handleDelete(_id);
                        }}
                        className="d-flex align-items-center gap-2 delete px-2 py-1 rounded-2"
                      >
                        <img src={deleteIcon} alt="deleteIcon" />
                        <p className="m-0 ">Delete</p>
                      </button>
                    </div>
                  </div>
                  <p className="text-start">{title}</p>
                  <p className="text-start">{description}</p>
                </div>
              </div>
            );
          })
        : null}

      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}
      <div className="my-4">
        <a className="shine" href="#top">
          Back to Top
        </a>
      </div>
    </div>
  );
};

export default MyTask;
