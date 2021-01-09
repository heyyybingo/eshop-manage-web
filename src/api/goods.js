import request from "../axios";

const goodsApi = {
  // selectAllGoods: "/selectAllGoods",
  selectAllGoods: "/product/list",
  // deleteGoods: "/deleteGoods",
  deleteGoods: "/product/delete",
  // insertGoods: "/insertGoods",
  insertGoods: "/product/save",
  // updateGoods: "/updateGoods",
  updateGoods: "/product/update",
  // searchGoods: "/searchGoods"
  searchGoods: "/product/list",
  getType: "/type/list",
  updateType: "/type/update",
  deleteType: "/type/delete",
  addType: "/type/save",
  getBrand: "/brand/list",
  updateBrand: "/brand/update",
  deleteBrand: "/brand/delete",
  addBrand: "/brand/save",
  getBanner: "/banner/list",
  addBannerGood: "/bannerproduct/save"
};

// export function selectAllGoods() {
//   return request({
//     url: goodsApi.selectAllGoods,
//     method: "get"
//   });
// }
export function selectAllGoods() {
  return request({
    url: goodsApi.selectAllGoods,
    method: "post"
  });
}

export function getBrand() {
  return request({
    url: goodsApi.getBrand,
    method: "post"
  });
}

export function getBanner() {
  return request({
    url: goodsApi.getBanner,
    method: "post"
  });
}

export function getType() {
  return request({
    url: goodsApi.getType,
    method: "post"
  });
}

export function insertGoods(parameter) {
  return request({
    url: goodsApi.insertGoods,
    method: "post",
    data: parameter
  });
}

export function addType(parameter) {
  return request({
    url: goodsApi.addType,
    method: "post",
    data: parameter
  });
}

export function addBannerGood(parameter) {
  return request({
    url: goodsApi.addBannerGood,
    method: "post",
    data: parameter
  });
}

export function addBrand(parameter) {
  return request({
    url: goodsApi.addBrand,
    method: "post",
    data: parameter
  });
}

export function updateGoods(parameter) {
  return request({
    url: goodsApi.updateGoods,
    method: "post",
    data: parameter
  });
}

export function updateType(parameter) {
  return request({
    url: goodsApi.updateType,
    method: "post",
    data: parameter
  });
}

export function updateBrand(parameter) {
  return request({
    url: goodsApi.updateBrand,
    method: "post",
    data: parameter
  });
}

export function deleteGoods(parameter) {
  return request({
    url: goodsApi.deleteGoods,
    method: "post",
    data: parameter
  });
}

export function deleteType(parameter) {
  return request({
    url: goodsApi.deleteType,
    method: "post",
    data: parameter
  });
}

export function deleteBrand(parameter) {
  return request({
    url: goodsApi.deleteBrand,
    method: "post",
    data: parameter
  });
}

export function searchGoods(parameter) {
  return request({
    url: goodsApi.searchGoods,
    method: "get",
    params: parameter
  });
}
