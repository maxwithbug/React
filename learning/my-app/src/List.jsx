function List(props){
    const {list} = props
    return(
        <>
            <ul>
                {
                    list.map((item)=>(    /* The curly braces are used in JSX to denote JavaScript expressions within the JSX syntax. In the List component, items.map() is a JavaScript expression that evaluates to an array of JSX elements. Within JSX, you can directly embed JavaScript expressions inside curly braces. */
                        <li>{item}</li> 
                    ))
                }
            </ul>
        </>
    )
}

export default List


