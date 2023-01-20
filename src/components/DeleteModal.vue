<template>
  <div v-if="KeyGonnaDelete" class="dropDownOnDelete">
    <div class="areYouSure">Are You Sure To Delete the Advertisement?</div>
    <div class="deleteCancelContainer">
      <input
        class="normal deleteCancelContainerInput"
        @click="emitFunction"
        type="button"
        value="Delete"
      />
      <input
        class="noneNormal deleteCancelContainerInput"
        @click="emitFunctionCancel"
        type="button"
        value="Cancel"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    KeyGonnaDelete: {
      type: String,
    },
  },
  methods: {
    emitFunction() {
      this.$emit("MakeHide", this.KeyGonnaDelete);
    },
    emitFunctionCancel() {
      this.$emit("MakeHide", null);
    },
  },
};
</script>
<style>
.dropDownOnDelete {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  transition: 2s;
  width: fit-content;
  padding: 60px;
  height: fit-content;
  top: 100px;
  box-shadow: 1px 1px 10px rgb(181, 181, 181);
  border-radius: 5px;
  gap: 20px;
}

.deleteCancelContainer {
  display: flex;
  flex-direction: row;
  gap: 10px;
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
  background-color: rgb(203, 36, 36);
  color: white;
}
.noneNormal {
  background-color: rgb(214, 214, 214);
  color: rgb(0, 0, 0);
}
.noneNormal:hover {
  background-color: rgb(184, 184, 184);
}
.normal:hover {
  background-color: rgb(255, 2, 2);
}
.areYouSure {
  text-transform: capitalize;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
