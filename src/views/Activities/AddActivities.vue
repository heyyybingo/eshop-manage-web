<template>
  <div>
    <a-page-header
      title="添加活动"
      @back="
        () => {
          this.$router.back();
        }
      "
    />
    <div class="container">
      <a-form v-bind="formItemLayout">
        <a-form-item label="活动名称">
          <a-input
            id="title"
            v-model="activity.title"
            placeholder="请输入活动名称"
          />
        </a-form-item>
        <a-form-item label="起止时间">
          <a-range-picker
            :show-time="{ format: 'HH:mm' }"
            format="YYYY-MM-DD HH:mm"
            :placeholder="['Start Time', 'End Time']"
            @change="onChange"
          />
        </a-form-item>
        <a-form-item label="活动图片">
          <a-upload
            name="file"
            :action="
              `http://120.79.1.207:8080/aokimall_admin/backAdmin/banner/upload`
            "
            @change="handleChange"
            :multiple="false"
          >
            <a-button> <a-icon type="upload" /> Click to Upload </a-button>
          </a-upload>
        </a-form-item>
        <a-form-item label="活动内容">
          <a-textarea
            :rows="3"
            v-model="activity.content"
            placeholder="请输入活动内容"
          />
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
          <a-button type="primary" @click="addActivity(activity)">
            添加活动
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { addActivities } from "@/api/activities.js";
import request from "../../axios";

export default {
  data() {
    return {
      request,
      uploadimg: "",
      loading: false,
      imageUrl: "",
      activity: {},
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      }
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status === "done") {
        if (info.file.response.data) {
          let data = info.file.response.data;
          this.uploadimg = data;
        }
      }
      if (info.file.status === "error") {
        this.$message.error("上传失败");
      }
    },
    onChange(dates) {
      this.activity.starttime = dates[0];
      this.activity.endtime = dates[1];
    },
    addActivity(activity) {
      activity.avator = this.uploadimg;
      addActivities(activity).then(res => {
        if (res.data.code === 0) {
          this.$success({
            title: "添加成功"
          });
          console.log("添加成功");
          this.user = {};
        }
      });
      console.log(activity);
    }
  }
};
</script>

<style scoped>
.container {
  /* border: 1px solid #ebeef5; */
  width: 80%;
  margin: 0 auto;
}
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
