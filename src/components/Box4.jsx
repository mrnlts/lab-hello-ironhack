const box4 = {'source': "./images/icon4.png", 'alt': 'icon4', 'title': 'JSX', 'text': (<p> Statically-typed, <br /> designed to run on <br /> modern browsers.</p>)};

function Box4() {
    return (
        <article className="App-main-box">
        <img src={box4.source} alt={box4.alt} />
        <h2>{box4.title}</h2>
        {box4.text}
        </article>
    )
}

export default Box4;