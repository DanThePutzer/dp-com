<template>
  <div id="reading">
    <div class="current">
      <h2>CURRENT</h2>
      <div v-for="book in currentBooks" class="book">
        <h3>{{book.title}} <span>{{book.author}}</span></h3>
        <div>
          <div :class="{desktop: book.category == 'Artificial Intelligence'}" class="category">{{book.category}}</div>
          <div v-if="book.category == 'Artificial Intelligence'" :class="{mobile: book.category == 'Artificial Intelligence'}" class="category">AI</div>
          <a class="dansicon" href="">k</a>
        </div>
      </div>
    </div>

    <div class="recent">
      <h2>RECENT</h2>
      <div v-for="book in recentBooks" class="book">
        <h3>{{book.title}} <span>{{book.author}}</span></h3>
        <div>
          <div :class="{desktop: book.category == 'Artificial Intelligence'}" class="category">{{book.category}}</div>
          <div v-if="book.category == 'Artificial Intelligence'" :class="{mobile: book.category == 'Artificial Intelligence'}" class="category">AI</div>
          <a class="dansicon" href="">k</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

/* Importing Data */
import spotlightData from './reading.js'

export default {
  data() {
    return {

    }
  },
  computed: {
    currentBooks() {
      return spotlightData.filter((book) => book.current);
    },
    recentBooks() {
      return spotlightData.filter((book) => !book.current);
    }
  }
}
</script>

<style lang="scss">
  @import 'public/style/scss/colors';

  #reading {

    .current, .recent {
      margin: 35px 0px 0px 0px;
      padding: 0px 10px;

      h2 {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 11px;
        color: #B5B5B5;
        margin: 0px 0px 12px 0px;
      }
    }

    .current .book {

      &::before {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: $mainRed;
        margin: 0px 10px 0px -20px;
      }
    }

    .book {
      display: flex;
      align-items: center;
      height: 54px;
      border-top: 0.5px dashed #E6E6E6;
      margin: 0px -10px;
      padding: 0px 20px;

      &:first-of-type {
        border: none;
      }

      h3 {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 17px;
        margin-right: auto;

        span {
          font-weight: 300;
          font-size: 15px;
          margin: 0px 0px 0px 20px;
          color: #6F6F6F;
        }
      }

      div {
        display: flex;

        .category {
          display: flex;
          align-items: center;
          margin: 0px 15px 0px 0px;
          font-family: 'Roboto';
          font-weight: 500;
          font-size: 10px;
          background: $mainRed;
          color: white;
          padding: 5px 8px 5px 8px;
          border-radius: 4px;

          &.mobile {
            display: none;
          }
        }

        .dansicon {
          display: none;
          text-decoration: none;
          color: #B5B5B5;
        }
      }
    }
  }

@media screen and (max-width: 800px) {

  #reading {

    .current, .recent {
      margin: 20px 0px 0px 0px;
      padding: 0px;

      h2 {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 10px;
        color: #B5B5B5;
        margin: 0px 0px 12px 0px;
      }
    }

    .current .book {

      &::before {
        display: none;
      }
    }

    .book {
      display: flex;
      align-items: center;
      height: auto;
      border-top: 0.5px dashed #E6E6E6;
      margin: 0px;
      padding: 10px 5px;

      &:first-of-type {
        border: none;
      }

      h3 {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 14px;
        margin-right: auto;

        span {
          display: block;
          font-weight: 300;
          font-size: 12px;
          margin: 8px 0px 0px 10px;
          color: #6F6F6F;
        }
      }

      div {
        display: flex;

        .category {
          display: flex;
          align-items: center;
          margin: 0px;
          font-family: 'Roboto';
          font-weight: 500;
          font-size: 8px;
          background: $mainRed;
          color: white;
          padding: 5px 8px 5px 8px;
          border-radius: 4px;

          &.mobile {
            display: block;
          }

          &.desktop {
            display: none;
          }
        }

        .dansicon {
          display: none;
          text-decoration: none;
          color: #B5B5B5;
        }
      }
    }
  }
}

</style>


