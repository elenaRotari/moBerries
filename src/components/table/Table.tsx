import { ChangeEvent, ReactNode, useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ExampleContext } from "../../MyContext";
import { ACTION } from "../../reducer/reducer";
import users from "../../../data.json";
import "./table.scss";
import ButtonComponent from "../ButtonComponent";
import { FiEdit } from "react-icons/fi";
import {
  AiOutlineDelete,
  AiOutlineUserAdd,
  AiOutlineSortAscending,
} from "react-icons/ai";
import SearchBar from "../search/SearchBar";
import AddUser from "../adduser/AddUser";

function Table() {
  const [state, dispatch] = useContext(ExampleContext);
  const [show, setShow] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");

  const data: any = useLoaderData();

  useEffect(() => {
    dispatch({
      type: ACTION.LOAD,
      payload: { ...data, tableKeys: Object.keys(data.users[0]) },
    });
  }, []);

  const handleState = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: ACTION.SORT_BY_STATUS,
      payload: event.target.value,
    });
  };
  return (
    <>
      <div className="tableContainer">
        <div className="topContainer">
          <SearchBar />
          <div>
            <button className="addPerson">
              <AiOutlineUserAdd onClick={() => setShow(!show)} />
              {show && (
                <AddUser
                  setShow={setShow}
                  INITIAL={{
                    name: "",
                    birthday: "",
                    email: "",
                    status: "ACTIVE",
                  }}
                  type="save"
                />
              )}
            </button>
            <button
              className="sortByName"
              onClick={() =>
                dispatch({
                  type: ACTION.SORT_BY_NAME,
                  payload: state.users,
                })
              }
            >
              <AiOutlineSortAscending />
            </button>
          </div>
        </div>
        <table className="table">
          <caption>Our Clients</caption>
          <thead className="labels">
            <tr>
              {state.tableKeys &&
                state.tableKeys.map((el: string, i: number) => {
                  switch (el) {
                    case "status":
                      return (
                        <select name="status" onChange={handleState}>
                          <option value="">Status/All</option>
                          <option value="ACTIVE">Active</option>
                          <option value="PENDING">Pending</option>
                          <option value="BLOCKED">Blocked</option>
                        </select>
                      );

                    default:
                      return (
                        <th key={i}>
                          {el.charAt(0).toUpperCase() + el.slice(1)}
                        </th>
                      );
                  }
                })}
            </tr>
          </thead>
          <tbody className="details">
            {state.copy &&
              state.copy.map((el: users) => {
                return (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td>{el.birthday}</td>
                    <td>{el.email}</td>
                    <td>{el.status}</td>
                    <td>
                      <div className="edit">
                        <ButtonComponent
                          border="none"
                          radius="5px"
                          textColor="green"
                          size="1.5rem"
                          weight="600"
                          action={<FiEdit />}
                          type="edit"
                          data={el}
                        />
                      </div>
                    </td>
                    <td>
                      <div>
                        <ButtonComponent
                          border="none"
                          onClick={() =>
                            dispatch({
                              type: ACTION.DELETE,
                              payload: el.id,
                            })
                          }
                          radius="5px"
                          textColor="red"
                          size="1.5rem"
                          weight="600"
                          action={<AiOutlineDelete />}
                          type="delete"
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Table;

export const loader = () => {
  return users;
};
