<template>
  <div>
    <exception :model="model"></exception>
  </div>
</template>

<script>
// import Footer from "../../layout/Footer";
import Exception from "../Exception/Exception";

export default {
  components: {
    Exception
  },
  data() {
    return {
      model: {
        src:
          "https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",
        title: "403",
        desc: "抱歉，你无权访问该页面"
      }
    };
  }
};
</script>

<style></style>
