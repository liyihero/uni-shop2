import {
  mapGetters
} from 'vuex';

export default {
  methods: {
    setBadge() {
      uni.setTabBarBadge({
        index: 2,
        text: this.total == 0 ? '' : this.total + ''
      });
    }
  },
  onShow() {
    this.setBadge();
  },
  computed: {
    ...mapGetters('m_cart', ['total'])
  }
}