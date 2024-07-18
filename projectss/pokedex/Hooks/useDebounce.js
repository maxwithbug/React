

function UseDebounce(cb , delay = 500){
    let timerID ;
    return (...args)=>{
        clearTimeout(timerID)
        timerID = setTimeout(()=>{
            cb(...args)
        }, delay)
    }
}

export default UseDebounce;