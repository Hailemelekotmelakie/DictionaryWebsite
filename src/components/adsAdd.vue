<template>
  <div class="mainContainer">
    <div class="addContainer">
      <div class="areYouSure">File the blank fields to add an advertisment</div>
      <div class="errorLabel">{{ this.error }}</div>
      <input type="text" v-model="formData.ADSCompanyName" placeholder="Company Name" />
      <input
        type="text"
        v-model="formData.ADSCompanyContent"
        placeholder="Company Content"
      />
      <input type="url" v-model="formData.Link" placeholder="Link If there is" />
      <input
        type="text"
        v-model="formData.Note"
        placeholder="Add Notes about pricing or ..."
      />
      <input
        class="deleteCancelContainerInput normal"
        type="button"
        @click="onsubmitHandle()"
        value="Submit"
      />
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import dataMixin from "@/mixins/dataMixin";
export default {
  inject: ["FIREBASE_URL"],
  mixins: [dataMixin],
  methods: {
    async onsubmitHandle() {
      this.isFormFilled()
        ? await Axios.post(this.FIREBASE_URL + `/ads.json`, this.formData)
            .then(() => {
              this.$router.push("/Viewads");
            })
            .catch((error) => {
              console.log("Unable to Handle" + error);
            })
            .finally(() => {
              this.makeFormDataNull();
              this.error = "";
            })
        : (this.error = "Make sure fields are min 4 & max 50 chars long");
    },
  },
};
</script>
<style scoped>
.mainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.addContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  transition: 2s;
  width: 50%;
  padding: 40px;
  height: fit-content;
  box-shadow: 1px 1px 10px rgb(181, 181, 181);
  border-radius: 5px;
  gap: 20px;
}

.addContainer input {
  outline: none;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid rgb(11, 101, 179);
}

.deleteCancelContainerInput {
  padding: 10px;
  transition: all ease-in-out 0.4s;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.normal {
  background-color: rgba(12, 189, 133, 0.775);
  color: white;
}
.normal:hover {
  background-color: rgb(10, 174, 144);
}
.areYouSure {
  text-transform: capitalize;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.errorLabel {
  font-size: 12px;
  color: brown;
}
@media screen and (max-width: 890px) {
  .addContainer {
    padding: 10;
    width: 100%;
    margin: 0;
  }
  .OneAds {
    margin: 5px;
  }
  .areYouSure {
    padding: 4px;
    font-size: 13px;
  }
}
</style>
