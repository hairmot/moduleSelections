function Reducer(state = defaultState, action) {
    switch (action.type) {
        default :
        console.log("module reducer", state)
            return state;
    }
}

let defaultState = {
    modules : [
        {
            "moduleCode" : "FILM3170",
            "period" : "T1",
            "credits" : 30,
            "occurence" : "3UKC",
            "year" : 2018
        }, 
        {
            "moduleCode" : "LAWS3130",
            "period" : "T2",
            "credits" : 30,
            "occurence" : "3UKC",
            "year" : 2018
        },    
        {
            "moduleCode" : "FILM3160",
            "period" : "T1",
            "credits" : 30,
            "occurence" : "3UKC",
            "year" : 2018
        }, 
        {
            "moduleCode" : "LAWS3120",
            "period" : "T2",
            "credits" : 30,
            "occurence" : "3UKC",
            "year" : 2018
        }
    ]
}

export default Reducer;