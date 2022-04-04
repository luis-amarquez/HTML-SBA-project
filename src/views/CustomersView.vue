<template>
  <NavBar />
  <div class="container mx-auto pt-4">
    <RouterLink to="/add" class="btn btn-primary my-4">
      <Add />
    </RouterLink>
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <CustomerTableRow
            v-for="(customer, index) in store.customers"
            :key="index"
            :first-name="customer.firstName"
            :last-name="customer.lastName"
            :notes="customer.note"
            :i="index"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { customerStore } from "../stores/customers";
import CustomerTableRow from "../components/CustomerTableRow.vue";
import NavBar from "../components/NavBar.vue";
import Add from "../components/icons/Add.vue";

const store = customerStore();
</script>
