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
import DeepLibraryUI from '@/components/Deep/LibraryUI'
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
      name: 'IntroLearn',
      component: IntroLearn
    },
    {
      path: '/intro/manual',
      name: 'IntroManual',
      component: IntroManual
    },
    {
      path: '/intro/doc',
      name: 'IntroDoc',
      component: IntroDoc
    },
    {
      path: '/intro/tool',
      name: 'IntroTool',
      component: IntroTool
    },
    {
      path: '/advance/book',
      name: 'AdvanceBook',
      component: AdvanceBook
    },
    {
      path: '/advance/series',
      name: 'AdvanceSeries',
      component: AdvanceSeries
    },
    {
      path: '/deep/library',
      name: 'DeepLibrary',
      component: DeepLibrary
    },
    {
      path: '/deep/library-ui',
      name: 'DeepLibraryUI',
      component: DeepLibraryUI
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
