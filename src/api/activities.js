import request from "../axios";

const ActivitiesApi = {
  // selectAllActivities: "/selectAllActivities",
  selectAllActivities: "/banner/list",
  // deleteActivities: "/deleteActivities",
  deleteActivities: "/banner/delete",
  // addActivities: "/addActivities",
  addActivities: "/banner/save",
  // updateActivities: "/updateActivities",
  updateActivities: "/banner/update",
  // searchActivities: "/searchActivities"
  searchActivities: "/banner/list",
  bannerDetail: "/bannerproduct/listProduct",
  bannerProduct: "/bannerproduct/list",
  deleteBannerProduct: "/bannerproduct/delete"
};

export function selectAllActivities() {
  return request({
    url: ActivitiesApi.selectAllActivities,
    method: "post"
  });
}

export function bannerProduct() {
  return request({
    url: ActivitiesApi.bannerProduct,
    method: "post"
  });
}

export function addActivities(parameter) {
  return request({
    url: ActivitiesApi.addActivities,
    method: "post",
    data: parameter
  });
}

export function updateActivities(parameter) {
  return request({
    url: ActivitiesApi.updateActivities,
    method: "post",
    data: parameter
  });
}

export function deleteActivities(parameter) {
  return request({
    url: ActivitiesApi.deleteActivities,
    method: "post",
    data: parameter
  });
}

export function deleteBannerProduct(parameter) {
  return request({
    url: ActivitiesApi.deleteBannerProduct,
    method: "post",
    data: parameter
  });
}

export function searchActivities(parameter) {
  return request({
    url: ActivitiesApi.searchActivities,
    method: "get",
    params: parameter
  });
}

export function bannerDetail(parameter) {
  return request({
    url: ActivitiesApi.bannerDetail,
    method: "get",
    params: parameter
  });
}
