function Person(props){
    const {name , age } = props
    return(
        <>
            <p>{name}</p>
            <p>{age}</p>
        </>
    )
}

export default Person