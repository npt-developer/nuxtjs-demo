// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
// import ja from 'vuetify/src/locale/ja'
const ja = {
  close: 'Close',
  dataIterator: {
    pageText: '{0}-{1} 件目 / {2}件',
    noResultsText: '検索結果が見つかりません。',
    loadingText: 'Loading item...',
  },
  dataTable: {
    itemsPerPageText: '1ページあたりの行数：',
    ariaLabel: {
      sortDescending: ': Sorted descending. Activate to remove sorting.',
      sortAscending: ': Sorted ascending. Activate to sort descending.',
      sortNone: ': Not sorted. Activate to sort ascending.',
    },
    sortBy: 'Sort by',
  },
  dataFooter: {
    itemsPerPageText: '1ページあたりの件数：',
    itemsPerPageAll: 'すべて',
    nextPage: '次のページ',
    prevPage: '前のページ',
    firstPage: '一ページ目',
    lastPage: '最後のページ',
  },
  datePicker: {
    itemsSelected: '{0}日付選択',
  },
  noDataText: 'データはありません。',
  carousel: {
    prev: '前のビジュアル',
    next: '次のビジュアル',
  },
  calendar: {
    moreEvents: 'さらに{0}',
  },
  fileInput: {
    counter: '{0} files',
    counterSize: '{0} files ({1} in total)',
  },
};


Vue.use(Vuetify)
Vue.use(VueI18n)

const messages = {
  ja: {
    $vuetify: ja
  },
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'ja', // set locale
  messages, // set locale messages
})

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
})