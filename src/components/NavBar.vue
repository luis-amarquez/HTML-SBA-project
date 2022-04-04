<template>
  <div class="navbar bg-neutral text-white">
    <div class="flex-1">
      <RouterLink to="/" class="btn btn-ghost text-xl normal-case">Customer Management</RouterLink>
    </div>
    <div class="flex-none">
      <div class="dropdown-end dropdown text-black">
        <label tabindex="0" class="avatar btn btn-ghost btn-circle">
          <div class="w-10 rounded-full">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
            />
          </div>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li><RouterLink to="/">Customers</RouterLink></li>
          <li><RouterLink to="/add">Add Customers</RouterLink></li>
          <li><a @click="logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "../router";

function logout() {
  localStorage.removeItem("loggedIn");
  router.push({ path: "/login" });
}
</script>
