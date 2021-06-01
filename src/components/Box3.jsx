import {Component} from 'react';
const box3 = {'source': "./images/icon3.png", 'alt': 'icon3', 'title': 'Single-Way', 'text': (<p> A set of immutable <br /> values are passed to <br /> the components.</p>)};

class Box3 extends Component {
    render() {
        return (
            <article  className="App-main-box">
                <img src={box3.source} alt={box3.alt} />
                <h2>{box3.title}</h2>
                {box3.text}
            </article>
        )
    }
}

export default Box3;