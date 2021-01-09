import request from "../axios";

const ordersApi = {
  selectAllOrders: "/ordering/list",
  searchOrders: "/ordering/list",
  orderDetail: "/orderdetail/listOrder"
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

export function orderDetail(parameter) {
  return request({
    url: ordersApi.orderDetail,
    method: "post",
    params: parameter
  });
}
