import request from "../axios";

const ordersApi = {
  selectAllOrders: "/ordering/list",
  searchOrders: "/ordering/list"
};

export function selectAllOrders() {
  return request({
    url: ordersApi.selectAllOrders,
    method: "post"
  });
}

export function searchOrders(parameter) {
  return request({
    url: ordersApi.searchOrders,
    method: "get",
    params: parameter
  });
}
