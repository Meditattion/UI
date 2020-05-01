
  const LabelsCounterID = (state=0, action) => {
    switch (action.type) {
        case "ADD_LABEL":
            return state++;
        default:
            return state;
    }

  }
  
  export default LabelsCounterID;