import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import IntroLearn from '@/components/Intro/Learn'
import IntroVideo from '@/components/Intro/Video'
import AdvanceBook from '@/components/Advance/Book'
import AdvanceSeries from '@/components/Advance/Series'
import DeepLibrary from '@/components/Deep/Library'
import DeepFramework from '@/components/Deep/Framework'
import DeepTool from '@/components/Deep/Tool'
import ShareCommunity from '@/components/Share/Community'
import ShareBlog from '@/components/Share/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/intro/learn',
      name: 'Learn',
      component: IntroLearn
    },
    {
      path: '/intro/video',
      name: 'Video',
      component: IntroVideo
    },
    {
      path: '/advance/book',
      name: 'Book',
      component: AdvanceBook
    },
    {
      path: '/advance/series',
      name: 'Series',
      component: AdvanceSeries
    },
    {
      path: '/deep/library',
      name: 'DeepLibrary',
      component: DeepLibrary
    },
    {
      path: '/deep/framework',
      name: 'DeepFramework',
      component: DeepFramework
    },
    {
      path: '/deep/tool',
      name: 'DeepTool',
      component: DeepTool
    },
    {
      path: '/share/community',
      name: 'ShareCommunity',
      component: ShareCommunity
    },
    {
      path: '/share/blog',
      name: 'ShareBlog',
      component: ShareBlog
    }
  ]
})
