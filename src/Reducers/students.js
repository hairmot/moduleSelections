function Reducer(state = defaultState, action) {
    switch (action.type) {
        case 'setSelections' :
                var studentDetails = state.students.filter(a => a.sprCode === action.details.sprCode)[0];  
                var updatedStudent = {
                    "sprCode": studentDetails.sprCode,
                    "selections": action.details.selections
                }
                var newState = {
                    students: [...state.students.filter(a => a.sprCode !== action.details.sprCode), updatedStudent]
                }
            
            return newState;
        default :
            return state;
    }
}

let defaultState = {
    "students" : [
        {
            "sprCode" : "18000811/1",
            "selections" : [
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
    ]
}


export default Reducer;