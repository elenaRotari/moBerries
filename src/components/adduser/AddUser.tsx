import React, { useContext, useState } from "react";
import { ExampleContext } from "../../MyContext";
import { ACTION } from "../../reducer/reducer";
import "./adduser.scss";
type Props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  INITIAL: Omit<users, "id">;
  type: "edit" | "save";
};

const AddUser = ({ setShow, INITIAL, type }: Props) => {
  const [state, dispatch] = useContext(ExampleContext);

  const [formdata, setFormData] = useState(INITIAL);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData(
      (prev) => (prev = { ...prev, [e.target.name]: e.target.value })
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (type) {
      case "save":
        dispatch({ type: ACTION.ADD, payload: formdata });
        setShow(false);
        break;
      case "edit":
        dispatch({ type: ACTION.EDIT, payload: formdata });
        setShow(false);
      default:
        break;
    }
  };
  return (
    <div className="newUserContainer">
      <form className="formContainer" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={handleChange}
          placeholder="First/Last-Name"
        />
        <input
          type="date"
          name="birthday"
          value={formdata.birthday}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
          placeholder="E-mail"
        />

        <select name="status" onChange={handleChange}>
          <option value="ACTIVE">Active</option>
          <option value="PENDING">Pending</option>
          <option value="BLOCKED">Blocked</option>
        </select>
        <button>Save</button>
      </form>
    </div>
  );
};

export default AddUser;
