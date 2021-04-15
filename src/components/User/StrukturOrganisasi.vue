<template>
    <v-card 
    >
      <v-card-title id="title" class="text-center justify-center py-6">
        <h2  class="basil--text d-none d-sm-flex">
          STRUKTUR ORGANISASI
        </h2>
      </v-card-title>

      <v-tabs
        v-model="tab"
        background-color="white"
        color="basil"
        centered
        show-arrows
        fixed-tabs
      >
        <v-tab
          v-for="(item) in items"
          :key="item.tab"
        >
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="(item, index) in items"
          :key="index"
        >
        <v-row>
          <v-col 
            class="d-none d-sm-flex"
            md="3"
            lg="3"
            xl="3"
          >

          </v-col>
          <v-col 
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <v-card
              flat
            >
              <v-list 
                three-line
              >
               <template v-for="(member, index) in item.content"> 
                  <v-subheader
                    v-if="member.header"
                    :key="index"
                    v-text="memberTabs.tab"
                  ></v-subheader>

                  <v-divider
                    v-else-if="member.divider"
                    :key="index"
                    :inset="member.inset"
                  ></v-divider>
                  
                  <v-list-group
                    v-else-if="member.member"
                    :key="index"
                    no-action
                  >
                    <v-list-item slot='activator'>
                        <v-list-item-avatar 
                          horizontal
                          size="75px"
                        >
                          <v-img :src="member.avatar"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-subtitle v-html="member.title"></v-list-item-subtitle><hr>
                          <v-list-item-title v-html="member.subtitle"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <template v-for='(sub, index) in member.member' >
                        <v-divider
                          v-if="sub.divider"
                          :key="index"
                          :inset="sub.inset"
                        ></v-divider>
                      <v-list-item 
                        v-else
                        :key="index"
                      >
                            <v-list-item-avatar 
                              horizontal
                              size="75px"
                            >
                              <v-img :src="sub.avatar"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                              <v-list-item-subtitle v-html="sub.title"></v-list-item-subtitle><hr>
                              <v-list-item-title v-html="sub.subtitle"></v-list-item-title>
                            </v-list-item-content>
                      </v-list-item>
                    </template>
                  </v-list-group>

                  <v-list-item
                    v-else
                    :key="index"
                    :class="item.classItem(index)"
                  >

                    <v-list-item-avatar 
                      horizontal
                      size="75px"
                    >
                      <v-img :src="member.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-subtitle v-html="member.title"></v-list-item-subtitle><hr>
                      <v-list-item-title v-html="member.subtitle"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                </template>
                <!-- <v-list-group 
                  no-action 
                  v-for='(member, index) in item.content' :key="index"
                >
                    <v-list-item slot='activator'>
                        <v-list-item-avatar 
                          horizontal
                          size="75px"
                        >
                          <v-img :src="member.avatar"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-subtitle v-html="member.title"></v-list-item-subtitle><hr>
                          <v-list-item-title v-html="member.subtitle"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-for='sub in member.member' :key="sub.subtitle">
                        <v-list-item-title>{{ sub.title }}</v-list-item-title>
                        <v-list-item-subtitle>{{ sub.subtitle }}</v-list-item-subtitle>
                    </v-list-item>
                </v-list-group> -->
              </v-list>
            </v-card>

              <v-dialog
                v-model="dialog"
                max-width="400px"
              >
                  <v-list three-line>
                  <template v-for="(item, index) in memberLinmas">
                    <v-subheader
                      v-if="item.title"
                      :key="index"
                      v-text="item.title"
                    ></v-subheader>

                    <v-divider
                      v-else-if="item.divider"
                      :key="index"
                      :inset="item.inset"
                    ></v-divider>

                    <v-list-item
                      v-else
                      :key="item.title"
                    >
                      <v-list-item-avatar>
                        <v-img :src="item.avatar"></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </v-dialog>
            </v-col>
            <v-col
              class="d-none d-sm-flex"
              md="3"
              lg="3"
              xl="3"
            >

            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
</template>

<script>
export default {
  data : () => ({
        tab: null,
        dialog: false,
        memberLinmas : [],
        items: [
          { 
            tab: 'DESA', 
            classItem(index) { 
              return [(index === 0) ? 'yellow lighten-5' :
                     (index === 2) ? 'brown lighten-5' : 
                    (index < 15) ? 'blue-grey lighten-5' : 'grey lighten-5']}, 
            content: [{
              avatar: require('@/assets/pp.png'),
              title: '<span class="text-h6">PERBEKEL</span>',
              subtitle: `<span class="text-subtitle-2">I Made Ardena</span>`,
            },
            { divider: true, inset: true },
            {
              avatar: require('@/assets/pp.png'),
              title: '<span class="text-h6">SEKERTARIS DESA</span>',
              subtitle: `<span class="text--subtitle-2">I Wayan Wirata</span>`,
              
            },
            { divider: true, inset: true },
            {
              avatar: require('@/assets/pp.png'),
              title: '<span class="text-h6">KAUR TU & UMUM</span>',
              subtitle: `<span class="text--subtitle-2">Ni Nyoman Suryani</span>`,
            },
            { divider: true, inset: true },
            {
              avatar: require('@/assets/pp.png'),
              title: '<span class="text-h6">KAUR KEUANGAN</span>',
              subtitle: `<span class="text--subtitle-2">Dewa Ayu Putu Sulasminingsih</span>`,
            },
            { divider: true, inset: true },
            {
              avatar: require('@/assets/pp.png'),
              title: '<span class="text-h6">KAUR PERENCANAAN</span>',
              subtitle: `<span class="text--subtitle-2">I Putu Gita Pariyoga</span>`,
            },
            { divider: true, inset: true },
            {
              avatar: require('@/assets/pp.png'),
              title: '<span class="text-h6">KASI PEMERINTAHAN</span>',
              subtitle: `<span class="text--subtitle-2">Ni Nyoman Alit Asih</span>`,
            },
            { divider: true, inset: true },
            {
              avatar: require('@/assets/pp.png'),
              title: '<span class="text-h6">KASI KESEJAHTERAAN</span>',
              subtitle: `<span class="text--subtitle-2">I Wayan Sunarta</span>`,
            },
            { divider: true, inset: true },
            {
              avatar: require('@/assets/pp.png'),
              title: '<span class="text-h6">KASI PELAYANAN</span>',
              subtitle: `<span class="text--subtitle-2">I Wayan Agus G</span>`,
            },
            { divider: true, inset: true },
            {
              avatar: require('@/assets/pp.png'),
              title: '<span class="text-h6">KELIAN BANJAR DINAS TEGALTEMU KAJA</span>',
              subtitle: `<span class="text--subtitle-2">I Wayan Sudiana</span>`,
            },
            { divider: true, inset: true },
            {
              avatar: require('@/assets/pp.png'),
              title: '<span class="text-h6">KELIAN BANJAR DINAS TEGALTEMU KELOD</span>',
              subtitle: `<span class="text--subtitle-2">Dewa Ketut Wicaksana</span>`,
            },
            { divider: true, inset: true },
            {
              avatar: require('@/assets/pp.png'),
              title: '<span class="text-h6">KELIAN BANJAR DINAS TIBUBIU KAJA</span>',
              subtitle: `<span class="text--subtitle-2">I Made Aryadi</span>`,
            },
            { divider: true, inset: true },
            {
              avatar: require('@/assets/pp.png'),
              title: '<span class="text-h6">KELIAN BANJAR DINAS TIBUBIU KELOD</span>',
              subtitle: `<span class="text--subtitle-2">I Wayan Juli Antara</span>`,
            },
            { divider: true, inset: true },
            {
              avatar: require('@/assets/pp.png'),
              title: '<span class="text-h6">KELIAN BANJAR DINAS PASUT</span>',
              subtitle: `<span class="text--subtitle-2">Komang Agus Sandi P</span>`,
            },] },
          { 
            tab: 'BPD',
            classItem(index) { 
              return [(index === 0) ? 'yellow lighten-5' :
                     (index === 2) ? 'brown lighten-5' : 
                    (index === 4) ? 'blue-grey lighten-5' : 'grey lighten-5']}, 
            content: [
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">KETUA</span>',
                subtitle: `<span class="text--subtitle-2">I Wayan Widarsa, S.Pd, M.Pd</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">WAKIL KETUA</span>',
                subtitle: `<span class="text--subtitle-2">Drs. I Nyoman Welagama</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">SEKRETARIS</span>',
                subtitle: `<span class="text--subtitle-2">I Wayan Agus Sudarsana</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">ANGGOTA</span>',
                subtitle: `<span class="text--subtitle-2">Ir. Wayan Puja A</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">ANGGOTA</span>',
                subtitle: `<span class="text--subtitle-2">I Dewa Nyoman Rai Gunadi</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">ANGGOTA</span>',
                subtitle: `<span class="text--subtitle-2">Tri Murti Ningsih</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">ANGGOTA</span>',
                subtitle: `<span class="text--subtitle-2">Ni Made Dwiyanti</span>`,
              },
            ]},
          { 
            tab: 'LPM',
            classItem(index) { 
              return [(index === 0) ? 'yellow lighten-5' : 
                    (index <= 4) ? 'blue-grey lighten-5' : 'grey lighten-5']},
            content: [
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">KETUA</span>',
                subtitle: `<span class="text--subtitle-2">Drs. I Wayan Westa</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">SEKRETARIS</span>',
                subtitle: `<span class="text--subtitle-2">I Ketut Muliana, S.Pd, M.Pd</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">BENDAHARA</span>',
                subtitle: `<span class="text--subtitle-2">I KETUT WIRKA</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text--body-1"><b>BIDANG PENYELENGGARAAN PEMERINTAH DESA</b></span>',
                subtitle: `<span class="text--subtitle-2">I Made Agus Tana</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text--body-1"><b>BIDANG PENYELENGGARAAN PEMERINTAH DESA</b></span>',
                subtitle: `<span class="text--subtitle-2">Dewa Made Adnyana</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">BIDANG PEMBANGUNAN</span>',
                subtitle: `<span class="text--subtitle-2">Drs. I Ketut Arsana Yasa</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">BIDANG PEMBANGUNAN</span>',
                subtitle: `<span class="text--subtitle-2">I Made Subina</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">BIDANG PEMBINAAN MASYARAKAT</span>',
                subtitle: `<span class="text--subtitle-2">Drs. I Wayan Sidep Yudhana</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">BIDANG PEMBINAAN MASYARAKAT</span>',
                subtitle: `<span class="text--subtitle-2">I Made Puja Arjana</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text--body-1"><b>BIDANG PEMBERDAYAAN MASYARAKAT</b></span>',
                subtitle: `<span class="text--subtitle-2">I Made Sumadi Arta</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text--body-1"><b>BIDANG PEMBERDAYAAN MASYARAKAT</b></span>',
                subtitle: `<span class="text--subtitle-2">I Nyoman Duija Antara</span>`,
              },
            ] 
          },
          { 
            tab: 'LINMAS',
            classItem(index) { 
              return [(index === 0) ? 'yellow lighten-5' :
                     (index === 2) ? 'brown lighten-5' : 
                    (index < 15) ? 'blue-grey lighten-5' : 'grey lighten-5']}, 
            content: [
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">SATUAN LINMAS</span>',
                subtitle: `<span class="text--subtitle-2">I Made Ardena</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">DANTON</span>',
                subtitle: `<span class="text--subtitle-2">I Nyoman Sugita</span>`,
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">DANRU 1</span>',
                subtitle: `<span class="text--subtitle-2">I Wayan Kardiana</span>`,
                member: [
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 1</span>',
                    subtitle: `<span class="text--subtitle-2">I Wayan Sujana</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 2</span>',
                    subtitle: `<span class="text--subtitle-2">I Wayan Maswidyana K</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 3</span>',
                    subtitle: `<span class="text--subtitle-2">I Made Nuarta</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 4</span>',
                    subtitle: `<span class="text--subtitle-2">I Nyoman Sukur A</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 5</span>',
                    subtitle: `<span class="text--subtitle-2">Dewa Ketut Suarsana</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 6</span>',
                    subtitle: `<span class="text--subtitle-2">I Putu Adi Sriana</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 7</span>',
                    subtitle: `<span class="text--subtitle-2">I Ketut Arsana</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 8</span>',
                    subtitle: `<span class="text--subtitle-2">Dewa Ketut Puana</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 9</span>',
                    subtitle: `<span class="text--subtitle-2">Dewa Putu Juniarta</span>`,
                  },
                ]
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">DANRU 2</span>',
                subtitle: `<span class="text--subtitle-2">I Gede A Wirawan</span>`,
                member: [
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 1</span>',
                    subtitle: `<span class="text--subtitle-2">I Nyoman Mudana</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 2</span>',
                    subtitle: `<span class="text--subtitle-2">I Made Sugiada</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 3</span>',
                    subtitle: `<span class="text--subtitle-2">I Gede Nyoman Suartana</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 4</span>',
                    subtitle: `<span class="text--subtitle-2">I Gede Made Sumayasa</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 5</span>',
                    subtitle: `<span class="text--subtitle-2">I Wayan Sudika</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 6</span>',
                    subtitle: `<span class="text--subtitle-2">I Gusti Putu Sudiarsana</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 7</span>',
                    subtitle: `<span class="text--subtitle-2">I Gusti Putu Sedana</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 8</span>',
                    subtitle: `<span class="text--subtitle-2">I Gede MM Suardita</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 9</span>',
                    subtitle: `<span class="text--subtitle-2">I Gusti Putu Suastika</span>`,
                  },
                ]
              },
              { divider: true, inset: true },
              {
                avatar: require('@/assets/pp.png'),
                title: '<span class="text-h6">DANRU 3</span>',
                subtitle: `<span class="text--subtitle-2">I Wayan Kewantara</span>`,
                member: [
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 1</span>',
                    subtitle: `<span class="text--subtitle-2">I Wayan Muliadi</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 2</span>',
                    subtitle: `<span class="text--subtitle-2">I Wayan Juliantara</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 3</span>',
                    subtitle: `<span class="text--subtitle-2">I Nyoman Astika</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 4</span>',
                    subtitle: `<span class="text--subtitle-2">I Made Sutamayasa</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 5</span>',
                    subtitle: `<span class="text--subtitle-2">I Nyoman Sukanada</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 6</span>',
                    subtitle: `<span class="text--subtitle-2">I Ketut Sumadiyasa</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 7</span>',
                    subtitle: `<span class="text--subtitle-2">I Nyoman Mahardika Adi P</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 8</span>',
                    subtitle: `<span class="text--subtitle-2">I Made Wiana</span>`,
                  },
                  { divider: true, inset: true },
                  {
                    avatar: require('@/assets/pp.png'),
                    title: '<span class="text-h6">ANGGOTA 9</span>',
                    subtitle: `<span class="text--subtitle-2">I Made Adi Artono A</span>`,
                  },
                ]
              },
            ]
          },
        ],
  }),
  created() {
  },
  methods: {
    linmasMember(member) {
      this.memberLinmas = member
      this.dialog = true
    }
  }
}
</script>

<style>

@media (min-width: 320px) and (max-width: 425px) {
  #title {
    z-index: -1;
    position: absolute;
  }
}
</style>