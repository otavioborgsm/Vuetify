<template>
  <div class="text-center">
    <v-container>
      <v-avatar
        size="200"
        class="mt-5"
      >
        <img
          src="https://avatars.githubusercontent.com/u/62483464?v=4"
          alt="Otávio"
        >
      </v-avatar>

      <h1 class="mt-5">Otávio de Medeiros Borges</h1>

      <p>Redes Sociais:</p>

      <v-container>
        <v-row>
          <v-col cols="12" md="6" v-for="redeSocial of redesSociais" v-bind:key="redeSocial.nome">
            <a :href="redeSocial.url" target="_blank">
              <v-card class="pa-2" outlined>
                <v-icon>{{ redeSocial.icone }}</v-icon>
                {{ redeSocial.nome }}
              </v-card>
            </a>
          </v-col>
        </v-row>
      </v-container>

    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      redesSociais:[
        {
          nome: 'LinkedIn',
          icone: 'mdi-linkedin',
          url: 'https://www.linkedin.com/in/otavioborgsm/'
        },
        {
          nome: 'GitHub',
          icone: 'mdi-github',
          url: 'https://github.com/otavioborgsm'
        }
      ]
    }
  }
}
</script>

<style scoped>
  a, a:link, a:hover, a:visited{
    text-decoration: none;
    color: inherit;
  }
</style>
