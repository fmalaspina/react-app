function Message() {
    const name = 'Fernando'
    if (name) 
        return <h1>Hello {name}</h1>
    return <h1>World Changed!</h1>
}


export default Message;