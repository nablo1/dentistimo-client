<template>
  <div>
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
      <table class=" table-bordered">
        <thead>
          <tr>
            <th>
              <b-button scope="col" pill variant="success">8:30-9:00</b-button>
            </th>
            <th>
              <b-button scope="col" pill variant="success">9:00-9:30</b-button>
            </th>
            <th>
              <b-button scope="col" pill variant="success">9:30-10:00</b-button>
            </th>
            <th>
              <b-button scope="col" pill variant="success"
                >10:00-10:30</b-button
              >
            </th>
            <th>
              <b-button scope="col" pill variant="success"
                >10:30-11:00</b-button
              >
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <b-button scope="col" pill variant="success"
                >11:00-11:30</b-button
              >
            </th>
            <th>
              <b-button scope="col" pill variant="success"
                >11:30-12:00</b-button
              >
            </th>
            <th>
              <b-button scope="col" pill variant="success"
                >Lunch break</b-button
              >
            </th>
            <th>
              <b-button scope="col" pill variant="success"
                >13:00-13:30</b-button
              >
            </th>
            <th>
              <b-button scope="col" pill variant="success"
                >13:30-14:00</b-button
              >
            </th>
          </tr>
          <th>
            <b-button scope="col" pill variant="success">14:00-14:30</b-button>
          </th>
          <th>
            <b-button scope="col" pill variant="success">14:30-15:00</b-button>
          </th>
          <th>
            <b-button scope="col" pill variant="success">Fika Break</b-button>
          </th>
          <th>
            <b-button scope="col" pill variant="success">15:30-16:00</b-button>
          </th>
          <th>
            <b-button scope="col" pill variant="success">16:00-16:30</b-button>
          </th>

          <tr>
            <th>
              <b-button scope="col" pill variant="success"
                >16:30-17:00</b-button
              >
            </th> 
            <th scope="col" ></th>
            <th scope="col" ></th>
            <th scope="col" ></th>
            <th scope="col" ></th>
          </tr>
        </tbody>
      </table>
    </div>
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
  }
  .table-bordered {
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
    border: 2px solid black;
    border-collapse: collapse;
  }
</style>
