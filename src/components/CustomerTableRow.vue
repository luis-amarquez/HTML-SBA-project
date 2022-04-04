<template>
  <tr>
    <td>{{ firstName }}</td>
    <td>{{ lastName }}</td>
    <td>{{ notes }}</td>
    <td>
      <div class="btn-group">
        <a
          :href="`#customer${i}-${firstName}-${lastName}`"
          class="btn btn-primary mx-1"
          ><Edit
        /></a>
        <button @click="deleteCustomer(i)" class="btn btn-error mx-1">
          <CancelX />
        </button>
      </div>
    </td>
    <div class="modal" :id="`customer${i}-${firstName}-${lastName}`">
      <div class="modal-box">
        <form action="">
          <div class="form-control my-2">
            <label class="input-group input-group-vertical">
              <span>First Name</span>
              <input
                v-model="updateFirstName"
                type="text"
                placeholder="info@site.com"
                class="input input-bordered"
                required
              />
            </label>
          </div>
          <div class="form-control my-2">
            <label class="input-group input-group-vertical">
              <span>Last Name</span>
              <input
                v-model="updateLastName"
                type="text"
                placeholder="info@site.com"
                class="input input-bordered"
                required
              />
            </label>
          </div>
          <div class="form-control my-2">
            <label class="input-group input-group-vertical">
              <span>Notes</span>
              <textarea
                v-model="updateNotes"
                class="input input-bordered"
                placeholder="Notes about customer"
                rows="6"
              ></textarea>
            </label>
          </div>
        </form>
        <div class="modal-action">
          <a @click="resetCustomer" href="#" class="btn btn-error text-white"
            >Cancel</a
          >
          <a
            v-if="updateFirstName.length > 0 && updateLastName.length > 1"
            @click="
              updateCustomer(updateFirstName, updateLastName, updateNotes)
            "
            href="#"
            class="btn btn-primary"
            >Save</a
          >
        </div>
      </div>
    </div>
  </tr>
</template>

<script setup>
import { ref } from "vue";
import { customerStore } from "../stores/customers";
import CancelX from "./icons/CancelX.vue";
import Edit from "./icons/Edit.vue";

const props = defineProps(["firstName", "lastName", "notes", "i"]);

const store = customerStore();
let updateFirstName = ref(props.firstName);
let updateLastName = ref(props.lastName);
let updateNotes = ref(props.notes);

function resetCustomer() {
  updateFirstName.value = props.firstName;
  updateLastName.value = props.lastName;
  updateNotes.value = props.notes;
}

function updateCustomer(fn, ln, notes) {
  store.customers[props.i] = {
    firstName: fn,
    lastName: ln,
    note: notes,
  };
}

function deleteCustomer(id) {
  delete store.customers[id];
}
</script>
