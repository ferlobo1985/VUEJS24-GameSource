<template>
    <div class="container-fluid">
        <div class="row">
            <nav
                id="sidebarMenu"
                class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
                <div class="position-sticky pt-3">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'dashboard'}">
                                <v-icon icon="mdi-view-dashboard"/>
                                Dashboard
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'user_profile'}">
                                <v-icon icon="mdi-account"/>
                                Profile
                            </router-link>
                        </li>
                        <li class="nav-item" v-if="userStore.user.isAdmin">
                            <router-link class="nav-link" :to="{name:'admin_articles'}">
                                <v-icon icon="mdi-note-outline"/>
                                Articles
                            </router-link>
                        </li>
                        <li class="nav-item" v-if="userStore.user.isAdmin">
                            <router-link class="nav-link" :to="{name:'admin_add'}">
                                <v-icon icon="mdi-note-edit-outline"/>
                                Add articles
                            </router-link>
                        </li>

                    </ul>
                </div>
            </nav>

            <main
                id="admin_body"
                class="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            >
                <div>
                    <router-view/>
                </div>
            </main>
        </div>
    </div>
</template>


<script setup>
    /// USER STORE
    import { useUserStore } from '@/stores/user';
    const userStore = useUserStore()
</script>