import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import Dropdown1 from "../components/Dropdown1";
import { useFetch } from "../hooks/useFetch";
import toast from "react-hot-toast";

const EditTask = ({ baseURL }) => {
  const { id } = useParams();
  console.log(id);

  const { data, loading } = useFetch(`${baseURL}/api/task/${id}`);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState(""); // Initialize with an empty string
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
      setTag(data.tag); // Set the tag state with data fetched from the API
    }
  }, [data]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setSending(true);
    e.preventDefault();

    const formData = {
      title,
      description,
      tag,
    };

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const res = await fetch(`${baseURL}/api/task/${id}`, options);

    const responseData = await res.json();

    if (res.status === 200) {
      toast.success(responseData.message);
      navigate("/body");
    } else {
      toast.error("Something went wrong");
    }
    setSending(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link
        to="/new"
        className="d-flex align-items-center py-4 px-4 text-decoration-none text-black"
      >
        <MdKeyboardArrowLeft className="fs-1 d-inline" />
        <h1>
          <b>Edit Task</b>
        </h1>
      </Link>
      <form onSubmit={handleSubmit} action="">
        <div className="d-flex flex-column gap-4">
          <div className="px-5 position-relative">
            <label
              htmlFor="title"
              className="fw-semibold position-absolute mx-4 px-1 taskTitle puddy"
            >
              Task Title
            </label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="w-100 px-4 pt-3 rounded border"
              type="text"
              id="title"
              placeholder="E.g. Project Defense, Assignment ..."
              value={title}
            />
          </div>
          <div className="px-5 position-relative">
            <label
              htmlFor="Description"
              className="fw-semibold position-absolute mx-4 px-1 mb-4 description puddy"
            >
              Description
            </label>
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="w-100 px-4 pb-5 pt-4 rounded describe border"
              cols="300"
              rows="6"
              id="Description"
              placeholder="Briefly describe your task ..."
              value={description}
            ></textarea>
          </div>
          <div>{<Dropdown1 setTag={setTag} initialTag={tag} />}</div>{" "}
          {/* Pass initialTag prop to Dropdown1 */}
        </div>
        <div className="mx-5">
          <button
            disabled={sending}
            className="done py-3 w-100 border rounded-3"
          >
            Done
          </button>
        </div>
        <div className="my-4">
          <a className="shine" href="#top">
            Back to Top
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
