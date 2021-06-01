const box2 = {'source': "./images/icon2.png", 'alt': 'icon2', 'title': 'Components', 'text': (<p> Build encapsulated <br /> components that <br /> manage their state.</p>)};

function Box2() {
    return (
        <article className="App-main-box">
        <img src={box2.source} alt={box2.alt} />
        <h2>{box2.title}</h2>
        {box2.text}
        </article>
    )
}

export default Box2;