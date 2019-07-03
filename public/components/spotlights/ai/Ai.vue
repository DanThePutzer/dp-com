<template>
  <div id="ai" class="spotlight-content">
    <p>{{ content.text[0] }}</p>
    <p>{{ content.text[1] }}</p>
    <p>{{ content.text[2] }}</p>
    <p>{{ content.text[3] }}</p>

    <div class="section" v-for="section in content.sections">
      <h2 class="title">{{ section.title }}</h2>
      <div class="card" v-for="card in section.cards">

        <div class="work" v-if="section.title == 'Work'">
          <h3>
            {{ card.name }}
            <a :href="card.link" target="_blank"><h6 class="dansicon">m</h6></a>
          </h3>

          <h5 class="status">{{ card.status }}</h5>
          <p class="description">{{ card.description }}</p>
        </div>

        <div class="other" v-if="section.title != 'Work'">
          <h3>{{ card.name }} <span>{{ card.author }}</span></h3>
          <h5 v-if="section.title == 'Books'" class="status">{{ card.status }}</h5>
          <a v-if="section.title != 'Books'" :href="card.link" target="_blank"><h6 class="dansicon">m</h6></a>
        </div>
        <!-- <h4 v-if="section.title != 'Work'">{{ card.author }}</h4> -->
      </div>
    </div>

  </div>
</template>

<script>
import spotlightData from './ai.js'

export default {
  data() {
    return {
      content: spotlightData
    }
  }
}

</script>

<style lang="scss">

  @import 'public/style/scss/colors';

  #ai {

    p {
      margin: 0px 0px 12px 0px;
    }

    .section {
      margin: 50px 0px 0px 0px;

      .status {
        display: inline-block;
        background: $mlGreen;
        padding: 5px 8px;
        border-radius: 5px;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 10px;
        color: #FFF;
      }

      h2 {
        font-family: 'Roboto';
        font-weight: 300;
        font-size: 24px;
        color: $subtitleGrey;
        margin: 0px 0px 25px 0px;
      }

      h3 {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 20px;
        margin: 0;
      }

      .card {
        margin: 15px 0px 0px 0px;
        padding: 0px 0px 15px 0px;
        border-bottom: 0.5px dashed #E6E6E6;

        &:last-of-type {
          border: none;
        }

        a {
          display: block;
          margin-left: auto;
          text-decoration: none;
          background: $mlGreen;
          padding: 6px 4px;
          border-radius: 3px;
          align-self: flex-start;
          color: #FFF;
          font-size: 12px;
        }

        .work {
          margin: 20px 0px 0px 0px;

          h3 {
            display: flex;
            justify-content: space-between;
            font-size: 20px;
          }

          .status {
            margin: 10px 0px 12px 0px;
          }
        }

        .other {
          display: flex;
          align-items: center;

          h3 {
            font-size: 17px;
            // margin-right: auto;
            margin: 0 auto 0 0;
          }

          span {
            font-weight: 300;
            font-size: 15px;
            margin: 0px 0px 0px 20px;
            color: #6F6F6F;
          }
        }

        // h3 {
        //   display: flex;
        //   align-items: center;
        //   font-family: 'Roboto';
        //   font-weight: 700;
        //   font-size: 20px;
        //   margin: 0px;

        //   .status {
        //     margin-left: auto;
        //   }
        // }

        // span {
        //   font-family: 'Roboto';
        //   font-weight: 300;
        //   font-size: 18px;
        //   color: $subtitleGrey;
        //   margin: 0px 0px 0px 20px;
        // }

        // p {
        //   font-family: 'Lato';
        //   font-weight: 500;
        //   font-size: 18px;
        //   line-height: 28px;
        // }

        // .status {
        //   display: inline-block;
        //   background: $mlGreen;
        //   padding: 5px 8px;
        //   border-radius: 5px;
        //   font-family: 'Roboto';
        //   font-weight: 700;
        //   font-size: 10px;
        //   color: #FFF;
        //   margin: 10px 0px;
        // }

        // a {
        //   margin-left: auto;
        //   text-decoration: none;

        //   .dansicon {
        //     background: $mlGreen;
        //     font-size: 10px;
        //     padding: 8px 6px 7px 6px;
        //     border-radius: 100px;
        //     margin: 0px 0px 0px 7px;
        //     color: #FFF;
        //   }
        // }
      }
    }
  }

</style>


