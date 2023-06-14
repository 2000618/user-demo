const state={
    num:0
}
const mutations={
        JIA(state,value){
            state.num+=value
            console.log(state.num);
        }
}

const actions ={
    jia(context,value){
        if (context.state.num%2 ==1) {
            context.commit('JIA',value)
        }
    }
}


const getters={
    ride(state){
        return state.num*10
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}