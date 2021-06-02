const box1 = {
  source: './images/icon1.png',
  alt: 'icon1',
  title: 'Declarative',
  text: (
    <p>
      {' '}
      React makes it <br /> painless to create <br /> interactive UIs.
    </p>
  ),
};
const box2 = {
  source: './images/icon2.png',
  alt: 'icon2',
  title: 'Components',
  text: (
    <p>
      {' '}
      Build encapsulated <br /> components that <br /> manage their state.
    </p>
  ),
};
const box3 = {
  source: './images/icon3.png',
  alt: 'icon3',
  title: 'Single-Way',
  text: (
    <p>
      {' '}
      A set of immutable <br /> values are passed to <br /> the components.
    </p>
  ),
};
const box4 = {
  source: './images/icon4.png',
  alt: 'icon4',
  title: 'JSX',
  text: (
    <p>
      {' '}
      Statically-typed, <br /> designed to run on <br /> modern browsers.
    </p>
  ),
};

function Box(props) {
  let box;
  // eslint-disable-next-line default-case
  switch (props.box) {
    case '1':
      box = box1;
      break;
    case '2':
      box = box2;
      break;
    case '3':
      box = box3;
      break;
    case '4':
      box = box4;
      break;
  }
  const { source, alt, title, text } = box;
  return (
    <article className="App-main-box">
      <img src={source} alt={alt} />
      <h2>{title}</h2>
      {text}
    </article>
  );
}

export default Box;
