<template>
  <div class="bookingPage">
    <div>
      <b-row>
        <b-col class="table" md="auto">
          <b-calendar
            v-model="value"
            @context="onContext"
            locale="en-US"
          ></b-calendar>
        </b-col>
        <b-col> </b-col>
      </b-row>
    </div>
    <br />
    <div>
      <table class="table-bordered" md="auto">
        <thead>
          <tr>
            <th>
              <b-button scope="col" squared variant="primary"
                >8:30-9:00</b-button
              >
            </th>
            <th>
              <b-button scope="col" squared variant="primary"
                >9:00-9:30</b-button
              >
            </th>
            <th>
              <b-button scope="col" squared variant="primary"
                >9:30-10:00</b-button
              >
            </th>
            <th>
              <b-button scope="col" squared variant="primary"
                >10:00-10:30</b-button
              >
            </th>
            <th>
              <b-button scope="col" squared variant="primary"
                >11:00-11:30</b-button
              >
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <b-button scope="col" squared variant="primary"
                >11:00-11:30</b-button
              >
            </th>
            <th>
              <b-button scope="col" squared variant="primary"
                >11:30-12:00</b-button
              >
            </th>
            <th>
              <b-button scope="col" disabled size="sm" squared variant="primary"
                >Lunch break</b-button
              >
            </th>
            <th>
              <b-button scope="col" squared variant="primary"
                >13:00-13:30</b-button
              >
            </th>
            <th>
              <b-button scope="col" squared variant="primary"
                >13:30-14:00</b-button
              >
            </th>
          </tr>
          <th>
            <b-button scope="col" squared variant="primary"
              >14:00-14:30</b-button
            >
          </th>
          <th>
            <b-button scope="col" squared variant="primary"
              >14:30-15:00</b-button
            >
          </th>
          <th>
            <b-button scope="col" disabled size="md" squared variant="primary"
              >Fika Break</b-button
            >
          </th>
          <th>
            <b-button scope="col" squared variant="primary"
              >15:30-16:00</b-button
            >
          </th>
          <th>
            <b-button scope="col" squared variant="primary"
              >16:00-16:30</b-button
            >
          </th>

          <tr>
            <th>
              <b-button scope="col" squared variant="primary"
                >16:30-17:00</b-button
              >
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </tbody>
      </table>
    </div>
    <div><b-button class="book" squared variant="primary">Book</b-button></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        context: null,
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      },
    },
  }
</script>
<style scoped>
  .table {
    text-align: center;
    background-color: rgb(185, 209, 236);
  }
  .table-bordered {
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
    border: 2px solid black;
    border-collapse: collapse;
    background-color: rgb(185, 209, 236);
  }
  .book {
    margin-left: 47%;
    margin-top: 1cm;
    margin-bottom: 1in;
  }
  .bookingPage {
    background-color: rgb(185, 209, 236);
  }
</style>
