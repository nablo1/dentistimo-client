<template>
  <div class="bookingPage">
    <div>
      <b-row>
        <b-col class="table" md="auto">
          <b-calendar
            v-model="date"
            @context="onContext"
            locale="en-US"
          ></b-calendar>
        </b-col>
        <b-col class="status">
          <p class="mb-0">Date:</p>
          <pre class="small">{{ date }}</pre></b-col
        >
      </b-row>
    </div>
    <br />
    <div>
      <table class="table-bordered" md="auto">
        <thead>
          <tr>
            <th>
              <b-button scope="col" variant="outline-primary"
                >08:30-09:00</b-button
              >
            </th>
            <th>
              <b-button scope="col" variant="outline-primary"
                >09:00-09:30</b-button
              >
            </th>
            <th>
              <b-button scope="col" variant="outline-primary"
                >09:30-10:00</b-button
              >
            </th>
            <th>
              <b-button scope="col" variant="outline-primary"
                >10:00-10:30</b-button
              >
            </th>
            <th>
              <b-button scope="col" variant="outline-primary"
                >10:30-11:00</b-button
              >
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <b-button scope="col" variant="outline-primary"
                >11:00-11:30</b-button
              >
            </th>
            <th>
              <b-button scope="col" variant="outline-primary"
                >11:30-12:00</b-button
              >
            </th>
            <th>
              <b-button scope="col" variant="primary" disabled size="sm"
                >Lunch Break</b-button
              >
            </th>
            <th>
              <b-button scope="col" variant="outline-primary"
                >13:00-13:30</b-button
              >
            </th>
            <th>
              <b-button scope="col" variant="outline-primary"
                >08:30-09:00</b-button
              >
            </th>
          </tr>
          <th>
            <b-button scope="col" variant="outline-primary"
              >14:00-14:30</b-button
            >
          </th>
          <th>
            <b-button scope="col" variant="outline-primary"
              >14:30-15:00</b-button
            >
          </th>
          <th>
            <b-button scope="col" variant="primary" disabled size="md">
              Fika Break</b-button
            >
          </th>
          <th>
            <b-button scope="col" variant="outline-primary"
              >15:30-16:00</b-button
            >
          </th>
          <th>
            <b-button scope="col" variant="outline-primary"
              >16:00-16:30</b-button
            >
          </th>

          <tr>
            <th>
              <b-button scope="col" variant="outline-primary"
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
        date: '',
        context: null,
        myToggle: false,
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
  }
  .status {
    text-align: center;
  }
  .table-bordered {
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(0, 0, 0);
    border-collapse: collapse;
    table-layout: fixed;
    text-align: center;
    margin: 20px auto;
  }
  .book {
    margin-left: 47%;
    margin-top: 1cm;
    margin-bottom: 1in;
  }
</style>
