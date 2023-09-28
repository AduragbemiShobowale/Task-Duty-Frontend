import React, { useState } from "react";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Dropdown1 from "../components/Dropdown1";
import toast from "react-hot-toast";

const NewTask = ({ baseURL }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("urgent");
  const [sending, setSending] = useState(false);
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const res = await fetch(`${baseURL}/api/task/create`, options);

    const data = await res.json();

    if (res.status === 400) {
      toast.error(data.message);
      setSending(false);
      return;
    }

    toast.success(data.message);
    setSending(false);
    navigate("/body");
  };

  return (
    <div>
      <Link
        to="/body"
        className="d-flex align-items-center py-4 px-4 text-decoration-none text-black"
      >
        <MdKeyboardArrowLeft className="fs-1 d-inline" />
        <h1>
          <b>New Task</b>
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
            ></textarea>
          </div>
          {/* <Dropdown /> */}
          <div>{<Dropdown1 setTag={setTag} />}</div>
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

export default NewTask;
