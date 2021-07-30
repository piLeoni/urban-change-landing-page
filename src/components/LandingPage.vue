<template>
  <v-container class="scl-container outliner" fluid fill-height>
    <v-row class="outliner d-flex" align="center" justify="center">
      <v-col cols="10" sm="6" md="5" lg="4" class="outliner">
        <div class="scl-title mb-6">Urban<br />Changes</div>
        <div class="scl-subtitle mb-10">
          Help us recognize the changes that happened in cities!
        </div>
        <v-btn
          tile
          large
          color="#54B0AE"
          @click="randomLink()"
          class="scl-button depressed mb-16 white--text"
          >LAUNCH THE SURVEY</v-btn
        >
        <div class="scl-team">
          <div class="scl-team-title mb-5">
            A project by MIT Senseable City Lab </div
          >
          <b>Team:</b> Zhuangyuan Fan, Kee Jang Moon, Fan Zhang, Pietro Leoni,
          Fabio Duarte
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import parse from "csv-parse/lib/sync";
export default {
  name: "LandingPage",

  data() {
    return {
      links: null,
    };
  },
  methods: {
    randomLink() {
      if (this.links) {
        const randomizedLink = this.links[
          Math.floor(Math.random() * this.links.length)
        ];
        window.open(randomizedLink, "_blank");
      }
    },
  },

  mounted() {
    fetch(
      "https://raw.githubusercontent.com/brookefzy/urban-change/main/assets/surveylinks.csv"
    )
      .then((resp) => resp.text())
      .then((links) => {
        this.links = parse(links, {
          columns: true,
          skip_empty_lines: true,
        }).map((element) => element.link);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>

.scl-container {
  display: relative;
  position: fixed;
  background: rgba(5, 8, 19, 1);
  color: white;
  width: 100vw;
  height: 100vh;
}
.scl-title {
  font-family: "SF Pro Display", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: clamp(3.5rem, 5vw, 5rem);
  line-height: clamp(3.5rem, 20vw, 5rem);
  letter-spacing: 0.2em;
  color: #ffffff;
}
.scl-subtitle {
  font-family: "SF Pro Display", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 48px;
  color: #898989;
}
.scl-button {
  font-family: "SF Compact Display", sans-serif;
  font-family: SF Compact Display;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.25em;
}
.scl-team {
  font-family: "SF Compact Display Thin", sans-serif;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  font-size: 0.85rem;
  letter-spacing: 0.25em;
}
.scl-team b {
  font-family: "SF Compact Display ", sans-serif;
  /* font-size: 1.2rem; */
}
.scl-team-title {
  font-family: "SF Compact Display ", sans-serif;
  font-size: 1.2rem;
}
</style>
