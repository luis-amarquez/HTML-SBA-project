<template>
  <NavBar />
  <main class="container mx-auto flex flex-1 flex-col md:p-0 lg:px-8 lg:pt-8">
    <div v-if="showAlert" class="alert alert-success shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Customer was added successfully</span>
      </div>
    </div>
    <section class="bg-cream-lighter p-4 shadow">
      <div class="md:flex">
        <h2 class="mb-6 text-sm uppercase tracking-wide sm:text-lg md:w-1/3">
          Add New Customer
        </h2>
      </div>
      <div>
        <div class="mb-8 md:flex">
          <div class="md:w-1/3">
            <p class="text-md uppercase tracking-wide">Customer Info</p>
            <p class="text-red text-xs font-light">
              This entire section is required.
            </p>
          </div>
          <div class="mb:mt-0 mt-2 md:flex-1 md:px-3">
            <div class="mb-4">
              <label class="block text-xs font-bold tracking-wide"
                >First Name</label
              >
              <input
                v-model="customerFirstName"
                class="w-full border-0 p-4 shadow-inner"
                type="text"
                name="name"
                placeholder="John"
              />
            </div>
            <div class="mb-4">
              <label class="block text-xs font-bold tracking-wide"
                >Last Name</label
              >
              <input
                v-model="customerLastName"
                class="w-full border-0 p-4 shadow-inner"
                type="text"
                name="name"
                placeholder="Doe"
              />
            </div>
          </div>
        </div>
        <div class="mb-6 md:flex">
          <div class="md:w-1/3">
            <p class="text-md uppercase tracking-wide">Notes</p>
          </div>
          <div class="mb:mt-0 mt-2 md:flex-1 md:px-3">
            <textarea
              v-model="customerNote"
              class="w-full border-0 p-4 shadow-inner"
              placeholder="Notes about customer"
              rows="6"
            ></textarea>
          </div>
        </div>
        <div
          v-if="customerFirstName && customerLastName"
          class="border-t-1 border-cream-dark mb-6 border border-x-0 border-b-0 md:flex"
        >
          <div class="mt-6 px-3 text-center md:flex-1 md:text-right">
            <button @click="addCustomer(customerFirstName, customerLastName, customerNote)" class="btn btn-primary">Add Customer</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { customerStore } from "../stores/customers";
import NavBar from "../components/NavBar.vue";

const store = customerStore();
const showAlert = ref(false);

const customerFirstName = ref("");
const customerLastName = ref("");
const customerNote = ref("");

function addCustomer(fn, ln, note) {
  store.customers[store.customerId] = {
    firstName: fn,
    lastName: ln,
    note: note,
  };
  store.customerId = store.customerId + 1;
  showAlert.value = true;
  customerFirstName.value = "";
  customerLastName.value = "";
  customerNote.value = "";
  delay(2500).then(() => (showAlert.value = false));
}

function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}
</script>
