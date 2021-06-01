import {Component} from 'react';
const box1 = {'source': "./images/icon1.png", 'alt': 'icon1', 'title': 'Declarative', 'text': (<p> React makes it <br /> painless to create <br /> interactive UIs.</p>)};

class Box1 extends Component {
    render() {
        return (
            <article  className="App-main-box">
                <img src={box1.source} alt={box1.alt} />
                <h2>{box1.title}</h2>
                {box1.text}
            </article>
        )
    }
}

export default Box1;