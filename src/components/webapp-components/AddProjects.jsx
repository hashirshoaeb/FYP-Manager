import React, { useState, useEffect } from "react";

const AddProject = props => {
  // username from match.params
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [detail, setDetail] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState([""]);
  const [milestones, setmilestones] = useState("");

  const handleSubmit = () => {
    console.log({ title, description, detail, link, tags, milestones });
  };

  return (
    <div className="container shadow-lg">
      <div className="text-center"> Add Project</div>
      <form>
        <Text
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Text
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <Text
          label="Link"
          value={link}
          onChange={e => setLink(e.target.value)}
        />
        <InputTag value={tags} onChange={value => setTags(value)} />
        <div className="form-group">
          <label>Detail</label>
          <textarea
            className="form-control"
            rows="11"
            value={detail}
            onChange={e => {
              setDetail(e.target.value);
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
const Text = ({ label, value, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={e => {
          onChange(e);
        }}
      />
    </div>
  );
};

const InputTag = ({ value, onChange }) => {
  const handleChange = ({ e, index }) => {
    const data = [...value];
    data[index] = e.target.value;
    onChange(data);
  };

  const handleAddClick = ({ e, index }) => {
    const data = [...value];
    data.push("");
    onChange(data);
  };

  const handleRemoveClick = ({ e, index }) => {
    const data = [...value];
    data.splice(index, 1);
    onChange(data);
  };

  return (
    <div>
      {value.map((value, index) => {
        return (
          <div key={index} className="form-group">
            Tag
            <input
              type="text"
              className="form-control"
              value={value}
              onChange={e => {
                handleChange({ e, index });
              }}
            />
            <button
              className="btn btn-primary"
              onClick={e => {
                e.preventDefault();
                handleAddClick({ e, index });
              }}
            >
              Add
            </button>
            <button
              className="btn btn-primary"
              onClick={e => {
                e.preventDefault();
                handleRemoveClick({ e, index });
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

// Implement Later
const InputMileStone = ({ value, onChange }) => {
  return (
    <div>
      <div>{/*Later */}</div>
    </div>
  );
};

export default AddProject;
