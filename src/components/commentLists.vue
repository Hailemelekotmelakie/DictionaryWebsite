<template>
  <div class="hello">
    <h3 class="msg">All comments from android app</h3>
    <div class="Container">
      <div class="oneComment" v-for="comment in comments" :key="comment.id">
        <div class="texts">
          <span class="makeBold">Email: </span> {{ comment[0].Email }}
        </div>
        <div class="texts" v-if="comment[0].Geez">
          <span class="makeBold">Geez: </span> {{ comment[0].Geez }}
        </div>
        <div class="texts" v-if="comment[0].Amharic">
          <span class="makeBold">Amharic: </span>
          {{ comment[0].Amharic }}
        </div>
        <div class="texts">
          <span class="makeBold">Comment:</span><br />
          {{ comment[0].Comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "HelloWorld",
  inject: ["FIREBASE_URL"],
  data() {
    return {
      comments: [],
    };
  },
  async created() {
    await Axios.get(this.FIREBASE_URL + `/comments.json`).then((res) => {
      this.mappingData(res.data);
    });
  },

  methods: {
    mappingData(commentLists) {
      for (let key in commentLists) {
        this.comments.push({ ...commentLists[key], id: key });
      }
      console.log(this.comments);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 4px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.Container {
  padding: 0px 50px;
}
.oneComment {
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
.texts {
  font-size: 14px;
  line-height: 2rem;
  padding: 5px;
  margin: 0;
}
.makeBold {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
}
.msg {
  font-size: 16px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  line-height: 2rem;
}
@media screen and (max-width: 800px) {
  .Container {
    padding: 5px;
  }
  .msg {
    font-size: 13px;
  }
  .oneComment {
    padding: 4px;
    margin: 2px;
  }
  .texts {
    font-size: 12px;
    line-height: 1rem;
  }
  h3 {
    font-size: 13px;
  }
}
</style>
