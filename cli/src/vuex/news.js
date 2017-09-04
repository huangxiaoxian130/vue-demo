/**
 * Created by huangxiaoxian on 2017/9/4.
 */

let news={
  state: {
    news:[
      {id:1,'title':'hyx1'},
      {id:2,'title':'hyx2'}
    ]
  },
  getters:{
    getAllNews(state){
      return state.news
    }
  }
}


export  default news
