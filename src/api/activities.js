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
  searchActivities: "/banner/list"
};

export function selectAllActivities() {
  return request({
    url: ActivitiesApi.selectAllActivities,
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

export function searchActivities(parameter) {
  return request({
    url: ActivitiesApi.searchActivities,
    method: "get",
    params: parameter
  });
}
