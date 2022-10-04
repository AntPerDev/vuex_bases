import getRandomInt from "@/helpers/getRandomInt"

export const incrementRandomInt = async ( { commit } ) => {
    
    commit('setLoading', true)
    
    const randomInt = await getRandomInt()
    commit('incrementBy', randomInt )
   
    setTimeout(() => {
        commit('setLoading', false)
    }, 1000);

}