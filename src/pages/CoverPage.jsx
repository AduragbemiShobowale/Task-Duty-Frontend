import React from "react";
import imageComponents from "./../assets/image/Component 1.png";
import { Link } from "react-router-dom";

const CoverPage = () => {
  return (
    <div className="d-md-flex align-items-center py-5">
      <div className="text-start px-5">
        <h1>
          Manage your Tasks on <span>TaskDuty</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem qui
          perspiciatis sed iste tempore rem perferendis et. Molestias saepe,
          quasi minima eum minus dignissimos. Magni ea eveniet sequi quis quo?
        </p>
        <Link
          to='/body'
          className="homeButton border-2 py-2 px-3 rounded-2 text-decoration-none"
        >
          Go To My Tasks
        </Link>
      </div>
      <img className="w-100" src={imageComponents} alt="imageComponents" />
    </div>
  );
};

export default CoverPage;
