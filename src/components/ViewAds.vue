<template>
  <div class="mainContainer">
    <div class="listOfAds">Lists of Advertisments</div>
    <div class="OneAds" v-for="ad in adds" :key="ad.ID">
      <h5>Content : {{ ad.ADSCompanyContent }}</h5>
      <h5>Name : {{ ad.ADSCompanyName }}</h5>
      <h5>Link : {{ ad.Link }}</h5>
      <h5>Note : {{ ad.Note }}</h5>
      <div class="dropDownOnEdit" v-show="KeyGonnaEdit" v-if="KeyGonnaEdit == ad.ID">
        <label class="sureToUpdate"><b>Update Advertisement</b></label>
        <div class="errorLabel">{{ this.error }}</div>
        <input
          type="text"
          v-model="formData.ADSCompanyContent"
          placeholder="Company Content"
        />
        <input type="text" v-model="formData.ADSCompanyName" placeholder="Company Name" />
        <input type="url" v-model="formData.Link" placeholder="Link If there is" />
        <input type="text" v-model="formData.Note" placeholder="Note About Pricing" />
        <div class="updateCancelContainer">
          <input
            class="updateCancelContainerInput normal"
            type="button"
            @click="onsubmitHandle(ad.ID)"
            value="Update"
          />
          <input
            class="updateCancelContainerInput noneNormal"
            type="button"
            @click="CancelHide()"
            value="Cancel"
          />
        </div>
      </div>
      <div class="updateCancelContainer">
        <input
          class="updateCancelContainerInput noneNormal"
          type="button"
          @click="deleteAds(ad.ID)"
          value="Delete"
        />
        <input
          class="updateCancelContainerInput normal"
          type="button"
          @click="editAds(ad.ID)"
          value="Edit"
        />
      </div>
      <deleteModal :KeyGonnaDelete="KeyGonnaDelete" @MakeHide="HideMaker($event)" />
    </div>
  </div>
</template>
<script>
import deleteModal from "@/components/DeleteModal.vue";
import Axios from "axios";
import dataMixin from "@/mixins/dataMixin";
export default {
  inject: ["FIREBASE_URL"],
  mixins: [dataMixin],
  components: { deleteModal },
  data() {
    return {
      adds: [],
      KeyGonnaEdit: null,
      KeyGonnaDelete: null,
    };
  },
  methods: {
    async mapData(results) {
      let add = [];
      for (let Key in results) {
        await add.push({ ...results[Key], ID: Key });
      }
      this.adds = add;
    },

    async editAds(KeyGonnaEditVa) {
      this.KeyGonnaEdit = KeyGonnaEditVa;
      await Axios.get(this.FIREBASE_URL + `/ads/${KeyGonnaEditVa}.json`)
        .then((res) => {
          this.formData = res.data;
        })
        .catch((error) => {
          console.log(error);
          this.makeFormDataNull;
        })
        .finally(() => {
          this.error = null;
        });
    },
    CancelHide() {
      this.KeyGonnaEdit = null;
    },
    // update
    async onsubmitHandle(KeyGonnaEditVa) {
      this.isFormFilled()
        ? await Axios.put(
            this.FIREBASE_URL + `/ads/${KeyGonnaEditVa}.json`,
            this.formData
          )
            .then(() => {
              console.log("updated");
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              this.KeyGonnaEdit = null;
              this.updater();
            })
        : (this.error = "Make sure you file the required fields");
    },

    // delete
    async deleteAds(KeyGonnaDelete) {
      this.KeyGonnaDelete = KeyGonnaDelete;
    },

    async HideMaker(Id) {
      Id != null
        ? await Axios.delete(this.FIREBASE_URL + `/ads/${Id}.json`)
            .then(() => {
              console.log("Deleted");
            })
            .catch(() => {
              console.log("Unable to delete");
            })
            .finally(() => {
              this.KeyGonnaDelete = null;
              this.updater();
            })
        : (this.KeyGonnaDelete = null);
    },
  },
  async created() {
    this.updater();
  },
};
</script>
<style scoped>
.mainContainer {
  padding: 0px 50px;
}
.OneAds {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(194, 194, 194);
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  background-color: white;
}
h5 {
  line-height: 1rem;
  margin: 10px 0;
}
.dropDownOnEdit {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  transition: 2s;
  width: 50%;
  padding: 40px;
  height: fit-content;
  top: 60px;
  box-shadow: 1px 1px 10px rgb(181, 181, 181);
  border-radius: 5px;
  gap: 20px;
}
.dropDownOnEdit input {
  outline: none;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid rgb(11, 101, 179);
}
.updateCancelContainer {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 10px;
}
.updateCancelContainerInput {
  padding: 10px;
  transition: all ease-in-out 0.4s;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.normal {
  background-color: cadetblue;
  color: white;
}
.noneNormal {
  background-color: rgb(214, 214, 214);
  color: rgb(0, 0, 0);
}
.noneNormal:hover {
  background-color: rgb(255, 122, 122);
}
.normal:hover {
  background-color: rgb(5, 145, 187);
}
.errorLabel {
  font-size: 12px;
  color: brown;
  font-style: italic;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.listOfAds {
  padding: 20px;
  font-weight: 800;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.sureToUpdate {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
@media screen and (max-width: 890px) {
  .mainContainer {
    padding: 0px;
  }
  .OneAds {
    margin: 5px;
    align-items: flex-start;
    padding: 7px;
  }
  h5 {
    text-align: left;
  }
}
</style>
