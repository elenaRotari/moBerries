import React, { useState } from "react";
import AddUser from "./adduser/AddUser";
interface Props {
  border: string;
  textColor: string;
  action: JSX.Element;
  onClick?: () => void;
  radius: string;
  size: string;
  weight: string;
  type: "delete" | "edit";
  data?: Omit<users, "id">;
}

const ButtonComponent: React.FC<Props> = ({
  border,
  radius,
  size,
  weight,
  onClick,
  action,
  textColor,
  type,
  data,
}) => {
  const [show, setShow] = useState(false);
  const handleEdit = () => {
    if (type === "delete") return;
    setShow(!show);
  };

  return (
    <button
      onClick={onClick}
      style={{
        color: textColor,
        border,
        borderRadius: radius,

        fontSize: size,
        fontWeight: weight,
      }}
    >
      <div>
        <span onClick={handleEdit}>{action}</span>
        {data && show && (
          <AddUser setShow={setShow} INITIAL={data} type={"edit"} />
        )}
      </div>
    </button>
  );
};

export default ButtonComponent;
