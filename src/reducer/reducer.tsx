import sortBy from "sort-by";

type initialType = {
  users: users[];
  copy: users[];
  tableKeys: string[];
};

export const initState: initialType = {
  users: [],
  copy: [],
  tableKeys: [],
};

export enum ACTION {
  LOAD,
  ADD,
  EDIT,
  DELETE,
  SEARCH,
  SORT_BY_NAME,
  SORT_BY_STATUS,
}

type ReducerAction = {
  type: ACTION;
  payload: any;
};

export const reducer = (state: typeof initState, action: ReducerAction) => {
  switch (action.type) {
    case ACTION.LOAD:
      return { ...action.payload, copy: action.payload.users };
    case ACTION.SEARCH:
      return {
        ...state,
        copy: state.users.filter((el: users) =>
          el.email.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case ACTION.DELETE:
      return {
        ...state,
        users: state.users.filter((el: users) => el.id !== action.payload),
        copy: state.users.filter((el: users) => el.id !== action.payload),
      };
    case ACTION.EDIT:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...action.payload } : user
        ),
        copy: state.copy.map((user) =>
          user.id === action.payload.id ? { ...action.payload } : user
        ),
      };
    case ACTION.ADD:
      return {
        ...state,
        users: [
          ...state.users,
          { ...action.payload, id: state.users.length + 1 },
        ],
        copy: [
          ...state.copy,
          { ...action.payload, id: state.users.length + 1 },
        ],
      };
    case ACTION.SORT_BY_NAME:
      return {
        ...state,
        users: action.payload.sort(sortBy("name")),
        copy: action.payload.sort(sortBy("name")),
      };
    case ACTION.SORT_BY_STATUS:
      return {
        ...state,
        copy: state.users.filter((el: users) =>
          el.status.includes(action.payload)
        ),
      };
    default:
      return state;
  }
};
