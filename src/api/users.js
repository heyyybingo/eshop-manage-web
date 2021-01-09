import request from "../axios";

const usersApi = {
  // selectAllUsers: "/selectAllUsers",
  selectAllUsers: "/user/list",
  // deleteUser: "/deleteUser",
  deleteUser: "/user/delete",
  // addUser: "/addUser",
  addUser: "user/save",
  // updateUser: "/updateUser",
  updateUser: "user/update",
  // searchUsers: "/searchUsers"
  searchUsers: "user/list"
};

export function selectAllUsers() {
  return request({
    url: usersApi.selectAllUsers,
    method: "post"
  });
}

export function addUser(parameter) {
  return request({
    url: usersApi.addUser,
    method: "post",
    data: parameter
  });
}

export function updateUser(parameter) {
  return request({
    url: usersApi.updateUser,
    method: "post",
    data: parameter
  });
}

export function deleteUser(parameter) {
  return request({
    url: usersApi.deleteUser,
    method: "post",
    data: parameter
  });
}

export function searchUsers(parameter) {
  return request({
    url: usersApi.searchUsers,
    method: "get",
    params: parameter
  });
}
