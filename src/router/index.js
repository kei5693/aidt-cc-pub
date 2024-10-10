import { createRouter, createWebHistory } from 'vue-router'
import UI_CC_001 from '../views/UI_CC_001.vue'
import UI_CC_002 from '../views/UI_CC_002.vue'
import UI_CC_003 from '../views/UI_CC_003.vue'
import UI_CC_004 from '../views/UI_CC_004.vue'
import UI_CC_004_nodata from '../views/UI_CC_004_nodata.vue'
import UI_CC_005 from '../views/UI_CC_005.vue'
import UI_CC_006 from '../views/UI_CC_006.vue'
import UI_CC_007 from '../views/UI_CC_007.vue'
import UI_CC_020 from '../views/UI_CC_020.vue'
import UI_CC_008 from '../views/UI_CC_008.vue'
import UI_CC_008_nodata from '../views/UI_CC_008_nodata.vue'
import UI_CC_009 from '../views/UI_CC_009.vue'
import UI_CC_010 from '../views/UI_CC_010.vue'
import UI_CC_011 from '../views/UI_CC_011.vue'
import UI_CC_013 from '../views/UI_CC_013.vue'
import UI_CC_017 from '../views/UI_CC_017.vue'

const routes = [
  {
    path: '/',
    name: 'UI_CC_001',
    component: UI_CC_001
  },
  {
    path: '/UI_CC_002',
    name: 'UI_CC_002',
    component: UI_CC_002
  },
  {
    path: '/UI_CC_003',
    name: 'UI_CC_003',
    component: UI_CC_003
  },
  {
    path: '/UI_CC_004',
    name: 'UI_CC_004',
    component: UI_CC_004
  },
  {
    path: '/UI_CC_004_nodata',
    name: 'UI_CC_004_nodata',
    component: UI_CC_004_nodata
  },
  {
    path: '/UI_CC_005',
    name: 'UI_CC_005',
    component: UI_CC_005
  },
  {
    path: '/UI_CC_006',
    name: 'UI_CC_006',
    component: UI_CC_006
  },
  {
    path: '/UI_CC_007',
    name: 'UI_CC_007',
    component: UI_CC_007
  },
  {
    path: '/UI_CC_020',
    name: 'UI_CC_020',
    component: UI_CC_020
  },
  {
    path: '/UI_CC_008',
    name: 'UI_CC_008',
    component: UI_CC_008
  },
  {
    path: '/UI_CC_008_nodata',
    name: 'UI_CC_008_nodata',
    component: UI_CC_008_nodata
  },
  {
    path: '/UI_CC_009',
    name: 'UI_CC_009',
    component: UI_CC_009
  },
  {
    path: '/UI_CC_010',
    name: 'UI_CC_010',
    component: UI_CC_010
  },
  {
    path: '/UI_CC_011',
    name: 'UI_CC_011',
    component: UI_CC_011
  },
  {
    path: '/UI_CC_013',
    name: 'UI_CC_013',
    component: UI_CC_013
  },
  {
    path: '/UI_CC_017',
    name: 'UI_CC_017',
    component: UI_CC_017
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
