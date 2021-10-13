import * as React from 'react';

const Image = (props) =>
    props.alt ? (
        <figure className="block-markdown__figure">
            <img src={props.src} alt={props.alt} />
            <figcaption className="block-markdown__figcaption">{props.alt}</figcaption>
        </figure>
    ) : (
        <img src={props.src} />
    );

export default Image;
