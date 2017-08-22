import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import IntroLearn from '@/components/Intro/Learn'
import IntroManual from '@/components/Intro/Manual'
import IntroDoc from '@/components/Intro/Doc'
import IntroTool from '@/components/Intro/Tool'
import AdvanceBook from '@/components/Advance/Book'
import AdvanceSeries from '@/components/Advance/Series'
import DeepLibrary from '@/components/Deep/Library'
import DeepFramework from '@/components/Deep/Framework'
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
      path: '/intro/manual',
      name: 'Manual',
      component: IntroManual
    },
    {
      path: '/intro/doc',
      name: 'Doc',
      component: IntroDoc
    },
    {
      path: '/intro/tool',
      name: 'Tool',
      component: IntroTool
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
