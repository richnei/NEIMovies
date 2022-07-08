<template>
   <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="green white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-6 white--text"
          icon
        >
          <v-icon size="30px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Viva Forevis aptent taciti sociosqu ad litora torquent.Manduma pindureta quium dia nois paga.
        Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Detraxit consequat et quo num tendi nada.Viva Forevis aptent taciti sociosqu ad litora torquent.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Rich Nei Moreira de Souza Filho</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    data: () =>({
        icons:[
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram'
        ]
    })
}
</script>

<style>

</style>