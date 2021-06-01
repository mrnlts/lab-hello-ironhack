function Box (data) {
    const {source, alt, title, text} = data;
    return (
        <article  className="App-main-box">
            <img src={source} alt={alt} />
            <h2>{title}</h2>
            {text}
        </article>
    )
}

export default Box;